import React from 'react'
import Logo from "../../assets/Logo.png"
import Gift from "../../assets/gift.png"
import Chat from "../../assets/chat.png"
import Noti from "../../assets/noti.png"
import Ava from "../../assets/ava.png"
import Arr from "../../assets/arr.png"
import "./header.css"

export default function Header() {
  return (
      <div className='header'>
          <div className="header-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="header-search">
              <input type="text" placeholder='Nhập vào câu hỏi của bạn ?' />
              <button className='btn'>Tìm kiếm</button>
          </div>
          <div className="header-icon">
              <img src={Gift} alt="" />
              <img src={Chat} alt="" />
              <img src={Noti} alt="" />
          </div>
          <div className="header-right">
              <div className="avatar-small">
                  <img src={Ava} alt="" />
              </div>
              <div className="username">
                  Thùy Trâm
              </div>
              <img src={Arr} alt="" />
          </div>
    </div>
  )
}
