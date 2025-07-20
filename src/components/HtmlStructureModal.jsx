import React from "react";

const HtmlStructureModal = ({ isOpen, onClose, htmlContent }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-cream p-6 rounded-lg w-3/4 max-h-[80vh] overflow-y-auto shadow-xl border border-orange-400">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-orange-600 font-bold text-xl">HTML Structure</h2>
          <button onClick={onClose} className="text-orange-600 font-bold text-lg">&times;</button>
        </div>
        <pre className="bg-white p-4 rounded text-sm overflow-x-auto">
          <code>{htmlContent}</code>
        </pre>
      </div>
    </div>
  );
};

export default HtmlStructureModal;