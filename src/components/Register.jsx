
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {auth , db} from './Firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          password: password,
        });
      }
      console.log("user Registered successfully");
      toast.success("User registered successfully!", { position: "top-center" });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, { position: "bottom-center" });
    }
  };

  return (
    
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
        <form onSubmit={handleRegister}>
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label>First Name</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter your first name" 
              onChange={(e) => setFname(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label>Last Name</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter your last name" 
              onChange={(e) => setLname(e.target.value)} 
              required 
            />
          </div>
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
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </div><br />
          <p className="forgot-password text-right">
            Already registered? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
    
  );
}

export default Register;
