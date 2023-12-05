import React from 'react'
import "./award.css"

export default function Award({img, title, sub}) {
  return (
      <div className='award'>
          <div>
          <img src={img} alt="" />  
              <b>{title}</b>
          </div>
              <span className='sub'>{sub}</span>
    </div>
  )
}
