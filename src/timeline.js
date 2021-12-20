import './timeline.scoped.css';
import React, { useState, useEffect } from 'react';
import run from './static/images/run.png';

function Timeline() {
    let num = 0;
    const [value, setValue] = useState(0);
    const percent = () => {
        let timer = setInterval(function () {
            setValue(e => e + 1);
            console.log(num)
            num++
            if (num == 100) {
                clearInterval(timer)
            }
        }, 300)
    }


    // const progressbar = () => {
    //     if (value <= 20) {
    //         return (

    //         )

    //     } else if (value <= 40) {
    //         return (

    //         )
    //     } else if (value <= 60) {
    //         return (

    //         )
    //     } else if (value <= 80) {
    //         return (

    //         )
    //     } else {
    //         return (

    //         )
    //     }
    // }

    // 위에 뜨는 문구
    const progressment = () => {
        if (value <= 20) {
            return (
                <div>
                    <h2>건국대학교 글로컬캠퍼스 졸업</h2>
                    <ul>
                        <li>2020년 2월</li>
                        <li> 건국대학교 글로컬캠퍼스 컴퓨터공학과 16학번 졸업</li>
                    </ul>
                </div>
            )

        } else if (value <= 40) {
            return (
                <div>
                    <h2>청년 TLO 육성사업</h2>
                    <ul>
                        <li>2020년 3월 ~ 2020년 8월</li>
                        <li>건국대학교 글로컬 산학협력단 소속 계약직 연구원</li>
                    </ul>
                </div>
            )
        } else if (value <= 60) {
            return (
                <div>
                    <h2>자격증</h2>
                    <ul>
                        <li>2020년 9월 ~ 2021년 3월</li>
                        <li>자격증 준비</li>
                        <li>정보처리기사 필기</li>
                        <li>컴퓨터활용능력 필기</li>
                        <li>ITQ OA Master</li>
                    </ul>
                </div>
            )
        } else if (value <= 80) {
            return (
                <div>
                    <h2>대전대학교 HRD 사업단</h2>
                    <ul>
                        <li>2021년 4월 ~ 2021년 7월</li>
                        <li>빅데이터 분석 플랫폼 구축 및 개발자 양성과정</li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>주식회사 팀마파</h2>
                    <ul>
                        <li>2021년 7월 ~ 2021년 11월</li>
                        <li></li>
                    </ul>
                </div>
            )
        }
    }
    return (
        <div className="timeline">
            <div className="main_container">
                <div className="sub_container">
                    {/* {progressbar()} */}
                    <div className='TLBox'>
                        <span>{progressment()}</span>
                        <div className='history'>
                            <div className='progressbar'>
                                <div style={{ width: 9 * value, transition: '1s', overflow: 'hidden' }}>
                                    <div style={{ height: '1px', width: '0px', backgroundColor: '00D8FF' }} className='progressbar_1' color="warning" className="mb-3" >
                                    </div>
                                </div>
                                <div>
                                    <img src={run} />
                                </div>
                            </div>
                            <div className='progressbar1'>
                                <div style={{ position: 'relative', height: '5px', width: 9 * value, transition: '1s', backgroundColor: '#00D8FF', borderRadius: '50px' }} className='progressbar_1' color="warning" className="mb-3" >
                                    <div style={{ position: 'absolute', height: '5px', width: '0px', backgroundColor: '#00D8FF' }} className='progressbar_1' color="warning" value={value} className="mb-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='buttons'>
                            <button onClick={() => { percent(); console.log('hi') }}>Play</button>
                            <button onClick={() => { setValue(0) }}>Replay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;
