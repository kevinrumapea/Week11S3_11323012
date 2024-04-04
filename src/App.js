import React, { useState } from 'react';
import './App.css'; // Mengimpor file CSS terpisah

function App() {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue.trim()!== '') {
      setResultValue(inputValue);
      setInputValue('');
    } else {
      alert('Please enter a value before displaying!');
    }
  };

  return (
    <div className="container">
      <h2>Enter a Value</h2>
      <label htmlFor="inputField">Value:</label>
      <input
        id="inputField"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Display Input Value</button>
      {resultValue && <div className="result"><p>The input value is: {resultValue}</p></div>}
    </div>
  );
}

export default App;
