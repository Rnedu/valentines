"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Confetti from 'react-confetti';

export default function Confirmation() {
  const router = useRouter();
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

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
      <Confetti
        width={windowDimension.width}
        height={windowDimension.height}
        recycle={false}
        numberOfPieces={200}
      />
      <img 
        src="harinee.jpeg"
        alt="Valentine's Day Meme"
        style={{
          maxWidth: "30%",
          maxHeight: "40%",
          marginBottom: "2rem",
          borderRadius: "10px",
        }}
      />
      <img 
          src="happy-cat-cat.gif" // Replace with your actual GIF URL
          alt="Celebration GIF"
          style={{
            maxWidth: "30%", // Adjust size as needed
            borderRadius: "10px",
          }}
        />
      <h1 style={{ fontSize: "2rem", color: "#ff4d4d" }}>
        You make me incredibly happy
        I feel lucky to have you in my life
        hehe we'll have alot of fun
      </h1>
    </main>
  );
}
