import { useState } from "react";

const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: [e.target.value] });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password, name };

      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      localStorage.setItem("token", parseRes.token);
      setAuth(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitForm}>
          <h5 className="text-center my-5">Register</h5>
          <input
            className="form-control my-3"
            type="email"
            name="email"
            placeholder="Email here"
            value={email}
            onChange={(e) => onChange(e)}
          />
          <input
            className="form-control my-3"
            type="password"
            name="password"
            placeholder="Password here"
            value={password}
            onChange={(e) => onChange(e)}
          />
          <input
            className="form-control my-3"
            type="text"
            name="name"
            placeholder="Your Name here"
            value={name}
            onChange={(e) => onChange(e)}
          />
          <button className="btn btn-success btn-block">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
