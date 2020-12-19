import React, { useState } from "react";
import { auth } from "../../firebase";
// Toast Notification
import { toast } from "react-toastify";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Set the loading state to true
    setLoading(true);
    // Pass configuration for confirmation link
    const config = {
      // "url" to redirect to the page after link confirmation
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
      handleCodeInApp: true,
    };
    const result = await auth.sendSignInLinkToEmail(email, config);
    console.log(result);
    // show toast notification to user about email sent
    toast.success(
      `Email is sent to ${email}. Click the link to complete your registration!`
    );
    // save user email to localStorage
    window.localStorage.setItem("emailForRegistration", email);

    // Reset state/ clear
    setEmail("");
    setLoading("");
  };

  return (
    <div className="container p-5">
      {loading ? (
        <h4 className="text-danger">Loading...</h4>
      ) : (
        <h4>Register</h4>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Type Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>
        <button
          className="btn btn-raised btn-primary"
          disabled={!email || loading}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
