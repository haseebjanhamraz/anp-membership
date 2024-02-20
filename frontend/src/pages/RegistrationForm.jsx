// RegistrationForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email } = formData;
    const emailDomain = email.split("@")[1];

    // Check if the email domain is 'anp.com.pk'
    if (emailDomain !== "anp.com.pk") {
      enqueueSnackbar("Only authorized personals are allowed to register", {
        variant: "warning",
      });
      // alert("Only emails from anp.com.pk domain are allowed for signup.");
      return; // Stop further execution
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/register",
        formData
      );
      console.log("Registration successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error.response.data);
    }
  };

  return (
    <>
      <div className="bg-yellow-100 ring-offset-purple-950 shadow-lg rounded-md px-6 py-8 m-20">
        <form onSubmit={handleSubmit}>
          <div className="p-4">
            <input
              className="rounded-3xl"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="p-4">
            <input
              className="rounded-3xl"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="p-4">
            <input
              className="rounded-3xl"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="p-4">
            <button
              type="submit"
              className="bg-green-900 text-xl font-bold px-4 py-2 rounded-xl text-white"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
