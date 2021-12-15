import './about.scoped.css';
import React, { useState, useEffect } from 'react';
import github from '../src/static/images/github.png'
import email from '../src/static/images/email.png'
import kakao from '../src/static/images/kakao.png'
import github1 from '../src/static/images/github1.png'
import email1 from '../src/static/images/email1.png'
import kakao1 from '../src/static/images/kakao1.png'

function About() {


    return (
        <div className="about">
            <div className="main_container">
                <div className="sub_container">
                    <div className="photo">
                        <div className="git">
                            <img className='item front' src={github1} />
                            <a href='https://github.com/HARlB0'>
                                <img className='item back' src={github} />
                            </a>
                        </div>
                        <div className="email">
                            <img className='item front' src={email1} />
                            <a href='mailto:hama5030@gmail.com'>
                                <img className='item back' src={email} />
                            </a>
                        </div>
                        <div className="kakao">
                            <img className='item front' src={kakao1} />
                            <a href='https://open.kakao.com/o/s3APbaPd'>
                                <img className='item back' src={kakao} />
                            </a>
                        </div>
                    </div>
                    <div className="ment">
                        <h2>About me</h2>
                        <ul>
                            <li>
                                안녕하세요. 프론트엔드 개발자로 취업을 희망하는 26살 하승희입니다.
                                건국대학교 글로컬캠퍼스 컴퓨터공학과를 졸업하였습니다.
                                <br/><br/>
                                HTML5, CSS3, React, React-native를 다룰 수 있습니다.
                                <br/><br/>
                                보유 자격증은 운전면허 2종 보통, 리눅스 마스터2급,
                                ITQ OA Master, 컴퓨터활용능력 1급(필기), 정보처리기사(필기)입니다.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
