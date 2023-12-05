import React from 'react'
import "./footer.css"
import Be from "../../assets/be.png"
import In from "../../assets/in.png"
import Fb from "../../assets/fb.png"
import Gg from "../../assets/gg.png"
import App from "../../assets/app.png"
import Logof from "../../assets/Logof.png"
import F from "../../assets/Ff.png"
import W from "../../assets/w.png"
import L from "../../assets/l.png"

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className="line1">
                    <img src={Logof} alt="" />
                    <span>
                        Cơ quan chủ quản : Công ty cổ phần công nghệ IZi Softwave
                    </span>
                    <div className='socail-footer'>
                        <img src={Be} alt="" />
                        <img src={In} alt="" />
                        <img src={Fb} alt="" />
                    </div>
                    <span>Tải ứng dụng</span>
                    <div className='download'>
                        <img src={Gg} alt="" />
                        <img src={App} alt="" />
                    </div>
                </div>
                <div className="line2">
                    <ul>
                        <li>
                            Hướng dẫn sử dụng
                        </li>
                        <li>
                            Điều khoản và chính sách
                        </li>
                        <li>
                            Nội dung Giaibaitap247
                        </li>
                        <li>
                            Góp ý
                        </li>
                    </ul>
                </div>
                <div className="line3">
                    <ul>
                        <li>
                            Thông báo
                        </li>
                        <li>
                            Bảng xếp hạng
                        </li>
                        <li>
                            Chính sách thưởng
                        </li>
                        <li className='cus-li'>
                            <img src={W} alt="" />
                            <span>https://izisoft.io/</span>
                        </li>
                        <li className='cus-li'>
                            <img src={F} alt="" />
                            <span>https://www.facebook.com/izisoft.io</span>
                        </li>
                        <li className='cus-li'>
                            <div>
                                <img src={W} alt="" />
                            </div>
                            <ul>
                                <li>
                                    Trụ sở chính : 103 Hoài Thanh, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng
                                </li>
                                <li>
                                    Chi Nhánh Lào Cai : 170 Ỷ Lan, Phường Nam Cường, TP Lào Cai
                                </li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
            <div className='line-footer'></div>
            <div className="footer-bottom">
                Copy right @ 2020 All rights Reverved. Null
            </div>
        </div>
    )
}
