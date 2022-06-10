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
       jsonIP: []
    };
  }

  async componentDidMount() {
    const res = await axios.get('https://geolocation-db.com/json/')
    this.setState({
      ipaddress: res.data.IPv4,
      ipcity: res.data.city,
      ipcountry: res.data.country_name
    })
  }

  get = async () => {
    const jsonData = await axios.get('https://geolocation-db.com/json/')
    this.state.jsonIP.push(jsonData.data)
    this.setState({
      ipaddress: jsonData.data.IPv4
    })
    // this.state.jsonIP.push(JSON.stringify(jsonData.data))
    // console.log(this.state.jsonIP);
  }

  fetchIP = (event) => {
    event.preventDefault();

    const options = {
        ip: this.state.ipaddress,
        ipcity: this.state.ipcity,
        ipcountry: this.state.ipcountry
    }

    axios({
      url: '/app/submit',
      method: 'POST',
      data: options
    }).then(() => {
      this.get();
    }).catch(() => {
      console.log('internal server error');
    })
  }
  
  render() {
    return (
      <div className="App">
          {/* <p>{this.state.jsonIP} asdadsss</p> */}
          <button onClick={this.get}>Get</button>
          <br/>
          <button onClick={this.fetchIP}>Send to DB</button>
          <h1>{this.state.ipaddress}</h1>
      </div>
    )
  } 
}

export default App;