import React, { useState } from "react";
import "./ComponentesHook.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const min = 0;
  const max = 10;

  const handleIncrement = () => {
    if (count < max) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > min) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2>Contador con Límites</h2>
      <h1>{count}</h1>

      <div className="counter-controls">
        <button onClick={handleDecrement} disabled={count === min}>
          -
        </button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement} disabled={count === max}>
          +
        </button>
      </div>

      {/* Mensajes de límites */}
      {count === min && <p style={{ color: "red" }}>¡Has llegado al mínimo!</p>}
      {count === max && <p style={{ color: "red" }}>¡Has llegado al máximo!</p>}
    </div>
  );
}
