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


    const progressbar = () => {
        if (value <= 20) {
            return (
                <div className='history'>
                    <div className='progressbar' style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ height: '1px', width: 9 * value-4,backgroundColor: '00D8FF' }} className='progressbar_1' color="warning" className="mb-3" >
                        </div>
                        <div>
                            <img src={run} style={{ width: '30px', height: '30px' }} />
                        </div>
                    </div>
                    <div className='progressbar'>
                        <div style={{ position: 'relative', height: '5px', width: '900px', backgroundColor: '#22262A' }} className='progressbar_1' color="warning" className="mb-3" >
                            <div style={{ position: 'absolute', height: '5px', width: 9 * value, backgroundColor: '#00D8FF' }} className='progressbar_1' color="warning" value={value} className="mb-3" />
                        </div>
                    </div>
                </div>
            )

        } else if (value <= 40) {
            return (
                <div className='history'>
                    <div className='progressbar' style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ height: '1px', width: 9 * value - 4, backgroundColor: '00D8FF' }} className='progressbar_1' color="warning" className="mb-3" >
                        </div>
                        <div>
                            <img src={run} style={{ width: '30px', height: '30px' }} />
                        </div>
                    </div>
                    <div className='progressbar'>
                        <div style={{ position: 'relative', height: '5px', width: '900px', backgroundColor: '#22262A' }} className='progressbar_1' color="warning" className="mb-3" >
                            <div style={{ position: 'absolute', height: '5px', width: 9 * value, backgroundColor: '#00D8FF' }} className='progressbar_1' color="warning" value={value} className="mb-3" />
                        </div>
                    </div>
                </div>
            )
        } else if (value <= 60) {
            return (
                <div className='history'>
                    <div className='progressbar' style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ height: '1px', width: 9 * value - 4, backgroundColor: '00D8FF' }} className='progressbar_1' color="warning" className="mb-3" >
                        </div>
                        <div>
                            <img src={run} style={{ width: '30px', height: '30px' }} />
                        </div>
                    </div>
                    <div className='progressbar'>
                        <div style={{ position: 'relative', height: '5px', width: '900px', backgroundColor: '#22262A' }} className='progressbar_1' color="warning" className="mb-3" >
                            <div style={{ position: 'absolute', height: '5px', width: 9 * value, backgroundColor: '#00D8FF' }} className='progressbar_1' color="warning" value={value} className="mb-3" />
                        </div>
                    </div>
                </div>
            )
        } else if (value <= 80) {
            return (
                <div className='history'>
                    <div className='progressbar' style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ height: '1px', width: 9 * value - 4, backgroundColor: '00D8FF' }} className='progressbar_1' color="warning" className="mb-3" >
                        </div>
                        <div>
                            <img src={run} style={{ width: '30px', height: '30px' }} />
                        </div>
                    </div>
                    <div className='progressbar'>
                        <div style={{ position: 'relative', height: '5px', width: '900px', backgroundColor: '#22262A' }} className='progressbar_1' color="warning" className="mb-3" >
                            <div style={{ position: 'absolute', height: '5px', width: 9 * value, backgroundColor: '#00D8FF' }} className='progressbar_1' color="warning" value={value} className="mb-3" />
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='history'>
                    <div className='progressbar' style={{ display: 'flex', flexDirection: 'row' }}>
                        <div style={{ height: '1px', width: 9 * value - 4, backgroundColor: '00D8FF' }} className='progressbar_1' color="warning" className="mb-3" >
                        </div>
                        <div>
                            <img src={run} style={{ width: '30px', height: '30px' }} />
                        </div>
                    </div>
                    <div className='progressbar'>
                        <div style={{ position: 'relative', height: '5px', width: '900px', backgroundColor: '#22262A' }} className='progressbar_1' color="warning" className="mb-3" >
                            <div style={{ position: 'absolute', height: '5px', width: 9 * value, backgroundColor: '#00D8FF' }} className='progressbar_1' color="warning" value={value} className="mb-3" />
                        </div>
                    </div>
                </div>
            )
        }
    }

    // 위에 뜨는 문구
    const progressment = () => {
        if (value <= 20) {
            return (
                <span>건국대학교 글로컬캠퍼스 졸업</span>
            )

        } else if (value <= 40) {
            return (
                <span>TLO</span>
            )
        } else if (value <= 60) {
            return (
                <span>자격증</span>
            )
        } else if (value <= 80) {
            return (
                <span>대전대 HRD 사업</span>
            )
        } else {
            return (
                <span>팀마파</span>
            )
        }
    }
    return (
        <div className="timeline">
            <div className="main_container">
                <div className="sub_container">
                    <span>{progressment()}</span>
                    {progressbar()}
                    <button style={{ width:10,height:10 }} onClick={() => { percent(); console.log('hi') }}>fdfd</button>
                </div>
            </div>
        </div>
    )
}

export default Timeline;
