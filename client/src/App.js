import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
       ipaddress: '',
       ipcity: '',
       ipcountry:'',
       posts: []
      //  jsonIP: []
    };
  }

  componentDidMount() {
    this.get()  
  }

  get = () => {
    axios.get('/app')
      .then((res) => {
        const data = res.data;
        this.setState({ 
          posts:      data,
          ipaddress:  data.IPv4,
          ipcity:     data.city,
          ipcountry:  data.country_code
        })
      })
      .catch(() => {
        console.log('Error retrieving data')
      })
  }

  displayData = (posts) => {
    if (!posts.length) return null;

    return posts.map((post, index) => (
      <div key={index} className='data'>
        <p>{post.ipaddress}</p>
        <p>{post.ipcity}</p>
        <p>{post.ipcountry}</p>
      </div>
    ));
  }

  fetchIP = async (event) => {
    event.preventDefault();
    const ipdata = await axios.get('https://geolocation-db.com/json/')
    console.log(ipdata.data)
    const options = {
        clickedData: true,
        ipaddress: ipdata.data.IPv4,
        ipcity: ipdata.data.city,
        ipcountry: ipdata.data.country_name
    }

    axios({
      url: '/app/submit',
      method: 'POST',
      data: options
    }).then(res => {
      console.log("Data sent to server");
      console.log(res);
      this.get()
    }).catch(err => {
      console.log("internal server error");
    })
  }
  
  render() {
    return (
      <div className="App">
          <button onClick={this.fetchIP}>Send to DB</button>
          <div className='table'>{this.displayData(this.state.posts)}</div>
      </div>
    )
  } 
}

export default App;