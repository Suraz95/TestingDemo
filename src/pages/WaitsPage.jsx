import React, { useState, useEffect } from 'react';

export default function WaitsPage() {
  const [implicitVisible, setImplicitVisible] = useState(false);
  const [explicitLoading, setExplicitLoading] = useState(false);
  const [explicitDone, setExplicitDone] = useState(false);
  const [fluentCounter, setFluentCounter] = useState(5);
  const [fluentDone, setFluentDone] = useState(false);

  // Implicit wait simulation
  const handleImplicitClick = () => {
    setImplicitVisible(false);
    setTimeout(() => setImplicitVisible(true), 3000);
  };

  // Explicit wait simulation
  const handleExplicitClick = () => {
    setExplicitLoading(true);
    setExplicitDone(false);
    setTimeout(() => {
      setExplicitLoading(false);
      setExplicitDone(true);
    }, 4000);
  };

  // Fluent wait simulation
  useEffect(() => {
    let timer;
    if (fluentCounter > 0) {
      timer = setTimeout(() => setFluentCounter(fluentCounter - 1), 1000);
    } else if (fluentCounter === 0 && !fluentDone) {
      setFluentDone(true);
    }
    return () => clearTimeout(timer);
  }, [fluentCounter, fluentDone]);

  const resetFluent = () => {
    setFluentCounter(5);
    setFluentDone(false);
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: '#EFEEEA', color: '#000000' }}>
      <h1 className="text-3xl font-bold mb-8" style={{ color: '#273F4F' }}>Waits Testing</h1>

      {/* Implicit Wait */}
      <div className="bg-white shadow p-6 rounded-2xl mb-8">
        <h2 className="text-xl font-semibold mb-2" style={{ color: '#273F4F' }}>Implicit Wait</h2>
        <button
          id="implicit-wait-btn"
          className="bg-[#FE7743] text-white px-4 py-2 rounded"
          onClick={handleImplicitClick}
        >
          Show Message (After 3s)
        </button>
        {implicitVisible && (
          <p id="implicit-message" className="mt-4">✅ This message appeared after 3 seconds!</p>
        )}
      </div>

      {/* Explicit Wait */}
      <div className="bg-white shadow p-6 rounded-2xl mb-8">
        <h2 className="text-xl font-semibold mb-2" style={{ color: '#273F4F' }}>Explicit Wait</h2>
        <button
          id="explicit-wait-btn"
          className="bg-[#FE7743] text-white px-4 py-2 rounded"
          onClick={handleExplicitClick}
        >
          Trigger Loader
        </button>
        {explicitLoading && (
          <div id="explicit-loader" className="mt-4">⏳ Loading...</div>
        )}
        {explicitDone && (
          <div id="explicit-result" className="mt-4">✅ Loaded Successfully!</div>
        )}
      </div>

      {/* Fluent Wait */}
      <div className="bg-white shadow p-6 rounded-2xl mb-8">
        <h2 className="text-xl font-semibold mb-2" style={{ color: '#273F4F' }}>Fluent Wait</h2>
        {!fluentDone ? (
          <p id="fluent-countdown">⏳ Waiting... {fluentCounter}s</p>
        ) : (
          <p id="fluent-done">✅ Fluent Wait Complete!</p>
        )}
        <button
          id="fluent-wait-btn"
          className="mt-4 bg-[#FE7743] text-white px-4 py-2 rounded"
          onClick={resetFluent}
        >
          Restart Fluent Wait
        </button>
      </div>
    </div>
  );
}
