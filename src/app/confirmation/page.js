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
        minHeight: "100vh",
        fontFamily: "Comic Sans MS",
        textAlign: "center",
        backgroundColor: "#ffe6e6",
        padding: "2rem",
      }}
    >
      <Confetti
        width={windowDimension.width}
        height={windowDimension.height}
        recycle={false}
        numberOfPieces={200}
      />
      
      {/* Image Gallery */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginBottom: "2rem",
        flexWrap: "wrap",
      }}>
        <img 
          src="harinee.jpeg"
          alt="Valentine's Day Meme 1"
          style={{
            width: "30%",
            maxWidth: "300px",
            height: "auto",
            borderRadius: "10px",
          }}
        />
        <img 
          src="harinee2.jpeg"  // Replace with your second image
          alt="Valentine's Day Meme 2"
          style={{
            width: "30%",
            maxWidth: "300px",
            height: "auto",
            borderRadius: "10px",
          }}
        />
        <img 
          src="harinee3.jpeg"  // Replace with your third image
          alt="Valentine's Day Meme 3"
          style={{
            width: "30%",
            maxWidth: "300px",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </div>
      
      {/* GIF below */}
      <img 
        src="happy-cat-cat.gif"
        alt="Celebration GIF"
        style={{
          maxWidth: "30%",
          borderRadius: "10px",
          marginBottom: "2rem",
        }}
      />
      
      <h1 style={{ fontSize: "2rem", color: "#ff4d4d" }}>
        You make me incredibly happy<br/>
        I feel lucky to have you in my life<br/>
        hehe we'll have alot of fun
      </h1>
    </main>
  );
}
