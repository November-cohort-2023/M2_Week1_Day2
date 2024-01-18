import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/Weather'

function App(){
  return(
    <div id='weather-container'>
      <Weather city="London" weatherNumber={15}></Weather>
      <Weather city="Paris" weatherNumber={7}></Weather>
      <Weather city="Berlin" weatherNumber={20}></Weather>
    </div>
  )
}

export default App
