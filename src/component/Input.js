import './Input.css';

function Input () {
    return(
        <div className='input_Container'>
            <div className='input'>
            <h4 className='email'>이메일</h4>
            <input type="text" className='emailInput' placeholder='이메일'/>

            <h4 className="pwd">비밀번호</h4>
            <input className="pwdInput" type="password" placeholder='비밀번호'/>

            <p>회원가입</p>
            <p>ID / PW 찾기</p>
            </div>

            <div className="submit">
                <button className="submitBtn">로그인</button>    
            </div>         
        </div>
    );
};

export default Input;