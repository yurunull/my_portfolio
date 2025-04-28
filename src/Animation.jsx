import React from "react";
import "./App.css"; // 必要なCSSをインポート

function Animation() {
  const leaves = [
    { left: "10%", delay: "0s" },
    { left: "30%", delay: "2s" },
    { left: "50%", delay: "4s" },
    { left: "70%", delay: "1s" },
    { left: "90%", delay: "3s" },
  ];

  return (
    <>
      {leaves.map((choco, i) => (
        <div
          key={i}
          className="choco absolute top-[-10%] w-6 h-6 text-4xl opacity-70 animate-float z-0"
          style={{
            left: choco.left,
            animationDelay: choco.delay,
          }}
        >
          🍫
        </div>
      ))}
    </>
  );
}

export default Animation;
