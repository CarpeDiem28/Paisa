import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {

  return (
    <nav className='bg bg-black-100-500 flex'>
      <ul className='flex w-full justify-between my-3 mx-3'>
        <Link to='/index'>
        <li> logo</li>
        </Link>
        <div className='flex justify-between space-x-40'>
          <Link to='/home'> 
          <li className='hover:bg-gray-50 bg-transparent-200  rounded-xl  m-2 px-10 py-3 shadow color-gray-400'> Home </li>
          </Link>
          <Link to='/farmers'> 
          <li className='hover:bg-gray-50 bg-transparent-200  rounded-xl  m-2 px-10 py-3 shadow color-gray-400'> Farmers </li>
          </Link>
          <Link to='/about'>
          <li className='hover:bg-gray-50 bg-transparent-200  rounded-xl  m-2 px-10 py-3 shadow color-gray-400'> About </li>
          </Link>
          <Link to= '/contact'>
          <li className='hover:bg-gray-50 bg-transparent-200  rounded-xl  m-2 px-10 py-3 shadow color-gray-400'> Contact </li>
          </Link>        
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
