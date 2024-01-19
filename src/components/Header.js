import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import { useDispatch } from 'react-redux'
import { toggleSideBar } from '../utils/configSlice'

const Header = () => {
  const dispatch = useDispatch();
  const clickOnBurgerHandler = () => {
    dispatch(toggleSideBar());
  }
  return (
    <div className='text-3xl flex my-4 shadow-md w-full grid grid-flow-col h-12'>
      <div className='flex col-span-1'>
        <FontAwesomeIcon icon={faBars} className=' my-1 mx-4' onClick = {clickOnBurgerHandler}/>
        <div className=' mx-4'> <FontAwesomeIcon icon={faYoutube} className=' text-red-700'/> Youtube</div>
      </div>
      <div className=" col-span-12 px-5 h-8">
          <input
            className="px-5 w-9/12 border border-gray-400 rounded-l-full"
            type="text"
          />
          <button className="border border-gray-400 px-5  rounded-r-full  bg-gray-100">
            🔍
          </button>
      </div>
      <div className=" col-span-1 flex flex-row-reverse">
        <img
          className="h-8 mr-5"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  )
}

export default Header