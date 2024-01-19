import React from 'react'
import "./Botonreini.css"

function Botonreini({reiniciar}) {
  return (
    <div className='rein'>
        <button className="butrein" onClick={reiniciar}>Reset</button>
    </div>
  )
}

export default Botonreini