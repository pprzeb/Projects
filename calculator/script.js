const buttonsDigits = document.querySelectorAll('.digit');
const buttonsCalc = document.querySelectorAll('.calculation');
const input = document.getElementById('input');
const resultbox = document.getElementById('result');
const totalbox = document.getElementById('total');
document.addEventListener('keydown', (e) => {if (['.','0','1','2','3','4','5','6','7','8','9'].includes(e.key)) {
    showInput()} else if(['+','-','*','/','%','Enter','Delete', 'Backspace', 'sqrt', 'pow'].includes(e.key)) {calculate()}})


for (button of buttonsDigits) {
        button.addEventListener('click', showInput);
    }

for (button of buttonsCalc) {
        button.addEventListener('click', calculate);
    }


let isFirstTouch = true;
let isFirstCalculateTouch = true;
let isFirstEnter = true;
let calculationType = '';
let totalValue = '';

function showInput() {
    if (isFirstTouch) {
        input.innerHTML = '';
        isFirstTouch = false;
    } 
    
    if (event.type === 'click') {
        input.textContent !== '.' ?
        input.innerHTML = input.textContent + event.target.value: input.innerHTML = '0.' + event.target.value;
        
    } else {
        input.textContent !== '.' ?
        input.innerHTML = input.textContent + event.key: input.innerHTML = '0.' + event.key;
        
    }

    isFirstCalculateTouch = true
}


function calculate() {
    isFirstTouch = true;
    let calculationNext;
    if (event.type === 'click') {
        calculationNext = event.target.value
    } else calculationNext = event.key;
    if (calculationNext === 'Delete') {
        reset();
    } else {
        getElements(calculationNext)
    }
    
}

function getElements(calcNext) {
    let inputValue = Number(input.textContent);
 
    if (['+','-','*','/'].includes(calcNext)) {
        if (isFirstCalculateTouch) {
            resultbox.textContent = resultbox.textContent + ' ' + inputValue +' ' + calcNext;
            makeSimpleCalculation(Number(inputValue), calculationType);
            isFirstCalculateTouch = false;   
        } else {
            let last = resultbox.textContent.slice(0, resultbox.textContent.length-1)
            resultbox.textContent = last + calcNext
        }  
        calculationType = calcNext

    } else if (calcNext === '%') {
        if (isFirstCalculateTouch) {
            let percent 
            if (calculationType === '+' || calculationType === '-') {
                percent = totalValue*inputValue/100;               
            } else if (calculationType === '*' || calculationType === '/') {
                percent = 1/100*inputValue
            }
            resultbox.textContent = `${resultbox.textContent} ${inputValue}%(${percent}) =`
            input.innerHTML = percent;
            makeSimpleCalculation(Number(percent), calculationType)
            isFirstCalculateTouch = false;
        }
    } else if (calcNext === 'pow') {
        if (isFirstCalculateTouch) {
            let power = inputValue*inputValue;               
            resultbox.textContent = `${resultbox.textContent} ${power}  `
            input.innerHTML = power;
            makeSimpleCalculation(Number(power), calculationType)
            isFirstCalculateTouch = false;
        }
    } else if (calcNext === 'sqrt') {
        if (isFirstCalculateTouch) {
            let sqrt = Math.sqrt(inputValue);
            
            resultbox.textContent = `${resultbox.textContent} ${sqrt}(${String.fromCharCode(8730)}${inputValue})  `
            input.innerHTML = sqrt;
            makeSimpleCalculation(Number(sqrt), calculationType)
            isFirstCalculateTouch = false;
        }
    } else if (calcNext === 'Enter') {
        if (isFirstEnter) {
            makeSimpleCalculation(Number(inputValue), calculationType)
            resultbox.textContent = resultbox.textContent + ' ' + inputValue +' ' + '=';
            isFirstCalculateTouch = false;
            isFirstEnter = false;
        } else {
            let previous = totalValue;
            isFirstCalculateTouch = false;
            makeSimpleCalculation(Number(inputValue), calculationType);
            resultbox.textContent = `${previous} ${calculationType} ${inputValue} =`;
        }
    }
}


function makeSimpleCalculation(firstValue, x) {
    let secondValue = totalValue;
    
    if (totalValue !== '') {
  
        if (x === '+') {
            totalValue = firstValue + secondValue
        }   
        
        if (x === '-') {
            totalValue = secondValue - firstValue
        } 

        if (x === '*') {
            totalValue = secondValue * firstValue
        } 

        if (x === '/') {
            totalValue = secondValue / firstValue
        } 

        totalbox.textContent = totalValue
    } else {totalValue = firstValue;}
}

function reset() {
    isFirstTouch = true;
    isFirstCalculateTouch = true;
    isFirstEnter = true;
    calculationType = '';
    totalValue = ''
    resultbox.textContent = '';
    totalbox.textContent = '';
    input.innerHTML = 0;
    isStart = false;
}




// let a = '';
// let b = '';

// let isFirstValue = true;
// let resultboxtext = [''];
// let currentOperation = '';
// let result = '';
// let lastPress = ''




// function getValue() {
//     let value;
//     if (event.type === 'click') {
//         value = event.target.value;
//         event.target.blur();
//     } else value = event.key;
//     lastPress = value;
        
//     if (Number(value)>=0 && Number(value) <=9 || value === '.') {
//         if (isFirstValue) {
//             if (value !== '.' && value !== '%') {
//                 if (a === '0') {
//                     a = value;
//                     input.textContent = a
//                 } else {
//                     a = a + value;
//                     input.textContent = a;
//                 }
                
//             } else {
//                 a ? a = a + value: a = '0' + value;
//                 input.textContent = a;
//             }
//         } else {
//             if (value !== '.' && value !== '%') {
//                 if (b === '0') {
//                     b = value;
//                     input.textContent = b
//                 } else {
//                     b = b + value;
//                     input.textContent = b;
//                 } 
//             } else {
//                 b ? b = b + value : b = '0' + value;
//                 input.textContent = b;
//             }
//         }
//     } else if (value === 'plusminus') {
//         if (isFirstValue) {
//             if (Number(a) > 0) {
//                 a = '-' + a;
//                 input.textContent = a;
//             } else {
//                 a = a.substring(1);
//                 input.textContent = a;
//             }
//         } else {
//             if (Number(b) > 0) {
//                 b = '-' + b;
//                 input.textContent = b;
//             } else {
//                 b = b.substring(1);
//                 input.textContent = b;
//             }
//         }
//     } else if (value === '%') {
//         if (currentOperation === '+' || currentOperation === '-') {
//             b = Number(a) * b/100;
//             input.textContent = b;
//         } else if (currentOperation === '*' || currentOperation === '/') {
//             b = b/100;
//             input.textContent = b;
//         } else {
//             a = 0;
//             input.textContent = 0}
//     }
    
// }


// function calculate() {
//     if (a !== '' && b !== '' && currentOperation !== '') {
//         if (currentOperation === '+') {
//             result = Number(a) + Number(b);
//         } else if (currentOperation === '-') {
//             result = Number(a) - Number(b);
//         } else if (currentOperation === '*') {
//             result = Number(a) * Number(b);
//         } else if (currentOperation === '/') {
//             result = Number(a) / Number(b);
//         } 
//     } else if (a !== '' && b === '') {
//         if (event.target.value === 'sqrt') {
//             result = Math.sqrt(a);
//             console.log(result)
//         } else if (event.target.value = 'pow') {
//             result = Math.pow(a, 2)
//             console.log(result)
//         }
    
//     }
// }


// function calculation() {
//     calculate();
    
//     let value;
//     if (event.type === 'click') {
//         value = event.target.value;
//         event.target.blur();
//     } else value = event.key;
    

//     if (['+','-','*','/'].includes(value)) {
//         currentOperation = value; 
//         if (['+','-','*','/'].includes(lastPress)) {
//             resultboxtext.pop();
//             resultboxtext.push(currentOperation)
//             updatetextBox();
//             return
//         } 

//         if (isFirstValue) {
//             a?a: a=0;
//             resultboxtext.push(a);
//             resultboxtext.push(currentOperation); 
//             isFirstValue = false;
//             input.textContent = '';   
//         } else {
//             a = result;
//             if (resultboxtext[resultboxtext.length-2] === '=') {
//                 resultboxtext.pop();
//                 resultboxtext.pop();
//                 resultboxtext.push(currentOperation);
//             } else {
//                 resultboxtext.push(b);
//                 resultboxtext.push(currentOperation);
//             }
                   
//             input.textContent = ''
//             b = '';
//         }
//     }
  
//     if (value === '=' || value ==='Enter') {
//         if (result !=='' && lastPress !== 'Enter' && lastPress !== '=') {
//             if (['+','-','*','/','Delete', 'Backspace'].includes(lastPress)) {
//                 resultboxtext.pop();
//                 resultboxtext.push('=', result);
//             } else {
//                 resultboxtext.push(b);
//                 resultboxtext.push('=', result);
//                 input.textContent = ''
//             }
            
//         } 
        
//     }

//     if (value === 'c' || value ==='Delete') {
//        return reset()
//     }   
    
//     if (value === 'ce' || value ==='Backspace') {
//         return undo()
//     }

//     updatetextBox();
//     lastPress = value;
    
// }

// function updatetextBox() {
//     resultbox.textContent = resultboxtext.join(' ');
        
// }

// function undo() {
//     if (isFirstValue) {
//         a = a.substring(0, a.length-1);
//         input.textContent = a
//     } else {
//         b = b.substring(0, b.length-1);
//         input.textContent = b
//     }
    
// }

// function reset() {
//     a = '';
//     b = '';
//     isFirstValue = true;
//     resultboxtext = [''];
//     currentOperation = '';
//     result = '';
//     input.textContent = ''
//     event.target.blur()
//     updatetextBox();
// }
