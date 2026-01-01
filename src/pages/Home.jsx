import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Navbar />
      <section className="container" style={{padding:"80px 0"}}>
        <h1 style={{fontSize:"48px", marginBottom:"20px"}}>
          Build, Launch & Scale Your SaaS Faster
        </h1>
        <p style={{maxWidth:"600px", marginBottom:"30px"}}>
          LaunchCraft helps founders and teams design, deploy and manage SaaS
          products with speed and confidence.
        </p>
        

    <Link to="/dashboard">
    <button className="btn-primary">Start Building</button>
    </Link>

      </section>
    </>
  );
}
<section className="container" style={{ padding:"100px 0" }}>
  <span style={{
    background:"#e0e7ff",
    padding:"6px 14px",
    borderRadius:"999px",
    color:"#4338ca",
    fontSize:"14px"
  }}>
    🚀 Launch faster
  </span>

  <h1 style={{ fontSize:"52px", margin:"20px 0" }}>
    Build, Launch & Scale Your SaaS Faster
  </h1>

  <p style={{ maxWidth:"600px", marginBottom:"30px", fontSize:"18px" }}>
    LaunchCraft helps founders and teams design, deploy and manage SaaS
    products with speed and confidence.
  </p>

  <button className="btn-primary">Start Building</button>
</section>
