import React, { useState, Suspense } from "react";
import "./App.css";

const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>🚀 React.memo & Lazy Loading Demo</h1>

      <div className="counter-box">
        <p>Counter: <span>{count}</span></p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <Suspense fallback={<div className="loader">Loading Heavy Component...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
