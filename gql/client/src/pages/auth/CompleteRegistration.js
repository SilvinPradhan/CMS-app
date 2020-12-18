import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const CompleteRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  let history = useHistory();

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
  }, [history]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // validation
    if (!email || !password) {
      toast.error("Email and Password is required!");
      return;
    }
    try {
      // grab the entire URL of register-confirmation
      const res = await auth.signInWithEmailLink(email, window.location.href);
      console.log(res);
      if (res.user.emailVerified) {
        // remove email from local storage
        window.localStorage.removeItem("emailForRegistration");
        let user = auth.currentUser;
        await user.updatePassword(password);

        // dispatch user with token and email
        // then redirect
      }
    } catch (error) {
      console.log("register complete error", error.message);
      setLoading(false);
      toast.error(error.message);
    }
  };
  return (
    <>
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
              disabled
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Type Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
    </>
  );
};

export default CompleteRegistration;
