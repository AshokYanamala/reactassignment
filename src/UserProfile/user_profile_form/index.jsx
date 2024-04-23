import React, { useState } from "react";
import "./index.css"; // Import CSS file

const UserProfileForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hobbies, setHobbies] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation checks
    const namereg = /^[a-zA-Z]+$/;
    const phonereg = /^\d{10}$/;
    const emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!namereg.test(name)) {
      alert("Please enter a valid name with only alphabets.");
      return;
    }
    if (!phonereg.test(phone)) {
      alert("Please enter a valid Indian/Pakistani phone number.");
      return;
    }
    if (!emailreg.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // Submit the form
    onSubmit({ name, email, phone, hobbies });
    // Reset form fields
    setName("");
    setEmail("");
    setPhone("");
    setHobbies("");
  };

  return (
    <form onSubmit={handleSubmit} className="user-profile-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your Phone Number"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="hobbies">Hobbies</label>
        <input
          type="text"
          id="hobbies"
          placeholder="Enter your Hobbies"
          value={hobbies}
          onChange={(event) => setHobbies(event.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserProfileForm;
