import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult(0);
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C',
  ];

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="result">Result: {result}</div>
    </div>
  );
};

export default Calculator;
