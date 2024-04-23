import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import "./App.css";
import ReactCounter from "./ReactCounter/index.jsx";
import UserProfileForm from "./UserProfile/user_profile_form";
import UserProfileCard from "./UserProfile/user_profile_card";

function App() {
  const [profile, setProfile] = useState(null);

  const handleSubmit = (data) => {
    setProfile(data);
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar flex justify-center items-center">
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/counter" className="btn btn-primary">
                Counter
              </NavLink>
            </li>
            <li>
              <NavLink to="/user-profile" className="btn btn-primary">
                User Profile
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="counter-card-wrapper">
          <Routes>
            <Route path="/counter" element={<ReactCounter />} />
            <Route
              path="/user-profile"
              element={
                <div className="container">
                  <h1 className="title">User Profile Form</h1>
                  <div className="content">
                    <div className="form">
                      <UserProfileForm onSubmit={handleSubmit} />
                    </div>
                    <div className="card">
                      {profile && <UserProfileCard {...profile} />}
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
