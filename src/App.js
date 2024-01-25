import React, { Children } from 'react'
import {Provider} from 'react-redux'
import Header from './components/Header'
import Body from './components/Body'
import appStore from './utils/appStore'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainComponent from './components/MainComponent'
import Watch from './components/Watch'

const App = () => {
  const appRouter = createBrowserRouter([{
    path:"/",
    element: <Body/>,
    children: [
     {
      path: "/",
      element: <MainComponent/>
     },
     {
      path: "/watch",
      element: <Watch/>
     }
    ]

  }
])
  return (
    <Provider store = {appStore}>
      <Header/>
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App