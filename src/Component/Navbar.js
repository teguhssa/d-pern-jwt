import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1>This is Navbar</h1>
        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/register"> Register</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
