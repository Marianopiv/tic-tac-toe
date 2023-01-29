import React from 'react'

const XO = ({text,letter}) => {
  return (
    <div className={`${text} font-extrabold text-6xl`}>{letter}</div>
  )
}

export default XO