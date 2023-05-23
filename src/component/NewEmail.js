import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import classes from './NewEmail.module.css';

function NewEmail () {
    const [newEmailInput, setNewEmailInput] = useState('');
    const [newPwdInput, setNewPwdInput] = useState('');
    const User = {
        email: newEmailInput,
        password: newPwdInput
    };

    function newEmailInputHandler(event) {
        setNewEmailInput(event.target.value);
        
    }

    function submitHandler () {
        localStorage.setItem('User',JSON.stringify(User))
    }

    function newPwdInputHandler (event) {
        setNewPwdInput(event.target.value);
    }
    return(
        <div className={classes.main}>
            <div className="input">
                <label htmlFor="email">이메일</label>
                <br/>
                <input className={classes.emailInput}id='email'type="text" onChange={newEmailInputHandler}/>
                <br/>
                <br/>
                <label htmlFor="pwd">비밀번호</label>
                <br/>
                <input className={classes.pwdInput} type="password" onChange={newPwdInputHandler}/>            
            </div>
            <div className={classes.submit}>
                <Link to='/'>
                <button className={classes.submitBtn} onClick={submitHandler}>제출</button>
                </Link>
            </div>
        </div>   
    );
}

export default NewEmail;