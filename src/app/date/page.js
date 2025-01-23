"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DatePage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");

  const handleNext = () => {
    if (selectedDate) {
      router.push("/flowers"); // Goes to the next page
    } else {
      alert("Please select a date! 🗓️");
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
        When are you free? 🗓️
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#ff8080", margin: "1rem 0" }}>
        Pick a date so we can plan something special!
      </p>

      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        style={{
          padding: "0.8rem",
          fontSize: "1rem",
          color: "black",
          borderRadius: "5px",
          border: "1px solid #ff8080",
          marginBottom: "1.5rem",
        }}
      />

      <button
        onClick={handleNext}
        style={{
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
