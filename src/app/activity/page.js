"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ActivityPage() {
  const router = useRouter();
  const [selectedActivity, setSelectedActivity] = useState("");

  const activities = [
    { name: "Dessert and walk along the harbor", image: "sydney.jpg" },
    { name: "Go home", image: "home.jpg" },
    { name: "Go on drive to La Perouse", image: "drive.jpg" },
    { name: "Make a recommendation", image: "question.jpg" }
  ];

  const handleNext = () => {
    if (selectedActivity) {
      // Here you might want to add logic for where to navigate next or what to do with the selection
      router.push("/confirmation"); // Example next page
    } else {
      alert("Please select an activity! 🚶‍♂️");
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
        What would you like to do after?
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
        {activities.map((activity) => (
          <div
            key={activity.name}
            onClick={() => setSelectedActivity(activity.name)}
            style={{
              border:
                selectedActivity === activity.name
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
              src={activity.image}
              alt={activity.name}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                marginBottom: "0.5rem",
              }}
            />
            <p style={{ fontSize: "1rem", color: "#333" }}>{activity.name}</p>
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