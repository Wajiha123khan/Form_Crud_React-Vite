// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import Login from './components/Login';
// import SignUp from './components/Register';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Profile from './components/Profile';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Routes>
//               <Route path="/" element={<Login />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<SignUp />} />
//               <Route path="/profile" element={<Profile />} />
//             </Routes>
//             <ToastContainer />
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import SignUp from './components/Register';
import Profile from './components/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;

