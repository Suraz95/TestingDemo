import React, { useState } from 'react';

const CalculationPage = () => {
  const [siResult, setSiResult] = useState('');
  const [tempResult, setTempResult] = useState('');
  const [emiResult, setEmiResult] = useState('');

  const handleSICalculate = () => {
    const principal = parseFloat(document.getElementById('si-principal').value);
    const rate = parseFloat(document.getElementById('si-rate').value);
    const time = parseFloat(document.getElementById('si-time').value);
    const isYearly = document.getElementById('si-type-yearly').checked;

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal < 0 || rate < 0 || time < 0) {
      setSiResult("Error: Invalid input.");
      return;
    }

    const t = isYearly ? time : time / 12;
    const interest = (principal * rate * t) / 100;
    setSiResult(`₹${interest.toFixed(2)}`);
  };

  const handleTempConvert = () => {
    const temp = parseFloat(document.getElementById('temp-input').value);
    const toCelsius = document.getElementById('to-celsius').checked;

    if (isNaN(temp)) {
      setTempResult("Error: Enter valid temperature.");
      return;
    }

    const result = toCelsius
      ? ((temp - 32) * 5) / 9
      : (temp * 9) / 5 + 32;
    const unit = toCelsius ? '°C' : '°F';
    setTempResult(`${result.toFixed(2)} ${unit}`);
  };

  const handleEMICalculate = () => {
    const P = parseFloat(document.getElementById('emi-loan').value);
    const R = parseFloat(document.getElementById('emi-rate').value) / 12 / 100;
    const time = parseFloat(document.getElementById('emi-time').value);
    const isYearly = document.getElementById('emi-type-yearly').checked;

    if (isNaN(P) || isNaN(R) || isNaN(time) || P <= 0 || R < 0 || time <= 0) {
      setEmiResult("Error: Invalid loan or interest input.");
      return;
    }

    const n = isYearly ? time * 12 : time;
    const emi = (P * R * Math.pow(1 + R, n)) / (Math.pow(1 + R, n) - 1);
    setEmiResult(`₹${emi.toFixed(2)} / month`);
  };

  return (
    <div className="min-h-screen p-6 bg-[#EFEEEA] text-[#000000]">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#273F4F]">Calculation Scenarios</h1>

      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {/* Simple Interest Calculator */}
        <div className="p-6 rounded-2xl shadow bg-white border-t-8 border-[#FE7743]">
          <h2 className="text-2xl font-semibold text-[#273F4F] mb-4">Simple Interest Calculator</h2>
          <input id="si-principal" type="text" placeholder="Principal" className="mb-2 p-2 w-full border rounded" />
          <input id="si-rate" type="text" placeholder="Rate (%)" className="mb-2 p-2 w-full border rounded" />
          <input id="si-time" type="text" placeholder="Time" className="mb-2 p-2 w-full border rounded" />

          <div className="mb-2">
            <label className="mr-4"><input type="radio" id="si-type-yearly" name="si-type" defaultChecked /> Yearly</label>
            <label><input type="radio" id="si-type-monthly" name="si-type" /> Monthly</label>
          </div>

          <button onClick={handleSICalculate} className="bg-[#FE7743] text-white px-4 py-2 rounded">Calculate</button>
          <p className="mt-2">Result: <span className="font-semibold">{siResult}</span></p>
        </div>

        {/* Temperature Converter */}
        <div className="p-6 rounded-2xl shadow bg-white border-t-8 border-[#FE7743]">
          <h2 className="text-2xl font-semibold text-[#273F4F] mb-4">Temperature Converter</h2>
          <input id="temp-input" type="text" placeholder="Enter temperature" className="mb-2 p-2 w-full border rounded" />

          <div className="mb-2">
            <label className="mr-4"><input type="radio" id="to-celsius" name="temp-type" defaultChecked /> To Celsius</label>
            <label><input type="radio" id="to-fahrenheit" name="temp-type" /> To Fahrenheit</label>
          </div>

          <button onClick={handleTempConvert} className="bg-[#FE7743] text-white px-4 py-2 rounded">Convert</button>
          <p className="mt-2">Result: <span className="font-semibold">{tempResult}</span></p>
        </div>

        {/* EMI Calculator */}
        <div className="p-6 rounded-2xl shadow bg-white border-t-8 border-[#FE7743]">
          <h2 className="text-2xl font-semibold text-[#273F4F] mb-4">EMI Calculator</h2>
          <input id="emi-loan" type="text" placeholder="Loan Amount" className="mb-2 p-2 w-full border rounded" />
          <input id="emi-rate" type="text" placeholder="Annual Interest Rate (%)" className="mb-2 p-2 w-full border rounded" />
          <input id="emi-time" type="text" placeholder="Time Period" className="mb-2 p-2 w-full border rounded" />

          <div className="mb-2">
            <label className="mr-4"><input type="radio" id="emi-type-yearly" name="emi-type" defaultChecked /> Yearly</label>
            <label><input type="radio" id="emi-type-monthly" name="emi-type" /> Monthly</label>
          </div>

          <button onClick={handleEMICalculate} className="bg-[#FE7743] text-white px-4 py-2 rounded">Calculate</button>
          <p className="mt-2">Result: <span className="font-semibold">{emiResult}</span></p>
        </div>
      </div>
    </div>
  );
};

export default CalculationPage;
