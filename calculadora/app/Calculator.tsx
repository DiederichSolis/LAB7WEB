import { useState } from "react";

export default function Calculator(){
    const [resultado, setResult]  = useState('');
    const [data, setData] = useState ('');


    const Accionar = (value: string) => {
        if (value === '='){
            try {
            const evaluar = eval(data);
            } catch (error) {
                
            }
        }

    }

  const botones = [
    'C','+/-',' ','/','7', '8', '9', '*','4', '5', '6', '-','1', '2', '3', '+','0', '.', '', '='
  ];
}