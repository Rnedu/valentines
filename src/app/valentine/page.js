"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Valentine() {
  const router = useRouter();
  const [response, setResponse] = useState(null);

  const handleYes = () => {
    router.push("/date"); // Goes to the next page
  };

  const handleNo = () => {
    setResponse("Oh no! 💔 That's heartbreaking...");
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
      <img 
        src="please.jpg" // Replace with the actual path or URL of your image
        alt="Valentine's Day Meme"
        style={{
          maxWidth: "80%",
          marginBottom: "2rem",
          borderRadius: "10px",
        }}
      />
      <h1 style={{ fontSize: "2rem", color: "#ff4d4d" }}>
        How about you be mine and find out? Will you be my Valentine?
      </h1>

      {!response ? (
        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={handleYes}
            style={{
              margin: "1rem",
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
            Yes 💖
          </button>
          <button
            onClick={handleYes}
            style={{
              margin: "1rem",
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              backgroundColor: "#ff8080",
              color: "#333",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            Yes, but longer and please 💔
          </button>
        </div>
      ) : (
        <div>
          <p style={{ marginTop: "2rem", fontSize: "1.5rem", color: "#ff4d4d" }}>
            {response}
          </p>
          <button
            onClick={() => router.push("/")}
            style={{
              marginTop: "1rem",
              padding: "0.8rem 1.5rem",
              fontSize: "1rem",
              backgroundColor: "#ffcccc",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            Go Back to Start
          </button>
        </div>
      )}
    </main>
  );
}