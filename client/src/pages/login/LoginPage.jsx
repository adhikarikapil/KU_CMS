import React from "react";

// Images
import Logo from "/KU-CMS.webp";

// Styles
import "./LoginStyles.css";

// Routes
import { Link } from "react-router-dom";

const LoginPage = () => {
  const handleTeacherToggle = () => {
    const container = document.getElementById("container");
    container.classList.add("active");
  };

  const handleStudentToggle = () => {
    const container = document.getElementById("container");
    container.classList.remove("active");
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className=" max-h-[100px] loginContainer" id="container">
        <div className="form-container sign-up">
          <form>
            <img src={Logo} alt="KU-CMS" className="logo" />
            <h2>Teacher Login</h2>
            <input type="hidden" name="userType" value='teacher' />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="button-group">
              <Link to="/teacher-dashboard">
                <button>Login</button>
              </Link>
              <Link to="/register">
                <button className="secondary">Register</button>
              </Link> 
            </div>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <img src={Logo} alt="KU-CMS" className="logo" />
            <h2>Student Login</h2>
            <input type="hidden" name="userType" value='student' />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="button-group">
              <Link to="/student-dashboard">
                <button>Login</button>
              </Link>
              <Link to='/register'>
                <button className="secondary">Register</button>
              </Link>
            </div>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h2>Are you a student?</h2>
              <p>
                Login your student account to access your courses and
                assignments.
              </p>
              <button className="" onClick={handleStudentToggle}>
                Login as Student
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h2>Are you a Teacher?</h2>
              <p>
                Login your teacher account to manage your classes and students.
              </p>
              <button className="" onClick={handleTeacherToggle}>
                Login as Teacher
              </button>
            </div>
          </div>
        </div>
        <div className="mobile-nav">
          <button onClick={handleStudentToggle}>Student Login</button>
          <button onClick={handleTeacherToggle}>Teacher Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
