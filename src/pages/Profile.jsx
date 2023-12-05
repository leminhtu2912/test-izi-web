import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import "./profile.css"
import axios from 'axios'
import { format } from 'date-fns';
import Award from '../components/award/Award'
import People from "../assets/people.png"
import Ribbon from "../assets/ribbon.png"
import Star from "../assets/star.png"
import Heart from "../assets/heart.png"
import Flag from "../assets/flag.png"
import Chart from "../assets/chart.png"
import Award1 from '../components/award1/Award1'

export default function Profile() {
    const [user, setUser] = useState()
    const [award, setAward] = useState()

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get("https://p31giaibaitaptest.izisoft.io/v1/users/654d872672ac8416b62abadc");
            setUser(res.data);
        };
        fetchUser();
    }, []);

    useEffect(() => {
        const fetchAward = async () => {
            const res = await axios.get("https://p31giaibaitaptest.izisoft.io/v1/medals?language=vi");
            const firstSevenItems = res.data.slice(0, 7);
            setAward(firstSevenItems);
        };
        fetchAward();
    }, []);


    return (
        <div>
            <Header />
            <div className='main-profile'>
                <div className='d-flexx'>
                    <div className="profile-top">
                        <img src={user?.avatar} alt="" />
                        <div className='info-profile'>
                            <div className='d-flex'>
                                <span className='name'>{user?.fullName}</span>
                                <span className='date'>Thành viên từ: {user ? format(new Date(user?.createdAt), 'dd/MM/yyyy') : ""}</span>
                            </div>
                            <div>Thông tin giới thiệu bản thân</div>
                            <div className='award-profile'>
                                <Award title="500.999.11" sub="Điểm số" img={Flag} />
                                <Award title="500" sub="Cảm ơn" img={Heart} />
                                <Award title="500" sub="Hay nhất" img={Ribbon} />
                                <Award title="500" sub="5 Sao" img={Star} />
                                <Award title="500" sub="Đã giúp" img={People} />
                            </div>
                        </div>
                    </div>
                    <div className='tagg'>
                        <div className='tag-active tag'>Tổng quan</div>
                        <div className='tag'>Câu hỏi</div>
                        <div className='tag'>Câu trả lời</div>
                    </div>
                </div>
                <div className="profile-bottom">
                    <div>
                        <h5>Danh hiệu của bạn</h5>
                        {console.log(award)}
                        <div className='list-award'>
                            {award?.map((item) => (
                                <Award1 img={item?.image} title={item?.title} />
                            ))}

                        </div>
                    </div>
                    <div className="line-profile"></div>
                    <div>
                        <h5>Các môn đã giúp đỡ bạn bè</h5>
                        <div className='chart'>
                            <img src={Chart} alt="" />
                            <div className='chart-right'>
                                <div>
                                    <div className='title-subject'>
                                        Khoa học tự nhiên (KHTN)
                                    </div>
                                    <div className='subject'>
                                        <span>Toán học(10)</span>
                                        <span>Vật lí(20)</span>
                                        <span>Toán học(10)</span>
                                    </div>
                                </div>
                                <div>
                                    <div className='title-subject'>
                                        Khoa học xã hội (KHXH)
                                    </div>
                                    <div className='subject'>
                                        <span>Tiếng việt(10)</span>
                                        <span>Địa lí(20)</span>
                                        <span>Lịch sử(10)</span>
                                    </div>
                                </div>
                                <div>
                                    <div className='title-subject'>
                                        Ngoại ngữ
                                    </div>
                                    <div className='subject'>
                                        <span>Tiếng anh(100)</span>
                                    </div>
                                </div>
                                <div>
                                    <div className='title-subject'>
                                        Khoa học công nghệ (KHCN)
                                    </div>
                                    <div className='subject'>
                                        <span>Tin học(100)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-profile"></div>
                    <div>
                        <h5>Thông tin về hoạt động</h5>
                        <div className='question'>
                            <i>Câu hỏi đã đặt : 12</i>
                            <i>Câu đã trả lời : 23</i>
                            <i>Câu trả lời hay nhất : 2</i>
                            <i>Câu hỏi bị cảnh báo : 09</i>
                            <i>Số báo cáo đúng/sai : 32</i>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
    )
}
