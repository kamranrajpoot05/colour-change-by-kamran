import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState("linear-gradient(to right, red, orange)");

  const colors = [
    { name: "blue", value: "blue" },
    { name: "Gray", value: "gray" },
    { name: "Pink", value: "pink" },
    { name: "Aqua", value: "aqua" },
    { name: "Blue to Purple", value: "linear-gradient(to right, #00f, #800080)" },
    { name: "Orange to Yellow", value: "linear-gradient(to right, orange, yellow)" },
    { name: "Green to Teal", value: "linear-gradient(to right, green, teal)" },
    { name: "Red to Black", value: "linear-gradient(to right, red, black)" },
  ];

  return (
    <div
      className="App"
      style={{
        background: color,
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "background 0.5s ease",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        overflowX: "hidden",
        color: "#fff",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Color Changer</h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "30px" }}>
        Current: <code style={{ background: "#00000030", padding: "4px 8px", borderRadius: "4px" }}>{color}</code>
      </h2>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", justifyContent: "center" }}>
        {colors.map((clr, index) => (
          <button
            key={index}
            onClick={() => setColor(clr.value)}
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              background: clr.value.includes("gradient") ? clr.value : "#fff",
              color: clr.value.includes("gradient") ? "#fff" : "#333",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s, background-color 0.3s",
              minWidth: "140px",
              textAlign: "center",
            }}
          >
            {clr.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
