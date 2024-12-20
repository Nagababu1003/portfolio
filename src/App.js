import React, { useState } from 'react'
import './App.css'

function App() {
  const ques = [
    {
      questiontext:"What is Capital of India?",
      options:[
        "New Delhi",
        "Hyderabad",
        "Bangalore",
        "Mumbai"
      ]
    },
    { 
      questiontext:"Who is the PM of India?",
      options:[
        "KCR",
        "Narendra Modi",
        "Revanth Redddy",
        "Rahul Gandhi"
      ]
    },
    {
      questiontext:"Who is the President of India?",
      options:[
        "Droupadi Murmu",
        "Narendra Modi",
        "Revanth Redddy",
        "Rahul Gandhi"
      ]
    },
    {
      questiontext:"What is the Capital of Andhra Pradesh?",
      options:[
        "Kurnool",
        "Vishakapatnam",
        "Amaravati",
        "Rajamundry"
      ]
    }
  ]

  const [count,setCount]=useState(0)

  function Change(){
    setCount(count+1)
  }

  return (
    <div className='container'>
      <div className='card'>
            <h2>Question No: {count+1} / 4</h2>
            <h3>{ques[count].questiontext}</h3>
            {ques[count].options.map(x=><li>{x}</li>)}

            <button onClick={Change}>Change</button>
      </div>
    </div>
  )
}

export default App
