import Navbar from "../components/Navbar";

export default function Pricing() {
  return (
    <>
      <Navbar />
      <section className="container" style={{ padding: "80px 0" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "40px" }}>
          Simple, transparent pricing
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
          <div className="price-card">
            <h3>Starter</h3>
            <h2>₹0</h2>
            <p>Best for learning and small projects</p>
            <button className="btn-primary">Get Started</button>
          </div>

          <div className="price-card">
            <h3>Pro</h3>
            <h2>₹999 / month</h2>
            <p>For growing SaaS teams</p>
            <button className="btn-primary">Choose Pro</button>
          </div>

          <div className="price-card">
            <h3>Enterprise</h3>
            <h2>Custom</h2>
            <p>For large scale products</p>
            <button className="btn-primary">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
}
