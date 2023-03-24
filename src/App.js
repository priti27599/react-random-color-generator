import React, { useState } from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Color Generator</h2>
      <Generator />
    </div>
  );
}

const Generator = () => {
  const [color, setColor] = useState('');

  function colorGenrate() {
    let str = '0123456789abcedef';
    let col = '';
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      col += str[index];
    }
    setColor('#' + col);
  }

  const pageStyle = {
    backgroundColor: `${color}`,
    height: '60px',
    textAlign: 'center',
    padding: '10px',
    color: '#fff',
  };

  return (
    <div>
      <div className="btn1">
        <button onClick={colorGenrate} className="btn">
          genrate
        </button>
      </div>
      <div style={pageStyle}>{color}</div>
    </div>
  );
};
