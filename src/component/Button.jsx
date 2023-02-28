import React from 'react'
import './Button.css'


const Button = () => {


  return (
    <div id="button-container">
        <button className="button">Add random</button>

        <button className="button">sort by name</button>
        <button className="button">sort by pop</button>

        <button className="button">remove contact</button>
    </div>
  )
}

export default Button