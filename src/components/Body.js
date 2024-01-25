import React from 'react'
import SideBar from './SideBar'
import MainComponent from './MainComponent'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {
  const showSideBar = useSelector((store) => store.config?.isSideBarVisible)
  return (
    <div className=' flex'>
        {showSideBar && <SideBar/> }
        <Outlet/>
    </div>
  )
}

export default Body