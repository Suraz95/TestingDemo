import { useState } from 'react';

export default function AlertsTesting() {
  const [alertResult, setAlertResult] = useState('');
  const [promptInput, setPromptInput] = useState('');

  return (
    <div className="min-h-screen p-10 bg-[#EFEEEA] text-[#000000]">
      <h1 className="text-3xl font-bold text-[#273F4F] mb-6">JavaScript Alerts Testing</h1>

      {/* Simple Alert */}
      <div className="mb-6 bg-white shadow-md p-6 rounded-2xl">
        <h2 className="text-xl font-semibold mb-2 text-[#273F4F]">Simple Alert</h2>
        <button
          id="simple-alert-btn"
          onClick={() => {
            alert('This is a simple alert!');
            setAlertResult('Simple alert shown');
          }}
          className="bg-[#FE7743] text-white px-4 py-2 rounded-md"
        >
          Show Simple Alert
        </button>
        <p id="simple-alert-result" className="mt-2">{alertResult}</p>
      </div>

      {/* Confirmation Alert */}
      <div className="mb-6 bg-white shadow-md p-6 rounded-2xl">
        <h2 className="text-xl font-semibold mb-2 text-[#273F4F]">Confirmation Alert</h2>
        <button
          id="confirm-alert-btn"
          onClick={() => {
            const result = confirm('Do you want to continue?');
            setAlertResult(result ? 'User clicked OK' : 'User clicked Cancel');
          }}
          className="bg-[#FE7743] text-white px-4 py-2 rounded-md"
        >
          Show Confirmation Alert
        </button>
        <p id="confirm-alert-result" className="mt-2">{alertResult}</p>
      </div>

      {/* Prompt Alert */}
      <div className="mb-6 bg-white shadow-md p-6 rounded-2xl">
        <h2 className="text-xl font-semibold mb-2 text-[#273F4F]">Prompt Alert</h2>
        <button
          id="prompt-alert-btn"
          onClick={() => {
            const result = prompt('Please enter your name:');
            setPromptInput(result || 'No input provided');
          }}
          className="bg-[#FE7743] text-white px-4 py-2 rounded-md"
        >
          Show Prompt Alert
        </button>
        <p id="prompt-alert-result" className="mt-2">User Input: {promptInput}</p>
      </div>
    </div>
  );
}
