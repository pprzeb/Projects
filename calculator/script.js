const buttonsDigits = document.querySelectorAll('.digit');
const buttonsCalc = document.querySelectorAll('.calculation');
const input = document.getElementById('input');
const resultbox = document.getElementById('result');
document.addEventListener('keydown', (e) => {if (['.','0','1','2','3','4','5','6','7','8','9'].includes(e.key)) {
    getValue()} else if(['+','-','*','/','%','Enter','Delete', 'Backspace'].includes(e.key)) {calculation()}})



let a = '';
let b = '';
let isFirstValue = true;
let resultboxtext = [''];
let operation = '';
let result = '';
let lastPress = ''


for (button of buttonsDigits) {
    button.addEventListener('click', getValue);
}

for (button of buttonsCalc) {
    button.addEventListener('click', calculation);
}

function getValue() {
    let value;
    if (event.type === 'click') {
        value = event.target.value;
        event.target.blur();
    } else value = event.key;
    lastPress = value;
        
    if (Number(value)>=0 && Number(value) <=9 || value === '.') {
        if (isFirstValue) {
            if (value !== '.') {
                a = a + value;
                input.textContent = a;
            } else {
                a ? a = a + value: a = '0' + value;
                input.textContent = a;
            }
        } else {
            if (value !== '.') {
                b = b + value;
                input.textContent = b;
            } else {
                b ? b = b + value : b = '0' + value;
                input.textContent = b;
            }
        }
    } else if (value === 'plusminus') {
        if (isFirstValue) {
            if (Number(a) > 0) {
                a = '-' + a;
                input.textContent = a;
            } else {
                a = a.substring(1);
                input.textContent = a;
            }
        } else {
            if (Number(b) > 0) {
                b = '-' + b;
                input.textContent = b;
            } else {
                b = b.substring(1);
                input.textContent = b;
            }
        }
    }
}
function calculate() {
    if (a !== '' && b !== '' && operation !== '') {
        if (operation === '+') {
            result = Number(a) + Number(b);
        } else if (operation === '-') {
            result = Number(a) - Number(b);
        } else if (operation === '*') {
            result = Number(a) * Number(b);
        } else if (operation === '/') {
            result = Number(a) / Number(b);
        } else if (operation === '%') {
            let c = b/100;
            result = Number(a) * Number(c);
        }
    }
}


function calculation() {
    calculate();
    
    let value;
    if (event.type === 'click') {
        value = event.target.value;
        event.target.blur();
    } else value = event.key;
    

    if (['+','-','*','/','%'].includes(value)) {
        operation = value; 
        if (['+','-','*','/','%'].includes(lastPress)) {
            resultboxtext.pop();
            resultboxtext.push(operation)
            updatetextBox();
            return
        } 

        if (isFirstValue) {
            resultboxtext.push(a);
            resultboxtext.push(operation); 
            isFirstValue = false;
            input.textContent = '';   
        } else {
            a = result;
            if (resultboxtext[resultboxtext.length-2] === '=') {
                resultboxtext.pop();
                resultboxtext.pop();
                resultboxtext.push(operation);
            } else {
                resultboxtext.push(b);
                resultboxtext.push(operation);
            }
                   
            input.textContent = ''
            b = '';
        }
    }
  
    if (value === '=' || value ==='Enter') {
        if (result !=='' && lastPress !== 'Enter' && lastPress !== '=') {
            if (['+','-','*','/','%','Delete', 'Backspace'].includes(lastPress)) {
                resultboxtext.pop();
                resultboxtext.push('=', result);
            } else {
                resultboxtext.push(b);
                resultboxtext.push('=', result);
                input.textContent = ''
            }
            
        } 
        
    }

    if (value === 'c' || value ==='Delete') {
       return reset()
    }   
    
    if (value === 'ce' || value ==='Backspace') {
        return undo()
    }

    updatetextBox();
    lastPress = value;
    
}

function updatetextBox() {
    resultbox.textContent = resultboxtext.join(' ');
        
}

function undo() {
    if (isFirstValue) {
        a = a.substring(0, a.length-1);
        input.textContent = a
    } else {
        b = b.substring(0, b.length-1);
        input.textContent = b
    }
    
}

function reset() {
    a = '';
    b = '';
    isFirstValue = true;
    resultboxtext = [''];
    operation = '';
    result = '';
    input.textContent = ''
    event.target.blur()
    updatetextBox();
}
