import { useEffect, useState } from "react";
import './Sample.css';
import axios from 'axios';
// import { axiosInstance } from '../config';

const Sample = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      get()
    }, [])

    const get = () => {
        axios.get('/app')
          .then((res) => {
            const data = res.data;
            setPosts(data)
          })
          .catch(() => {
            console.log('Error retrieving data')
          })
    }

    const displayData = (posts) => {
        if (!posts.length) return null;

        return posts.map((post, index) => (
          <div key={index} className='data'>
            <p>{post.ipaddress}</p>
            <p>{post.ipcity}</p>
            <p>{post.ipcountry}</p>
            <button onClick={() => deleteData(post._id)}>Delete</button>
          </div>
        ));
    }

    const fetchIP = async (event) => {
        event.preventDefault();
        const ipdata = await axios.get('https://geolocation-db.com/json/')
        const options = {
            clickedData: true,
            ipaddress: ipdata.data.IPv4,
            ipcity: ipdata.data.city,
            ipcountry: ipdata.data.country_name,
            ipdata: ipdata.data
        }

        axios({
          url: '/app/submit',
          method: 'POST',
          data: options
        }).then(res => {
          get()
        }).catch(err => {
          console.log("internal server error");
        })
    }

    const deleteData = async (id) => {
        const response = await axios.delete(`/app/${id}`)
        if(response.status === 200) {
            console.log("Deleted " + id)
            get()
        }
    }
  
  return (
    <div>
        <div>
            <br />
            <button onClick={fetchIP}>Send to DB</button>
            <br />
            <div className='table'>{displayData(posts)}</div>
        </div>
    </div>
  )
}

export default Sample