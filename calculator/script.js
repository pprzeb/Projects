const buttonsDigits = document.querySelectorAll('.digit');
const buttonsCalc = document.querySelectorAll('.calculation');
const input = document.getElementById('input');
const resultbox = document.getElementById('result');
document.addEventListener('keydown', (e) => {if (['.','0','1','2','3','4','5','6','7','8','9'].includes(e.key)) {
    getValue()} else if(['+','-','*','/','%','Enter','Delete'].includes(e.key)) {calculation()}})



let a = '';
let b = '';
let isFirstValue = true;
let resultboxtext = [''];
let operation = '';
let result = '';


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



function calculation() {
    
    let value;
    if (event.type === 'click') {
        value = event.target.value
    } else value = event.key;
        
    if (['+','-','*','/','%'].includes(value)) {
        operation = value;
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
            }
            
            console.log('a' + a, resultboxtext);
            resultboxtext.push(operation);
            resultboxtext.push(b);
            
            
            input.textContent = ''
            b = '';

            // resultboxtext.slice()
        }
    }
  
    if (value === '=' || value ==='Enter') {
        console.log('here', value)
        if (operation === '+') {
            if (b !== '') {
                result = Number(a) + Number(b);
                resultboxtext.push(b);
                resultboxtext.push('=', result);
            } else {result = Number(a) + Number(a);
                    resultboxtext.push(a);
                    resultboxtext.push('=', result);
                }
        } else if (operation === '-') {
            if (b !== '') {
                result = Number(a) - Number(b);
                resultboxtext.push(b);
                resultboxtext.push('=', result);
            } else {result = Number(a) - Number(a);
                    resultboxtext.push(a);
                    resultboxtext.push('=', result);
                    }
        } else if (operation === '*') {
            if (b !== '') {
                result = Number(a) * Number(b);
                resultboxtext.push(b);
                resultboxtext.push('=', result);
            } else {result = Number(a) * Number(a);
                resultboxtext.push(a);
                resultboxtext.push('=', result);}
        } else if (operation === '/') {
            if (b !== '') {
                result = Number(a) / Number(b);
                resultboxtext.push(b);
                resultboxtext.push('=', result);
            } else {result = Number(a) / Number(a);
                resultboxtext.push(a);
                resultboxtext.push('=', result);}
                    
        } else if (operation === '%') {
            let c = b/100;
            result = Number(a) * Number(c);
        }
    };

    if (value === 'ce' || value ==='Delete') {
       return reset()
    }   
  
    updatetextBox();
    
}

function updatetextBox() {
    resultbox.textContent = resultboxtext.join(' ');
    console.log(resultboxtext);
    
    
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
