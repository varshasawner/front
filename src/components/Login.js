import React, { useEffect, useState } from 'react'
import loginpic from './../images/loginpic.png'
// import { useNavigate } from 'react-router-dom'
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            // navigate("/")
        }
    }, [])

    const handleLogin = async () => {
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.warn(result)
        if (result.auth) {
            localStorage.setItem('admin', JSON.stringify(result.admin));
            localStorage.setItem('token', JSON.stringify(result.auth));
            // navigate("/")
        } else {
            alert("Please enter connect details")
        }
    }

    return (
        <div className='login'>
           <section className='imageBox'>
            <img src={loginpic}/>
           </section>
           <section className='LoginForm'>
           <h1>Login</h1>
           <p>Hello! Please enter your details for login.</p>
            <input type="text" className="form-control" placeholder='Enter Email'
                onChange={(e) => setEmail(e.target.value)} value={email} />
            <input type="password" className="form-control" placeholder='Enter Password'
                onChange={(e) => setPassword(e.target.value)} value={password} />
                <p>Forgot Password</p>
            <button onClick={handleLogin} className="btn btn-primary" type="button">Login</button>
           
           <p>i Dont have an account for review & rating</p>
           Register Now
           </section>
        </div>
    )
}

export default Login