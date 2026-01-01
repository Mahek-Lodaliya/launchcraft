

import { Link } from "react-router-dom";
import "../styles/global.css";

export default function Navbar() {
  return (
    <nav className="container" style={{display:"flex", justifyContent:"space-between", padding:"20px 0"}}>
      <h2>LaunchCraft</h2>

      <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
        <Link to="/">Home</Link>
        <Link to="/features" style={{opacity:0.85}}>Features</Link>
        <Link to="/pricing" style={{opacity:0.85}}>Pricing</Link>

        <Link to="/dashboard">
          <button className="btn-primary">Dashboard</button>
        </Link>
      </div>
    </nav>
  );
}
