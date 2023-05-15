import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from '../firebase';

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const history = useHistory();

    const signIn = e => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message));
    };

    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message));
    };

  return (
    <div className='login' >
        <Link to='' >
            <img 
            src='https://document-export.canva.com/k8wbI/DAFi6-k8wbI/5/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230514%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230514T005651Z&X-Amz-Expires=73923&X-Amz-Signature=28b6f76908f9c928796d85ba948b336f9fe45d6d6819ca76959cfef3562b0547&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2014%20May%202023%2021%3A28%3A54%20GMT' 
            alt='Sweet Cakes Logo' 
            className='login_logo' 
            />
        </Link>
        <div className='login_container' >
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>
            </form>
            <p>Join us and get both free and exclusive 
                tutorials on how to bake our ammmazing 
                cakes. By continuing, you agree to our
                privacy terms and conditions.
            </p>
            <button className='login_registerButton' onClick={register}>Create Account</button>
        </div>
    </div>
  );
};

export default Login;