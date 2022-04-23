import { Fragment, useState } from "react";
const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    name: "",
  });

  const { email, password, name } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      console.log(parseRes);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center my-4">Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="email"
          placeholder="Email"
          className="form-control my-3"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
        ></input>
        <input
          type="password"
          className="form-control my-3"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => onChange(e)}
        ></input>
        <input
          type="text"
          placeholder="Name"
          className="form-control my-3"
          name="name"
          value={name}
          onChange={(e) => onChange(e)}
        ></input>
        <button className="btn btn-success btn-block">Save</button>
      </form>
    </Fragment>
  );
};

export default Register;
