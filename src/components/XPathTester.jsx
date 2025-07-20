import React, { useState } from "react";

const XPathTester = () => {
  const [xpath, setXpath] = useState("");
  const [result, setResult] = useState("");

  const handleTest = () => {
    try {
      const evaluator = new XPathEvaluator();
      const result = evaluator.evaluate(
        xpath,
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
      );

      const count = result.snapshotLength;

      for (let i = 0; i < count; i++) {
        result.snapshotItem(i).style.outline = "2px solid red";
      }

      setResult(
        count > 0 ? `${count} element(s) matched.` : "No elements matched."
      );
    } catch (error) {
      setResult("Invalid XPath Expression");
    }
  };

  return (
    <div className="bg-orange-100 p-4 rounded-lg mt-4 shadow-md">
      <h3 className="text-orange-600 font-bold mb-2">Test XPath Expression</h3>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={xpath}
          onChange={(e) => setXpath(e.target.value)}
          placeholder="Enter XPath..."
          className="p-2 border border-orange-300 rounded w-full"
        />
        <button
          onClick={handleTest}
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
        >
          Test
        </button>
      </div>
      {result && <p className="mt-2 text-sm text-orange-800">{result}</p>}
    </div>
  );
};

export default XPathTester;
