import { useState } from 'react'
import Nav from '../nav'
import Header from '../main-components/header'
import TheOfferings from "../main-components/TheOfferings"
import Methodology from "../main-components/Methodology"
import "./Landing.css"


function Landing() {
  const [count, setCount] = useState(0)

  return (
    <div className='Landing'>

      <Nav/>
      <Header/>
      <TheOfferings/>
      <Methodology/>
      <div className='light-box'>   
      </div>
    </div>
  )
}

export default Landing
