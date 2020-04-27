const buttonsDigits = document.querySelectorAll('.digit');
const buttonsCalc = document.querySelectorAll('.calculation');
const input = document.getElementById('input');
const resultbox = document.getElementById('result');



let a = '';
let b = '';
let ifFirstValue = true;
let resultboxtext = [''];


for (button of buttonsDigits) {
    button.addEventListener('click', getValue);
}

for (button of buttonsCalc) {
    button.addEventListener('click', calculation);
}

function getValue() {
    console.log(event.target.value)
    let value = event.target.value;
    if (Number(value)>=0 && Number(value) <=9) {
        if (ifFirstValue) {
            a = a + value;
            input.value = a;
        } else {
            b = b + value;
            input.value = b;
        }
    } 
}
let operation = '';
let result = '';

function calculation() {
    let value = event.target.value;
    if (value !== '=') {
        operation = value;
         if (ifFirstValue) {
            resultboxtext.push(a);
            resultboxtext.push(operation); 
            ifFirstValue = false;
            input.value = '';   
        } 
    }

    
       
    if (value === '=') {
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
    } else {input.value = result}
        

    // input.value = result;
    // resultboxtext.push(b);
    // resultboxtext.push('=', result);
    
    updatetextBox();
    
}
function updatetextBox() {
    resultbox.textContent = resultboxtext.join(' ');
    console.log(resultboxtext);
    
}

function reset() {
    a = '';
    b = '';
    operation = '';
    firstValue = true;
    input.value = '0'
    resultboxtext = [''];
    update();
}
