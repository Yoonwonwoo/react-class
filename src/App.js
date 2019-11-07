import React from 'react'
import './App.css';
import content from './cap.PNG'
function App(){
  return ( 
    <div className="root">
      <header>
      <span id="gmail">Gmail</span>
      <span id="img">이미지</span>
      <img id="content" src={content} alt="목록"/>
      <div id="login"></div>
      </header>
      <img src = "http://www.bloter.net/wp-content/uploads/2018/09/google_PNG19644.png"
      alt = "google" id="logo"/>
      <div className="searchBox">
        <img src="https://us.123rf.com/450wm/dxinerz/dxinerz1507/dxinerz150700416/42792099-%EA%B2%80%EC%83%89-%EC%B0%BE%EA%B8%B0-google-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0-image-can-%EB%98%90%ED%95%9C-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EC%97%90-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%95%B1-%EC%9B%B9-%EC%95%B1-%EB%B0%8F-%EC%9D%B8%EC%87%84-%EB%A7%A4%EC%B2%B4%EC%97%90-%EC%A0%81%ED%95%A9%ED%95%A9%EB%8B%88%EB%8B%A4-.jpg?ver=6"
         alt="search" id="searchIcon"/>
         <div id="boxText">Google 검색 또는 URL 입력</div>
         <img src ="https://www.botcopy.com/wp-content/uploads/bb-plugin/cache/google-mic-icon-1024x1024-square.png" alt="record" id="recordIcon" />
      </div>
      <div className="buttons">
      <input type = "button" value = "Google 검색" id="searchBtn"/>
      <input type = "button" value = "I'm Feeling Lucky" id="LuckyBtn"/>
      </div>
      <div className="bottom">
            <div>
                <div className="korea">대한민국</div>  
                    <div className="firstButton">
                        <span id="ad">광고</span>
                        <span id="bis">비즈니스</span> 
                        <span id="inform">Google 정보</span> 
                        <span id="bsearch">검색의 원리</span>
                    </div>
                </div>
            <div>
            <div className="secondButton">
            <span id="person">개인정보처리 방침</span>
            <span id="license">약관</span>
            <span id="set">설정</span>
            </div>
        </div>
        </div>
    </div>  
    );
}


export default App;
