import React from 'react'
import { FaBars } from 'react-icons/fa'
import Logo from './Logo'
import NewExpense from '../pages/expense/NewExpenses'
import { Link } from 'react-router-dom'



const navbar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg ">
  <div  className="container">
    <Logo/>
  
  <div className="collapse navbar-collapse" id="#navbarNav">
    <div className="navbar-nav">

      <a className="nav-link active" href="#">Home </a>
      <a className="nav-link" href="#">Features</a>
      <a className="nav-link" href="#">Pricing</a>
      <a className="nav-link" href="#">Disabled</a>
       <a className="nav-link" href="/new">new expenses</a>
      
      
    </div>
  </div>

  <div className="d-flex">
    <button className='btn btn=sm btn-outline-light'> Login</button>
    <button className='btn btn=sm btn-outline-light mx-1'> Logout</button>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <FaBars color="white" />
  </button>
  </div>
</div>
</nav>
    </div>
  )
}

export default navbar
