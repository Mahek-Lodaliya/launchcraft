import Navbar from "../components/Navbar";

export default function Features() {
  return (
    <>
      <Navbar />
      <section className="container" style={{ padding: "80px 0" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "40px" }}>
          Everything you need to launch faster
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "30px" }}>
          <div className="feature-card">
            <h3>Rapid Setup</h3>
            <p>Get your SaaS up and running in minutes with a clean starter architecture.</p>
          </div>

          <div className="feature-card">
            <h3>Scalable Design</h3>
            <p>Built with growth in mind, so your product scales as your users grow.</p>
          </div>

          <div className="feature-card">
            <h3>Developer Friendly</h3>
            <p>Simple structure, readable code, and modern tooling for fast iteration.</p>
          </div>
        </div>
      </section>
    </>
  );
}
