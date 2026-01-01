import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { usageData } from "../data/metrics";

export default function Dashboard() {
      const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/metrics")
      .then(res => res.json())
      .then(data => setMetrics(data));
  }, []);

  return (
    <>
      <Navbar />
      <section className="container" style={{ padding: "60px 0" }}>
        <h1 style={{ fontSize: "36px", marginBottom: "30px" }}>Dashboard</h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          <div className="dashboard-card">
            <h3>Total Projects</h3>
            <p className="stat">12</p>
          </div>
          <div className="dashboard-card">
            <h3>Active Users</h3>
            <p className="stat">1,248</p>
          </div>
          <div className="dashboard-card">
            <h3>Revenue</h3>
            <p className="stat">₹42,300</p>
          </div>
          <div className="dashboard-card">
            <h3>Deployments</h3>
            <p className="stat">38</p>
          </div>
        </div>

        <div style={{ marginTop: "50px" }}>
          <h2 style={{ marginBottom: "20px" }}>Weekly User Activity</h2>

          <div className="dashboard-card" style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={usageData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </>
  );
}
