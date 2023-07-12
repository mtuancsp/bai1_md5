import React, {useState} from 'react';

function CalculatorComponent() {

    const [state, setState] = useState({num1: 0, num2: 0, operator: '+'});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state, [name]: value});
    };

    const calculateResult = () => {
        const {num1, num2, operator} = state;
        let result;

        const expression = num1 + operator + num2;
        result = eval(expression);

        return result;
    };

    return (
        <div>
            <input type="number" name="num1" value={state.num1} onChange={handleInputChange}/>
            <select name="operator" value={state.operator} onChange={handleInputChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="number" name="num2" value={state.num2} onChange={handleInputChange}/><br/>
            <span>{state.num1} {state.operator} {state.num2} = {calculateResult()}</span>
        </div>
    );
}



// const calculateResult = () => {
//     const { num1, num2, operator } = state;
//     let result;
//
//     switch (operator) {
//         case '+':
//             result = parseFloat(num1) + parseFloat(num2);
//             break;
//         case '-':
//             result = parseFloat(num1) - parseFloat(num2);
//             break;
//         case '*':
//             result = parseFloat(num1) * parseFloat(num2);
//             break;
//         case '/':
//             result = parseFloat(num1) / parseFloat(num2);
//             break;
//         default:
//             result = 0;
//     }
//
//     return result;
// };
export default CalculatorComponent;
