import React, {useState} from "react";
import './Input.css';

function Input () {
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
        
        if(userEmailInput === User.email  && parseInt(userPwdInput) === User.password) {
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

            <p>회원가입</p>
            <p>ID / PW 찾기</p>
            </div>

            <div className="submit">
                <button className="submitBtn" onClick={loginHandler}>로그인</button>    
            </div>         
        </div>
    );
};

export default Input;