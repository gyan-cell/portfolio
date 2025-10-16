"use client";

import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "@/public/codework.json"; // Adjust the path

const Lottie = () => {
  return (
    <div>
      <Player
        src={animationData} // Local JSON file
        // src="https://assets2.lottiefiles.com/packages/lf20_gap2f1j9.json" // Remote JSON URL
        className="player"
        loop
        autoplay
        speed={1}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default Lottie;
