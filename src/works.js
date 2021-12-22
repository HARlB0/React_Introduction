import './works.scoped.css';
import React, { useState, useEffect } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slick.css";
import balook from './static/images/balook.png'
import conady from './static/images/코나디.png';
import tooni from './static/images/tooni.png';
import sollama from './static/images/sollama.png';
import logo from './static/images/logo.png';
import todo from './static/images/todo.png';

function Works() {
    const [workList, setWorkList] = useState([
        { title: 'Todolist', backgroundcolor: '#E5C6FA', color: '#891796', url: todo, width: 350 },
        { title: 'Conady admin', backgroundcolor: '#fff', color: '#891796', url: conady, width: 350 },
        { title: 'Conady mobile', backgroundcolor: '#fff', color: '#891796', url: conady, width: 350 },
        { title: 'Sollamas', backgroundcolor: '#250B28', color: 'white', url: sollama, width: 350 },
        { title: 'Tooni', backgroundcolor: '#292D4F', color: 'white', url: tooni, width: 100 },
        { title: 'Balook', backgroundcolor: '#4B4B4B', color: 'white', url: balook, width: 350 }
    ]);


    const renderSlides = () =>
        workList.map((item, index) => (
            <div key={index} className='hi'  >
                <div className='content front' style={{ borderStyle: 'solid', borderWidth: '4px', borderColor: 'black' }}>
                    <div className='top' style={{ backgroundColor: item.backgroundcolor, display: 'flex', flexDirection: 'column' }}>
                        <img style={{ backgroundColor: item.backgroundcolor, width: item.width }} src={item.url} />
                        {item.title == 'Conady admin' ?
                            <span style={{ color: '#891796', fontWeight: 'bold', fontFamily: 'Urbanist', fontSize: '30px' }}>admin</span>
                            :
                            <span />
                        }
                        {item.title == 'Conady mobile' ?
                            <span style={{ color: '#891796', fontWeight: 'bold', fontFamily: 'Urbanist', fontSize: '30px' }}>mobile</span>
                            :
                            <span />
                        }
                    </div>
                </div>
                <div className='content back' style={{ borderStyle: 'solid', borderWidth: '4px', borderColor: 'black' }}>
                    <div className='top1' style={{ backgroundColor: item.backgroundcolor }}>
                        <span style={{ color: item.color }}>{item.title}</span>
                    </div>
                    <div className='bottom1' style={{ backgroundColor: item.backgroundcolor }}>
                    </div>
                </div>
            </div>
        ));

    return (
        <div className="Works">
            <div className="main_container">
                <div className="sub_container">
                    <Slider slidesToShow={2}>
                        {renderSlides()}
                    </Slider>
                </div>
            </div>
        </div>


    )
}

export default Works;
