import './works.scoped.css';
import React, { useState, useEffect } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slick.css";
import { Link } from 'react-router-dom'

import balook from './static/images/balook.png'
import conady1 from './static/images/conadyweb.png';
import conady from './static/images/conadyapp.png';
import tooni from './static/images/tooni.png';
import sollama from './static/images/lama.png';
import todo from './static/images/todolist.png';

import html5 from './static/images/html5.png';
import css3 from './static/images/css3.png';
import reactweb from './static/images/react.png';
import javascript from './static/images/javascript.png';

function Works() {
    //슬라이드에 들어갈 내용
    const [workList, setWorkList] = useState([
        {
            title: 'Todolist',
            url: todo,
            width: 350,
            use: 'Html5, Css3, React',
            img1: html5,
            img2: css3,
            img3: reactweb,
            period: '2021.12'
        },
        {
            title: 'Conady Web',
            url: conady1,
            width: 350,
            use: 'Html5, Css3, React',
            img1: html5,
            img2: css3,
            img3: reactweb,
            period: '2021.07 ~ 2021.11'
        },
        {
            title: 'Conady App',
            url: conady,
            width: 350,
            use: 'React-native',
            img1: reactweb,
            period: '2021.07 ~ 2021.11'
        },
        {
            title: 'Sollamas',
            url: sollama,
            width: 350,
            use: 'Html5, Css3, React',
            img1: html5,
            img2: css3,
            img3: reactweb,
            period: '2021.10'
        },
        {
            title: 'Tooni',
            url: tooni,
            width: 100,
            use: 'Html5, Css3, React',
            img1: html5,
            img2: css3,
            img3: reactweb,
            period: '2021.09 ~ 2021.10'
        },
        {
            title: 'Balook',
            url: balook,
            width: 350,
            use: 'Html5, Css3, Javascript',
            img1: html5,
            img2: css3,
            img3: javascript,
            period: '2021.06 ~ 2021.07'
        }
    ]);

    // 슬라이드 틀
    const renderSlides = () =>
        workList.map((item, index) => (
            <div key={index} className='hi'>
                <div className='content front'>
                    <div className='top'>
                        {item.title == 'Conady App' ?
                            <img style={{ marginLeft: '50px' }} src={item.url} />
                            :
                            <img src={item.url} />
                        }
                        <span>{item.title}</span>
                    </div>
                </div>
                <div className='content back'>
                    <div className='top1'>
                        <h3>{item.title}</h3>
                        <ul>
                            <li>Period  :  {item.period}</li>
                            <li>Language  :  {item.use}</li>
                        </ul>
                        <ul id='logo'>
                            {item.title == 'Conady App' ?
                                <>
                                    <li>
                                        <img src={item.img1} />
                                    </li>
                                    <span style={{ fontFamily: 'Urbanist', fontWeight: 'bold', fontSize: '15px', color: '#61DAFB' }}>React-native</span>
                                </>
                                :
                                <li>
                                    <img src={item.img1} />
                                    <img src={item.img2} />
                                    <img src={item.img3} />
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        ));

    //화면 사이즈 감지하는 함수
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth
    })

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth
        })
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            console.log(windowSize)
        }
    }, [windowSize])

    //윈도우 사이즈에 따른 캐러샐 개수
    const bar_value = () => {
        if (windowSize.width > 1024) {
            return (
                <Slider slidesToShow={2}>
                    {renderSlides()}
                </Slider>
            )
        } else {
            return (
                <Slider slidesToShow={1}>
                    {renderSlides()}
                </Slider>
            )
        }
    }
    return (
        <div className="Works">
            <div className="main_container">
                <div className="sub_container">
                    {bar_value()}
                </div>
            </div>
        </div>


    )
}

export default Works;
