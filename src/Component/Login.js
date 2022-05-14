const Login = ({ setAuth }) => {
  return (
    <>
      <div className="container">
        <h5>Login page</h5>
        <button className="btn btn-warning" onClick={() => setAuth(true)}>
          Auth
        </button>
      </div>
    </>
  );
};

export default Login;
