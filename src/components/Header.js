import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'

const Header = () => {
  return (
    <div className='text-3xl flex my-4 shadow-md w-full'>
       <FontAwesomeIcon icon={faBars} className=' my-1 mx-4'/>
       <div className=' mx-4'> <FontAwesomeIcon icon={faYoutube} className=' text-red-700'/> Youtube</div>
       
    </div>
  )
}

export default Header