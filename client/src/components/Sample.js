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
        axios.get('https://mern-stack-trial.herokuapp.com/app')
          .then((res) => {
            // Filter response data where ipdata is included
            const ipdata = res.data.filter((post) => post.ipdata);
            setPosts(ipdata)
          })
          .catch(() => {
            console.log('Error retrieving data')
          })
    }

    const displayData = (posts) => {
      // If posts array length is 0 then returns null
      if (!posts.length) return null;
      return posts.map((post, index) => (
        <div key={index}>
          {!post.ipdata 
          ? console.log("ipdata doesnot exist")
          : <div className="data">
              <p>{post.ipdata.IPv4}</p>
              <p>{post.ipdata.country_name}</p>
              <p>{post.ipdata.city}</p>
              <button onClick={() => deleteData(post._id)}>Delete</button>
            </div>
          }
        </div>
      ));
    }

    const sendIP = async (event) => {
        event.preventDefault();
        const ipdata = await axios.get('https://geolocation-db.com/json/')
        const options = {
            clickedData: true,
            ipdata: ipdata.data
        }

        axios({
          url: '/app/submit',
          method: 'POST',
          data: options
        }).then(res => {
          console.log("added")
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
            {/* <br />
            <button onClick={sendIP}>Send to DB</button>
            <br /> */}
            <div className='table'>{displayData(posts)}</div>
        </div>
    </div>
  )
}

export default Sample