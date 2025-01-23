"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CuisinePage() {
  const router = useRouter();
  const [selectedCuisine, setSelectedCuisine] = useState("");

  const cuisines = [
    { name: "Italian", image: "/italian.jpg" },
    { name: "Japanese", image: "/japanese.jpg" },
    { name: "Indian", image: "/indian.jpg" },
    { name: "Mexican", image: "/mexican.jpg" },
    { name: "Thai", image: "/thai.jpg" },
    { name: "Korean", image: "/korean.jpg" },
  ];

  const handleNext = () => {
    if (selectedCuisine) {
      router.push("/activity"); // Goes to the next page
    } else {
      alert("Please select a cuisine! 🍴");
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
        backgroundColor: "#ffcccb",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#ff4d4d" }}>
        Awesome! What cuisine would you like? 🍽️
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
        {cuisines.map((cuisine) => (
          <div
            key={cuisine.name}
            onClick={() => setSelectedCuisine(cuisine.name)}
            style={{
              border:
                selectedCuisine === cuisine.name
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
              src={cuisine.image}
              alt={cuisine.name}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                marginBottom: "0.5rem",
              }}
            />
            <p style={{ fontSize: "1rem", color: "#333" }}>{cuisine.name}</p>
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
