import React from 'react'
import "./award1.css"

export default function Award1({img, title}) {
  return (
      <div className='award1'>
          <img src={img} alt="" />
          <div>{title}</div>
    </div>
  )
}
