import LoginTitle from './LoginTitle';
import './Login.css';
import Input from './Input';

function Login () {
    return(
        <div className="login_Container">
            <LoginTitle />
            <Input />
        </div>
    );
}

export default Login;