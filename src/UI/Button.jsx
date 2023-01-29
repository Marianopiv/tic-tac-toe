import React from 'react'

const Button = ({action,text}) => {
  return (
    <button className='border-black-1050 border-2 rounded-md bg-gradient-to-r from-green-950 to-orange-950 hover:from-orange-950 hover:to-green-950 uppercase font-bold text-white' onClick={action}>{text}</button>
  )
}

export default Button