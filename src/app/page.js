"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/valentine");
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
        src="cat.jpg" // Replace with the actual path or URL of your image
        alt="Valentine's Day Meme"
        style={{
          maxWidth: "80%",
          marginBottom: "2rem",
          borderRadius: "10px",
        }}
      />
      <h1 style={{ fontSize: "2rem", color: "#ff4d4d" }}>
        Hi Harinee, 💖 Do you know what Valentine's Day is?
      </h1>
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
        Tell Me More!
      </button>
    </main>
  );
}

