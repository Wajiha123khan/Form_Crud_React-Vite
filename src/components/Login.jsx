import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './Firebase';
import { toast } from 'react-toastify';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("user login succesfuuly");
      window.location.href="/profile";
      toast.success("User logged in successfully!", { position: "top-center" });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
  //   <form onSubmit={handleSubmit}>
  //     <h3>Login</h3>
  //     <div className="mb-3">
  //       <label>Email address</label>
  //       <input 
  //         type="email" 
  //         className="form-control" 
  //         placeholder="Enter email" 
  //         value={email} 
  //         onChange={(e) => setEmail(e.target.value)} 
  //         required 
  //       />
  //     </div>
  //     <div className="mb-3">
  //       <label>Password</label>
  //       <input 
  //         type="password" 
  //         className="form-control" 
  //         placeholder="Enter password" 
  //         value={password} 
  //         onChange={(e) => setPassword(e.target.value)} 
  //         required 
  //       />
  //     </div>
  //     <div className="d-grid">
  //       <button type="submit" className="btn btn-primary">Login</button>
  //     </div>
  //     <p className="forgot-password text-right">
  //       New user? <a href="/register">Register Here</a>
  //     </p>
  //   </form>
  // );
  <div className="auth-wrapper" style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '100vh', 
    // backgroundColor: '#f5f6fa' 
  }}>
    <div className="auth-inner" style={{ 
      width: '400px', 
      maxWidth: '700px', 
      padding: '30px', 
      borderRadius: '8px', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
      backgroundColor: '#ffffff' 
    }}>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div><br />
        <p className="forgot-password text-right">
          New user? <a href="/register">Register Here</a>
        </p>
      </form>
    </div>
  </div>
  );  
}

export default Login;


