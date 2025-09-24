import { useState, useRef, useEffect } from "react";

export default function App() {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState("");
  const startAngleRef = useRef(0);
  const arcRef = useRef(0);
  const spinTimeoutRef = useRef(null);
  const spinAngleStartRef = useRef(0);
  const spinTimeRef = useRef(0);
  const spinTimeTotalRef = useRef(0);
  const canvasRef = useRef(null);

  // Adjust wheel size dynamically
  const wheelSize = Math.min(window.innerWidth * 0.8, 400);

  useEffect(() => {
    if (names.length > 0) {
      arcRef.current = (Math.PI * 2) / names.length;
      drawWheel();
    }
    // Redraw on window resize
    const handleResize = () => {
      drawWheel();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [names]);

  const drawWheel = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, wheelSize, wheelSize);

    // Color sets
    const evenColors = ["#ff8a65", "#4fc3f7"];
    const oddColors = ["#ff8a65", "#4fc3f7", "#81c784"];

    for (let i = 0; i < names.length; i++) {
      const angle = startAngleRef.current + i * arcRef.current;
      const colors = names.length % 2 === 0 ? evenColors : oddColors;
      ctx.fillStyle = colors[i % colors.length];
      ctx.beginPath();
      ctx.moveTo(wheelSize / 2, wheelSize / 2);
      ctx.arc(
        wheelSize / 2,
        wheelSize / 2,
        wheelSize / 2,
        angle,
        angle + arcRef.current,
        false
      );
      ctx.lineTo(wheelSize / 2, wheelSize / 2);
      ctx.fill();

      ctx.save();
      ctx.translate(wheelSize / 2, wheelSize / 2);
      ctx.rotate(angle + arcRef.current / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#fff";
      ctx.font = `${wheelSize / 25}px Arial`;
      ctx.fillText(names[i], wheelSize / 2 - 20, 5);
      ctx.restore();
    }

    // Pointer
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(wheelSize / 2 - 10, 0);
    ctx.lineTo(wheelSize / 2 + 10, 0);
    ctx.lineTo(wheelSize / 2, 20);
    ctx.fill();
  };

  const spinWheel = () => {
    spinAngleStartRef.current = Math.random() * 10 + 10;
    spinTimeRef.current = 0;
    spinTimeTotalRef.current = Math.random() * 3000 + 4000;
    rotateWheel();
  };

  const rotateWheel = () => {
    spinTimeRef.current += 30;
    if (spinTimeRef.current >= spinTimeTotalRef.current) {
      stopRotateWheel();
      return;
    }
    const spinAngle =
      spinAngleStartRef.current -
      easeOut(spinTimeRef.current, 0, spinAngleStartRef.current, spinTimeTotalRef.current);
    startAngleRef.current += (spinAngle * Math.PI) / 180;
    drawWheel();
    spinTimeoutRef.current = setTimeout(rotateWheel, 30);
  };

  const stopRotateWheel = () => {
    clearTimeout(spinTimeoutRef.current);
    const degrees = (startAngleRef.current * 180) / Math.PI + 90;
    const arcd = (arcRef.current * 180) / Math.PI;
    const index = Math.floor((360 - (degrees % 360)) / arcd) % names.length;
    alert("Winner: " + names[index]);
  };

  const easeOut = (t, b, c, d) => {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  };

  const handleSetPlayers = () => {
    if (!input.trim()) return alert("Enter player names first!");
    setNames(input.split(",").map((n) => n.trim()).filter((n) => n !== ""));
  };

  return (

    <div className="container"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
      }}
    >

      <h1>Random Player Roulette</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          placeholder="Enter names separated by commas"
          size="40"
          onChange={(e) => setInput(e.target.value)}
          style={{ maxWidth: "90vw" }}
        />
        <button
          onClick={handleSetPlayers}
          style={{ marginLeft: "10px", padding: "5px 15px" }}
        >
          Set Players
        </button>
      </div>
      <canvas
        ref={canvasRef}
        width={wheelSize}
        height={wheelSize}
        style={{
          border: "4px solid #333",
          borderRadius: "50%",
          marginBottom: "20px",
          maxWidth: "90vw",
          height: "auto",
        }}
      ></canvas>
      <button
        onClick={spinWheel}
        disabled={names.length === 0}
        style={{ padding: "10px 20px", fontSize: "1rem" }}
      >
        Spin
      </button>
    </div>
  );
}
