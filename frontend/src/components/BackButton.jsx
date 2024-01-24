import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const BackButton = ({ destination = "/"}) => {
  return (
    <div className='flex'>
      <Link 
      className='text-white px-4 py-1 bg-sky-800 rounded-lg w-fit' 
      to={destination}
      >
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  )
}

export default BackButton