import React, { useState } from 'react'
import"./Header.css"
function Header(props) {
  const [state,setstet]=useState("https://www.pngall.com/wp-content/uploads/5/Shopping-Cart-PNG-Free-Download.png")
  return (
    <div>
      <header className='header'>
         <span>exam</span>
        <img onClick={props.onClik} className='img' src={props.korzine} alt="" />
        
      </header>
    </div>
  )
}

export default Header
