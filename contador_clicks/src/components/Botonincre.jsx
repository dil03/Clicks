import React from 'react'
import "./Botonincre.css"

function Botonincre({incremButton}) {
return(
    <div className='incre'>
        <button className="butincre" onClick={incremButton}>Incrementar</button>
    </div>
    )
}
export default Botonincre