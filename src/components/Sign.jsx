import React, { useState } from 'react';
import './Sign.css';
import { Link, useNavigate } from 'react-router-dom';

const Sign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert('Sign-in successful!');
      navigate('/nav'); // Navigate to the Home page
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className='body'>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.509)', height: '100vh', alignItems: 'center' }}>
        <h1>NETFLIX</h1>
        <center>
          <div className="signup">
            <main className="form-signin w-100 m-auto">
              <form onSubmit={handleSignIn}>
                <h1 className="h3 mb-3 fw-normal" style={{ color: 'white', fontWeight: 'bold' }}>Sign In</h1>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="btn btn-danger w-100 py-2" type="submit">Sign in</button>
                <div className="form-check text-start my-3">
                  <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                  </label>
                </div>
              </form>
              <div>
                New to the page?
                <Link to="/signup"> Sign Up</Link>
              </div>
            </main>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Sign;
