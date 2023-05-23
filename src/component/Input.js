import React, {useState} from "react";
import './Input.css';
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import NewEmail from "./NewEmail";

function Input () {
    const localUserData = JSON.parse(localStorage.getItem('User'));
    console.log(localUserData);

    const User = {
        email: 'test@naver.com',
        password: 1234
    };

    const [userEmailInput, setUserEmailInput] = useState('');
    const [userPwdInput, setUserPwdInput] = useState('');
    const [notAllow, setNotAllow] = useState('true');

    const emailHandler = (event) => {
        setUserEmailInput(event.target.value);
    };

    const pwdHandler = (event) => {
        setUserPwdInput(event.target.value);
    };

    const loginHandler = (event) => {
        
        if(userEmailInput === localUserData.email  && parseInt(userPwdInput) === parseInt(localUserData.password)) {
            alert('환영합니다.');
            setNotAllow('false');
            console.log(notAllow);
        }
        else {
            alert('등록되지 않은 아이디입니다.');
            setNotAllow('true');
            console.log(notAllow);
        }
    };

    return(

        
            <div className='input_Container'>
                <div className='input'>
                    <h4 className='email'>이메일</h4>
                    <input type="text" className='emailInput' placeholder='이메일' onChange={emailHandler}/>

                    <h4 className="pwd">비밀번호</h4>
                    <input className="pwdInput" type="password" placeholder='비밀번호' onChange={pwdHandler}/>
                <div/>
                <Link to='/New'><p>회원가입</p></Link>
            </div>

            <div className="submit">
                <button className="submitBtn" onClick={loginHandler}>로그인</button>    
            </div>         
        </div>
    );
};

export default Input;