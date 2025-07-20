import React, { useState } from "react";

export default function MouseEventsPage() {
  const [hoverText, setHoverText] = useState("Hover over the box");
  const [dblClickText, setDblClickText] = useState("Double click me");
  const [rightClickText, setRightClickText] = useState("Right click here");
  const [dragText, setDragText] = useState("Drop here");

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "dragged-item");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragText("Dropped Successfully!");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: "#EFEEEA" }}>
      <h1 className="text-3xl font-bold text-center mb-10" style={{ color: "#273F4F" }}>
        Mouse Events Practice
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Hover Event */}
        <div
          id="hover-box"
          className="p-8 text-center rounded-2xl shadow-xl border border-gray-300 transition duration-300"
          onMouseEnter={() => setHoverText("You're hovering over me!")}
          onMouseLeave={() => setHoverText("Hover over the box")}
          style={{ backgroundColor: "#FE7743", color: "#000000" }}
        >
          <h2 className="text-xl font-semibold mb-2">Hover Event</h2>
          <p id="hover-result">{hoverText}</p>
        </div>

        {/* Double Click Event */}
        <div
          id="double-click-box"
          className="p-8 text-center rounded-2xl shadow-xl border border-gray-300"
          onDoubleClick={() => setDblClickText("Double Clicked!")}
          style={{ backgroundColor: "#FE7743", color: "#000000" }}
        >
          <h2 className="text-xl font-semibold mb-2">Double Click Event</h2>
          <p id="double-click-result">{dblClickText}</p>
        </div>

        {/* Right Click Event */}
        <div
          id="right-click-box"
          className="p-8 text-center rounded-2xl shadow-xl border border-gray-300"
          onContextMenu={(e) => {
            e.preventDefault();
            setRightClickText("Right Click Detected!");
          }}
          style={{ backgroundColor: "#FE7743", color: "#000000" }}
        >
          <h2 className="text-xl font-semibold mb-2">Right Click Event</h2>
          <p id="right-click-result">{rightClickText}</p>
        </div>

        {/* Drag and Drop Event */}
        <div className="flex flex-col items-center gap-4">
          <div
            id="drag-source"
            draggable
            onDragStart={handleDragStart}
            className="p-4 rounded-xl border border-gray-400 cursor-move"
            style={{ backgroundColor: "#FE7743", color: "#000000" }}
          >
            Drag me
          </div>

          <div
            id="drop-target"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="p-6 w-full text-center rounded-2xl shadow-inner border-2 border-dashed border-gray-600"
            style={{ backgroundColor: "#FE7743", color: "#000000" }}
          >
            <p id="drop-result">{dragText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
