import React from 'react'
import { useState } from 'react'
import axios from 'axios'


function App() {

  //let Name ='zeeshan ali'
  const[name,Setname]=useState("zeeshan ali")
  const[celcisus,setCelcisusTemp]=useState(0)
  const[cityname,setCityname]=useState("lahore")
  const[weatherofcityname,setweatherofcityname]= useState("")

  


  const handelChange=(e)=>{
    setCityname(e.target.value)
    //console.log(e.target.value)


  }

  console.log(cityname)

  //let celcisus= 0
  function getweather(e) {
    e.preventDefault();
    axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityname}`).then ((res)=>
    {

      setweatherofcityname (`${res.data.location.name} ${ res.data.location.region}` )
      setCelcisusTemp(res.data.current.temp_c)

    }) .catch((error)=> {console.log(error)})

 

    
  }

  return (


    <div className='YO YO'>
      <div><h1>Practice Used vairable and api feching</h1></div>
       Current weather of {weatherofcityname} is {celcisus} celcisus
       <br/>
       <form onSubmit={getweather}>
      
        <input type='text' placeholder='enter your cityname' onChange={handelChange} required></input>
        <br/>






       <button type='submit'>get weather</button>
       </form>
      

      
   
    </div>

  )
}


export default App;

