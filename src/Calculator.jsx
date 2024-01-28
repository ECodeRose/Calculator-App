import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleButtonClick = (value) => {
    const audio = new Audio('src/assets/sounds/CalcButton.mp3');
    const audioEQ = new Audio('src/assets/sounds/EqualButton.mp3');
    const audioC = new Audio('src/assets/sounds/CButton.mp3');
    if (value === '=') {
      try {
        const calculatedResult = eval(input.replace(/÷/g, '/').replace(/x/g, '*'));
        setInput(calculatedResult.toString());
        setResult(calculatedResult);
        audioEQ.play()
      } catch (error) {
        setInput('Error');
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult(0);
      audioC.play()
    } else {
      setInput((prevInput) => prevInput + value);
      audio.play()
    }
  };

  const buttons = [
    '7', '8', '9', '÷',
    '4', '5', '6', 'x',
    '1', '2', '3', '-',
    '0', '.', '+', '=',
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
        <button key="C" className="c-button" onClick={() => handleButtonClick('C')}>C</button>
      </div>
      
    </div>
  );
};

export default Calculator;