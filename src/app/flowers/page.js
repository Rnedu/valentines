"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FlowersPage() {
  const router = useRouter();
  const [selectedFlower, setSelectedFlower] = useState("");

  const flowers = [
    { name: "Roses", image: "/roses.jpg" },
    { name: "Tulips", image: "/tulips.jpg" },
    { name: "Lilies", image: "/lilies.jpg" },
    { name: "Sunflowers", image: "/sunflowers.jpg" },
    { name: "Chocolates", image: "/choco.jpg" },
    { name: "White Roses", image: "/white.jpg" },
  ];

  const handleNext = () => {
    if (selectedFlower) {
      router.push("/cuisine"); // Goes to the next page
    } else {
      alert("Please select a flower! 🌸");
    }
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Comic Sans MS",
        textAlign: "center",
        backgroundColor: "#ffe6e6",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#ff4d4d" }}>
        Yay! What flowers would you like? 🌸
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem",
          marginTop: "2rem",
          maxWidth: "600px",
        }}
      >
        {flowers.map((flower) => (
          <div
            key={flower.name}
            onClick={() => setSelectedFlower(flower.name)}
            style={{
              border:
                selectedFlower === flower.name
                  ? "3px solid #ff8080"
                  : "2px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
              cursor: "pointer",
              textAlign: "center",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              src={flower.image}
              alt={flower.name}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                marginBottom: "0.5rem",
              }}
            />
            <p style={{ fontSize: "1rem", color: "#333" }}>{flower.name}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        style={{
          marginTop: "2rem",
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          backgroundColor: "#ff8080",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        Next ➡️
      </button>
    </main>
  );
}
