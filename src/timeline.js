import './timeline.scoped.css';
import React, { useState, useEffect } from 'react';
import run from './static/images/run.png';
import re from './static/images/re.png';
import stop from './static/images/stop.png';
import play from './static/images/play.png';

let num = 0;
let isStarted = false;
let isPaused = false;

function Timeline() {

    //시간에 따른 하단바 길이 설정하는 함수
    let timer;
    let increaseValue = function () {
        if(isPaused) {
            clearTimeout(timer)
        } else {
            if (num >= 100) {
                isStarted = false;
                clearTimeout(timer)
            } else {
                setValue(e => e + 1);
                num++
                timer = setTimeout(increaseValue, 300)
            }
        }
    }
    const [value, setValue] = useState(0);
    const percent = () => {
            
            if(!isStarted || isPaused) 
                if(isPaused) isPaused = false;
                isStarted = true;
                timer = setTimeout(increaseValue, 300)
         
    }

    //하단 바 멈추는 함수
    const pausePercent = () => {
        isPaused = true
        timer = null
    }


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

    //윈도우 사이즈에 따른 변수설정
    const bar_value = () => {
        if (windowSize.width > 1200) {
            return 8
        } else if (windowSize.width > 1024) {
            return 7
        } else if (windowSize.width > 768) {
            return 5
        } else if (windowSize.width > 480) {
            return 3.5
        } else {
            return 2
        }
    }

    // 위에 뜨는 문구
    const progressment = () => {
        if (value <= 20) {
            return (
                <div>
                    <h2>건국대학교 글로컬캠퍼스 졸업</h2>
                    <ul>
                        <li id='year'>2020년 2월</li>
                        <li>건국대학교 글로컬캠퍼스 컴퓨터공학과를 16학번으로 졸업하였습니다. </li>
                        <li>2016년 제약공학과에 입학하였습니다. 진통 해열제의 성분인 아세트아미노펜으로 정제를 제작하고 투약 후,
                            시간대별로 약이 용매에 녹아 나오는 양을 측정하는 용출 시험 중이었습니다.</li>
                        <li>보고서를 쓰던 중 시험을 같이하던 선배가 시간과 용출량의 데이터를 R 언어를 통해 결과를 쉽고 빠
                            르게 도출해 내는 것을 보았습니다.</li>
                        <li>이를 계기로 프로그래밍에 호기심이 생겼고 개발자가 되기 위하여 18년도에 컴퓨터공학과로 편입하였습니다. </li>
                    </ul>
                </div>
            )

        } else if (value <= 40) {
            return (
                <div>
                    <h2>청년 TLO 육성사업</h2>
                    <ul>
                        <li id='year'>2020년 3월 ~ 2020년 8월</li>
                        <li>건국대학교 글로컬캠퍼스를 졸업 후 담당 교수님 제안으로 청년 TLO 육성사업에 참여하였습니다. TLO 육성사업을 통해 건국대학교 글로컬 산학협력단 소속 계약직 연구원을 하였습니다.</li>
                        <li>연구원 신분으로 교수님의 곁에서 6개월간 교수님의 업무를 보조하였습니다.</li>
                    </ul>
                </div>
            )
        } else if (value <= 60) {
            return (
                <div>
                    <h2>자격증</h2>
                    <ul>
                        <li id='year'>2020년 9월 ~ 2021년 3월</li>
                        <li>TLO 육성사업이 끝난 후 전공을 살려 취업을 하기 위한 자격증 준비를 하였습니다. 4년제 대학교를 졸업하면 딸 수 있는 정보처리기사를 준비하여 필기 부문에서 합격하였습니다. 그 외에도 컴퓨터 활용능력 1급 필기와 ITQ OA Master 등 자격증을 따며 취업 준비에 힘썼습니다.</li>
                        
                    </ul>
                </div>
            )
        } else if (value <= 80) {
            return (
                <div>
                    <h2>대전대학교 HRD 사업단</h2>
                    <ul>
                        <li id='year'>2021년 4월 ~ 2021년 7월</li>
                        <li>취업에 앞서 스스로 개발자로서의 이해와 능력이 부족하다고 판단하였습니다. 대전대학교에서 국비지원 사업으로 '빅데이터 분석 플랫폼 구축 및 개발자 양성과정'을 진행한다는 공고를 본 후 면접을 보고 합격하였습니다. 약 4개월간 java나 jsp, html 등 여러 가지 언어와 툴을 사용하여 프로젝트를 진행하였습니다. 프로젝트를 진행하면서 프론트엔드 쪽에 관심이 생겼습니다. </li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>주식회사 팀마파</h2>
                    <ul>
                        <li id='year'>2021년 7월 ~ 2021년 11월</li>
                        <li>개발자로서의 첫 회사로 React와 React-native 등 프론트엔드 개발자의 역량을 다졌습니다. 실무를 통한 다양한 프로젝트를 수행하였습니다. React를 사용하여 웹페이지를 만들고 React-native를 사용하여 애플리케이션도 제작하였습니다. 프로젝트에 필요한 DB 테이블 구조를 짜기도 하고 axios를 사용해 서버와 통신하거나 모듈을 사용하는 등 기술을 익혔습니다.</li>
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
                                <div style={{ width: bar_value() * value, transition: '1s', overflow: 'hidden' }}>
                                    <div style={{ height: '1px', width: '0px', backgroundColor: '#22262A' }} className='progressbar_1' color="warning" className="mb-3" >
                                    </div>
                                </div>
                                <div>
                                    <img src={run} />
                                </div>
                            </div>
                            <div className='progressbar1'>
                                <div style={{ position: 'relative', height: '5px', width: bar_value() * value, transition: '1s', backgroundColor: '#fff459', borderRadius: '50px' }} className='progressbar_1' color="warning" className="mb-3" >
                                    <div style={{ position: 'absolute', height: '5px', width: '0px', backgroundColor: '#22262A' }} className='progressbar_1' color="warning" value={value} className="mb-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='buttons'>
                            <div onClick={() => { percent();}}><img src={play}/></div>
                            <div onClick={() => { pausePercent(); }}><img src={stop}/></div>
                            <div onClick={() => { setValue(0); num = 0; isPaused = true; isStarted = false; }}><img src={re}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;