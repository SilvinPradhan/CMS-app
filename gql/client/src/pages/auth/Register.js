import React, { useState } from "react";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    //
  };

  return (
    <div className="container p-5">
      <h4>Register</h4>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
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
