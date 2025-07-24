import React from "react";

const AdminPanel = () => {
  
  const isAdmin = true; 

  return (
    <div style={{ height: "100vh", width: "100%", padding: "10px" }}>
      {isAdmin ? (
        <iframe
          src="https://zerodha-dashboard-e6x5.onrender.com"
          title="Admin Dashboard"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "8px",
            boxShadow: "0 0 12px rgba(0,0,0,0.1)"
          }}
        />
      ) : (
        <p style={{ fontSize: "20px", color: "crimson", textAlign: "center" }}>
          ⛔ Access Denied. Admins only.
        </p>
      )}
    </div>
  );
};

export default AdminPanel;
