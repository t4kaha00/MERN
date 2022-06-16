import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router,
         Route, 
         NavLink, 
         Routes 
        } from 'react-router-dom';
import './App.css';
import Sample from './components/Sample'

class App extends Component {
  constructor() {
    super();
      this.state = {
        numbers: [1,2,3,4,5,6,7,8,9,"J","Q","K"],
        faces: ["Spade","Heart","Club","Diamond"]
      }
  }
  render() {
    return (
      <div className="App">
        <div>
          <Router>
            <NavLink to="/sample">Sample</NavLink>
            <NavLink to="/">Home</NavLink>
            <Routes>
              <Route path='/sample' element={<Sample/>} />
              <Route path='/' element={<CardComponent/>} />
            </Routes>
          </Router>
        </div>
      </div>
    )
  } 
}

function CardComponent() {
  useEffect(() => {
    displayCard()
  }, [])

  const numbers = [1,2,3,4,5,6,7,8,9,"J","Q","K"]
  const faces = ["Spade","Heart","Club","Diamond"]
  
  const displayCard = () => {
    const card = document.getElementsByClassName('card')[0].children
    const randomtestface = faces[Math.floor(Math.random()*faces.length)]
    const cardelement7 = card[7].className.split(" ")[0].concat(" " + randomtestface)
    const cardelement12 = card[12].className.split(" ")[0].concat(" " + randomtestface)
    const cardelement17 = card[17].className.split(" ")[0].concat(" " + randomtestface)
    
    document.getElementsByClassName('card')[0].children[7].className = cardelement7.toLowerCase()
    document.getElementsByClassName('card')[0].children[12].className = cardelement12.toLowerCase()
    document.getElementsByClassName('card')[0].children[17].className = cardelement17.toLowerCase()
  }

  const changeCard = (int, string) => {
    const cardelement = document.getElementsByClassName('card')[0].children;
    const faceelement = document.getElementsByClassName('face')
    faceelement[0].textContent = string
    cardelement[0].textContent = int
    cardelement[cardelement.length - 1].textContent = int
  }

  const displayRandomCard = () => {
    // Generate random number and face from given arrays
    const randomnumber = numbers[Math.floor(Math.random()*numbers.length)]
    const randomface = faces[Math.floor(Math.random()*faces.length)]
    // console.log(randomnumber, randomface);

    // Get the text content from desired element
    let digitelement1 = document.getElementsByClassName('digit')[0].textContent
    let digitelement2 = document.getElementsByClassName('digit')[1].textContent
    let faceelement = document.getElementsByClassName('face')[0].textContent

    // Get the classname and add the face name for css changes
    const faceclass = document.getElementsByClassName('face')[0].className
    const numberclass1 = document.getElementsByClassName('digit')[0].className
    const numberclass2 = document.getElementsByClassName('digit')[1].className

    console.log(randomnumber);
    switch (randomface.toLowerCase()) {
      case "spade":
        console.log(randomface);
        switch (randomnumber) {
          case 1:
            digitelement1 = 1
            digitelement2 = 1
            return
          case 2: 
            digitelement1 = 2
            digitelement2 = 2
            return
          case 3: 
            digitelement1 = 3
            digitelement2 = 3
            return
          case 4: 
            digitelement1 = 4
            digitelement2 = 4
            return
          case 5: 
            digitelement1 = 5
            digitelement2 = 5
            return
          case 6: 
            digitelement1 = 6
            digitelement2 = 6
            return
          case 7: 
            digitelement1 = 7
            digitelement2 = 7
            return
          case 8: 
            digitelement1 = 8
            digitelement2 = 8
            return
          case 9: 
            digitelement1 = 9
            digitelement2 = 9
            return
          case 10: 
            digitelement1 = 10
            digitelement2 = 10
            return
          case "J": 
            digitelement1 = "J"
            digitelement2 = "J"
            return
          case "Q": 
            digitelement1 = "Q"
            digitelement2 = "Q"
            return
          case "K": 
            digitelement1 = "K"
            digitelement2 = "K"
            return
        return
        }
      case "heart":
        console.log("heart");
        switch (randomnumber) {
          case 1:
            digitelement1 = 1
            digitelement2 = 1
            return
          case 2: 
            digitelement1 = 2
            digitelement2 = 2
            return
          case 3: 
            digitelement1 = 3
            digitelement2 = 3
            return
          case 4: 
            digitelement1 = 4
            digitelement2 = 4
            return
          case 5: 
            digitelement1 = 5
            digitelement2 = 5
            return
          case 6: 
            digitelement1 = 6
            digitelement2 = 6
            return
          case 7: 
            digitelement1 = 7
            digitelement2 = 7
            return
          case 8: 
            digitelement1 = 8
            digitelement2 = 8
            return
          case 9: 
            digitelement1 = 9
            digitelement2 = 9
            return
          case 10: 
            digitelement1 = 10
            digitelement2 = 10
            return
          case "J": 
            digitelement1 = "J"
            digitelement2 = "J"
            return
          case "Q": 
            digitelement1 = "Q"
            digitelement2 = "Q"
            return
          case "K": 
            digitelement1 = "K"
            digitelement2 = "K"
            return
        }
      case "diamond":
        console.log("diamond");
        switch (randomnumber) {
          case 1:
            digitelement1 = 1
            digitelement2 = 1
            return
          case 2: 
            digitelement1 = 2
            digitelement2 = 2
            return
          case 3: 
            digitelement1 = 3
            digitelement2 = 3
            return
          case 4: 
            digitelement1 = 4
            digitelement2 = 4
            return
          case 5: 
            digitelement1 = 5
            digitelement2 = 5
            return
          case 6: 
            digitelement1 = 6
            digitelement2 = 6
            return
          case 7: 
            digitelement1 = 7
            digitelement2 = 7
            return
          case 8: 
            digitelement1 = 8
            digitelement2 = 8
            return
          case 9: 
            digitelement1 = 9
            digitelement2 = 9
            return
          case 10: 
            digitelement1 = 10
            digitelement2 = 10
            return
          case "J": 
            digitelement1 = "J"
            digitelement2 = "J"
            return
          case "Q": 
            digitelement1 = "Q"
            digitelement2 = "Q"
            return
          case "K": 
            digitelement1 = "K"
            digitelement2 = "K"
            return
        }
      case "club":
        console.log("club");
        switch (randomnumber) {
          case 1:
            digitelement1 = 1
            digitelement2 = 1
            return
          case 2: 
            digitelement1 = 2
            digitelement2 = 2
            return
          case 3: 
            digitelement1 = 3
            digitelement2 = 3
            return
          case 4: 
            digitelement1 = 4
            digitelement2 = 4
            return
          case 5: 
            digitelement1 = 5
            digitelement2 = 5
            return
          case 6: 
            digitelement1 = 6
            digitelement2 = 6
            return
          case 7: 
            digitelement1 = 7
            digitelement2 = 7
            return
          case 8: 
            digitelement1 = 8
            digitelement2 = 8
            return
          case 9: 
            digitelement1 = 9
            digitelement2 = 9
            return
          case 10: 
            digitelement1 = 10
            digitelement2 = 10
            return
          case "J": 
            digitelement1 = "J"
            digitelement2 = "J"
            return
          case "Q": 
            digitelement1 = "Q"
            digitelement2 = "Q"
            return
          case "K": 
            digitelement1 = "K"
            digitelement2 = "K"
            return
        }
    }

    // split "face" from the class name and add the randomly generated face text
    const newfaceclass = faceclass.split(" ")[0].concat(" " + randomface.toLowerCase())
    const newdigitclass1 = numberclass1.split(" ")[0].concat(" " + randomface.toLowerCase())
    const newdigitclass2 = numberclass2.split(" ")[0].concat(" " + randomface.toLowerCase())
    
    // Set the new face class to original for css changes
    document.getElementsByClassName('face')[0].className = newfaceclass
    document.getElementsByClassName('digit')[0].className = newdigitclass1
    document.getElementsByClassName('digit')[1].className = newdigitclass2

    // Replace the acquired text content with random text from above
    document.getElementsByClassName('digit')[0].textContent = randomnumber
    document.getElementsByClassName('digit')[1].textContent = randomnumber
  }
  return (
    <div className='cards'>
      {/* <button onClick={() => {changeCard(2, "spade")}}>Change Card</button> */}
      <button onClick={() => {displayRandomCard()}}>Random Card</button>
      <div className='card'>
          <div className='digit'>1</div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='face'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='blank'></div>
          <div className='digit'>1</div>
      </div>

    </div>
  )
}

export default App;