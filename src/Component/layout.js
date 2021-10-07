import React, { useState } from 'react'

export default function Layout() {

    const [calc, setCalc] = useState({
        sign: "",
        number: 0,
        result: 0,
    });
    
    const buttonVales = [
        [' ','C', 'DEL', "/"],
        [7,8,9,"x"],
        [4,5,6, "-"],
        [1,2,3, "+"],
        [0, ".", "="]

    ];

    const math = (a,b, sign) => sign === '+' ? a+b : sign === '-' ? a-b : sign === 'x' ? a*b : a/b;
    function numberClickHander(value) {

if (typeof value === 'number') {

    setCalc({
        ...calc,
        number: calc.number === 0 && value === "0" ? "0" : Number(value) ,
        result: calc.result,
    });
}else  if (value !== "=" && value !== "C")  {
    console.log(calc.sign);
const signVal = calc.sign === "" ? value : calc.sign;
    setCalc({
        ...calc,
        sign: value,
        result :  math(Number(calc.result) , Number(calc.number) , signVal),
    });

}else if (value === "=" ) {

    setCalc({
        ...calc,
       result : math(Number(calc.result) , Number(calc.number) , calc.sign)
        
    });

    console.log(Number(calc.result) , Number(calc.number) , calc.sign);
}
    }

    return (
        <div>
            <div className="outputScreen">{calc.result}</div>
            <div className="buttonBox">
                {buttonVales.flat().map((btn, i) => {
                    return (<button key={i} onClick={() => numberClickHander(btn)}>{btn}</button>);
                })}
            </div>
            
        </div>
    )
}
