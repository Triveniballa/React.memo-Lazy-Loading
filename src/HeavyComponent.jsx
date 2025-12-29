import React from "react";

const HeavyComponent = React.memo(() => {
  console.log("🧱 Heavy Component Rendered");

  return (
    <div className="heavy-box">
      <h2>Heavy UI Section</h2>
      <p>This component loads lazily and does not re-render on counter updates.</p>
    </div>
  );
});

export default HeavyComponent;
