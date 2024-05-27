"use client"
import { useState } from 'react'

export default function Calculator(){
    const [resultado, setResult]  = useState('');
    const [data, setData] = useState ('');


    const Accionar = (value: string) => {
        if (value === '='){
            try {
            const evaluar = eval(data);

            if (evaluar < 0) {
                setResult('ERROR');
              } else if (evaluar > 999999999) {
                setResult('ERROR');
              } else {
                setResult(evaluar.toString());
              }

            } catch (error) {
                setResult('ERROR');
            }
        }else if (value === 'C') {
            setResult('');
            setData('');
        }else if (value === '+/-') {
            // Convertir el número a negativo o positivo
            if (data.startsWith('-')) {
              setData(data.slice(1));
            } else {
              setData('-' + data);
            }
          } else {
            // Evitar agregar más de 9 caracteres
            if (data.length < 9) {
              setData((cond) => cond + value);
            }
          }
        };
  const botones = [
    'C','+/-',' ','/','7', '8', '9', '*','4', '5', '6', '-','1', '2', '3', '+','0', '.', '', '='
  ];

  return (
    <main style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column', alignItems: 'center', padding: '24px' }}>
        <h1 style={{ fontSize: '2.5rem',color:'rgb(255, 255, 255)', fontWeight: 'bold', marginBottom: '2.5rem' }}>Calculadora</h1>
<div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '4rem', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
  <input
    type="text"
    style={{ width: '100%', marginBottom: '0.5rem', fontSize: '2rem', borderBottom: '2px solid #ccc', outline: 'none' }}
    value={data}
    readOnly
  />
  <input
    type="text"
    style={{ width: '100%', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', outline: 'none' }}
    value={resultado}
    readOnly
  />
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
    {botones.map((btn) => (
      <button
        key={btn}
        onClick={() => Accionar(btn)}
        style={{ fontSize: '1.5rem',color:'rgb(255, 255, 255)', backgroundColor: 'rgb(2, 48, 71)', padding: ' 1rem', borderRadius: '8rem', cursor: 'pointer' }}
      > 
        {btn}
      </button>
    ))}
  </div>
</div>

     </main>
  

  );
};

