import React from 'react'

const Button = ({label, url}) => {
  return (
   <div className='m-2 py-2 px-3 border rounded-lg bg-gray-200 hover:bg-gray-950 hover:text-white'>
        <a href = {url}>
            {label}
        </a>
   </div>
  )
}

export default Button