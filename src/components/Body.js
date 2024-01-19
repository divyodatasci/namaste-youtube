import React from 'react'
import SideBar from './SideBar'
import MainComponent from './MainComponent'
import { useSelector } from 'react-redux'

const Body = () => {
  const showSideBar = useSelector((store) => store.config?.isSideBarVisible)
  return (
    <div className=' flex'>
        {showSideBar && <SideBar/> }
        <MainComponent/>
    </div>
  )
}

export default Body