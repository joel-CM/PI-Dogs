import React from 'react'
import { Link } from "react-router-dom"

const Inicio = () => {
    return (
        <div>
           <h1>inicio</h1>
           <button>
               <Link to="/home">
                   GET START
               </Link>
           </button>
        </div>
    )
}

export default Inicio
