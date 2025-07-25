import React, { useState } from 'react';

const CalculationPage = () => {
  const [siResult, setSiResult] = useState('');
  const [tempResult, setTempResult] = useState('');
  const [emiResult, setEmiResult] = useState('');

 const handleSICalculate = () => {
  const principal = parseFloat(document.getElementById('si-principal').value);
  const rate = parseFloat(document.getElementById('si-rate').value);
  const time = parseFloat(document.getElementById('si-time').value);
  const siType = document.querySelector('input[name="si-type"]:checked')?.id;

  if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal < 0 || rate < 0 || time < 0) {
    setSiResult("Error: Invalid input.");
    return;
  }

  const isYearly = siType === "Yearly";
  const t = isYearly ? time : time / 12;
  const interest = (principal * rate * t) / 100;
  setSiResult(`${interest.toFixed(1)}`);
};

const handleTempConvert = () => {
  const temp = parseFloat(document.getElementById('temp-input').value);
  const tempType = document.querySelector('input[name="temp-type"]:checked')?.id;

  if (isNaN(temp)) {
    setTempResult("Error: Enter valid temperature.");
    return;
  }

  const toCelsius = tempType === "to-celsius";
  const result = toCelsius
    ? ((temp - 32) * 5) / 9
    : (temp * 9) / 5 + 32;
  const unit = toCelsius ? '°C' : '°F';
  setTempResult(`${result.toFixed(1)} ${unit}`);
};

const handleEMICalculate = () => {
  const P = parseFloat(document.getElementById('emi-loan').value);
  const R = parseFloat(document.getElementById('emi-rate').value) / 12 / 100;
  const time = parseFloat(document.getElementById('emi-time').value);
  const emiType = document.querySelector('input[name="emi-type"]:checked')?.id;

  if (isNaN(P) || isNaN(R) || isNaN(time) || P <= 0 || R < 0 || time <= 0) {
    setEmiResult("Error: Invalid loan or interest input.");
    return;
  }

  const isYearly = emiType === "emi-Yearly";
  const n = isYearly ? time * 12 : time;
  const emi = (P * R * Math.pow(1 + R, n)) / (Math.pow(1 + R, n) - 1);
  setEmiResult(`${emi.toFixed(1)} / month`);
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
            <label className="mr-4"><input type="radio" id="Yearly" name="si-type"  /> Yearly</label>
            <label><input type="radio" id="Monthly" name="si-type" /> Monthly</label>
          </div>

          <button onClick={handleSICalculate} id="si-cal" className="bg-[#FE7743] text-white px-4 py-2 rounded">Calculate</button>
          <p className="mt-2">Result: <span id="si-result" className="font-semibold">{siResult}</span></p>
        </div>

        {/* Temperature Converter */}
        <div className="p-6 rounded-2xl shadow bg-white border-t-8 border-[#FE7743]">
          <h2 className="text-2xl font-semibold text-[#273F4F] mb-4">Temperature Converter</h2>
          <input id="temp-input" type="text" placeholder="Enter temperature" className="mb-2 p-2 w-full border rounded" />

          <div className="mb-2">
            <label className="mr-4"><input type="radio" id="to-celsius" name="temp-type"/> To Celsius</label>
            <label><input type="radio" id="to-fahrenheit" name="temp-type" /> To Fahrenheit</label>
          </div>

          <button onClick={handleTempConvert} id="to-cal" className="bg-[#FE7743] text-white px-4 py-2 rounded">Convert</button>
          <p className="mt-2">Result: <span id='to-result' className="font-semibold">{tempResult}</span></p>
        </div>

        {/* EMI Calculator */}
        <div className="p-6 rounded-2xl shadow bg-white border-t-8 border-[#FE7743]">
          <h2 className="text-2xl font-semibold text-[#273F4F] mb-4">EMI Calculator</h2>
          <input id="emi-loan" type="text" placeholder="Loan Amount" className="mb-2 p-2 w-full border rounded" />
          <input id="emi-rate" type="text" placeholder="Annual Interest Rate (%)" className="mb-2 p-2 w-full border rounded" />
          <input id="emi-time" type="text" placeholder="Time Period" className="mb-2 p-2 w-full border rounded" />

          <div className="mb-2">
            <label className="mr-4"><input type="radio" id="emi-Yearly" name="emi-type"  /> Yearly</label>
            <label><input type="radio" id="emi-Monthly" name="emi-type" /> Monthly</label>
          </div>

          <button onClick={handleEMICalculate} id='emi-cal' className="bg-[#FE7743] text-white px-4 py-2 rounded">Calculate</button>
          <p className="mt-2">Result: <span sid='emi-result' className="font-semibold">{emiResult}</span></p>
        </div>
      </div>
    </div>
  );
};

export default CalculationPage;
