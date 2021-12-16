import './home.scoped.css';
import React, { useState, useEffect } from 'react';
import reactImg from '../src/static/images/react.png'

function Home() {
  // var docStyle = document.documentElement.style;
  // document.addEventListener('mousemove', function (e) {
  //   docStyle.setProperty('--mouse-x', e.clientX);
  //   docStyle.setProperty('--mouse-y', e.clientY);
  // });

  // 글씨 타이핑 하는 것 처럼 보이는 효과 
  // https://curryyou.tistory.com/328, https://wazacs.tistory.com/35 참고
  var txt = 'Let me introduce my self. Thank you for visiting :)'
  const [Text, setText] = useState('');
  const [Count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + txt[Count]); // useState에 한글자씩 추가
      setCount(Count + 1);
    }, 70);

    if (Count === txt.length) {
      clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제
    }
    return () => clearInterval(interval); // 언마운트시 setInterval을 해제
  })

  

  return (
    <div className="home">
      <div className="main_container">
        <div className="sub_container">
          <div className="ment">
            <h2>Hello.<br />{Text}</h2>
            {/* <button>Check out my work</button> */}
            <button>Check out my work</button>
          </div>
          <div className="react_logo">
            <img src={reactImg}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
