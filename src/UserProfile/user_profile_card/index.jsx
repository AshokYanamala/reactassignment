import React from "react";
import "./index.css"; // Import CSS file

const UserProfileCard = ({ name, email, phone, hobbies }) => {
  return (
    <div className="user-profile-card">
      <div className="profile-info">
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Hobbies: {hobbies}</p>
      </div>
    </div>
  );
};

export default UserProfileCard;
