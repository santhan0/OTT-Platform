import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Save user data to localStorage
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup successful! You can now sign in.');
    navigate('/');
  };

  return (
    <div className='body'>
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.509)', height: '100vh', alignItems: 'center' }}>
        <h1>NETFLIX</h1>
        <center>
          <div className="signup">
            <main className="form-signin w-100 m-auto">
              <form onSubmit={handleSignup}>
                <h1 className="h3 mb-3 fw-normal" style={{ color: 'white', fontWeight: 'bold' }}>Sign Up</h1>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingName"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="floatingName">Full Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingEmail">Email address</label>
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
                <button className="btn btn-danger w-100 py-2" type="submit">Sign Up</button>
                <div className="mt-3">
                  Already have an account?
                  <Link to="/"> Sign In</Link>
                </div>
              </form>
            </main>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Signup;
