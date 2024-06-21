import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import App1 from "./page1.js"
import App2 from "./page2.js";
import App3 from "./page3.js";
import App4 from "./page4.js";


function AppC() {
  const [showPage1, setShowPage1] = useState(true);
  const [showPage2, setShowPage2] = useState(false);
  const [showPage3, setShowPage3] = useState(false);
  const [showPage4, setShowPage4] = useState(false);

  const show1 = () => {
    setShowPage1(true);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(false);
  };
  const show2 = () => {
    setShowPage1(false);
    setShowPage2(true);
    setShowPage3(false);
    setShowPage4(false);
  };
  const show3 = () => {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(true);
    setShowPage4(false);
  };
  const show4 = () => {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(false);
    setShowPage4(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <span>Cinema na Mão</span>
        <div>
          <button type="button" href="page1.js" onClick={show1}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN0YXIiPjxwb2x5Z29uIHBvaW50cz0iMTIgMiAxNS4wOSA4LjI2IDIyIDkuMjcgMTcgMTQuMTQgMTguMTggMjEuMDIgMTIgMTcuNzcgNS44MiAyMS4wMiA3IDE0LjE0IDIgOS4yNyA4LjkxIDguMjYgMTIgMiIvPjwvc3ZnPg==" /></button>
          <button type="button" href="page2.js" onClick={show2}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlYXJjaCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Im0yMSAyMS00LjMtNC4zIi8+PC9zdmc+" /></button>
          <button type="button" href="page3.js" onClick={show3}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBsdXMiPjxwYXRoIGQ9Ik01IDEyaDE0Ii8+PHBhdGggZD0iTTEyIDV2MTQiLz48L3N2Zz4=" /></button>
          <button type="button" href="page4.js" onClick={show4}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlbmQtaG9yaXpvbnRhbCI+PHBhdGggZD0ibTMgMyAzIDktMyA5IDE5LTlaIi8+PHBhdGggZD0iTTYgMTJoMTYiLz48L3N2Zz4=" /></button>
        </div>
      </header>
      <App1 isVisible={showPage1}/>
      <App2 isVisible={showPage2}/>
      <App3 isVisible={showPage3}/>
      <App4 isVisible={showPage4}/>
    </div>
  );
}

export default AppC;
