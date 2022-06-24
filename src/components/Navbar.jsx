import logo from "../airbnb-logo.svg";
export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img className="airbnb-logo" src={logo} alt="logo of airbnb"></img>
      </div>
    </>
  );
}
