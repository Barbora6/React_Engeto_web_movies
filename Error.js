import { Link } from 'react-router-dom'
import React from 'react'

const  Error = () => {
  return <section>
    <h2>404</h2>
    <p>Stránka nenalezena</p>
    <p><Link to='/'>Zpět na úvodní stranu</Link></p>
  </section>
}

export default  Error