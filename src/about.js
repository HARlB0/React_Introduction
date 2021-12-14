import './about.scoped.css';
import React, { useState, useEffect } from 'react';
import reactImg from '../src/static/images/react.png'

function About() {


    return (
        <div className="about">
            <div className="main_container">
                <div className="sub_container">
                    <div className="ment">
                        <h2>About me</h2>
                        <ul>
                            <li>안녕하세요. 프론트엔드 개발자로 취업을 희망하는 26살 하승희입니다. 
                                건국대학교 글로컬캠퍼스 컴퓨터공학과를 졸업하였습니다.
                                 제가 다룰 수 있는 기술은 html5, css3, react, react-native입니다. 
                                 제가 보유하고 있는 자격증은 운전면허 2종 보통, 리눅스 마스터2급, 
                                 ITQ OA Master, 컴퓨터활용능력 1급(필기), 정보처리기사(필기)입니다.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
