const input = document.getElementById('input');
const resultbox = document.getElementById('result');

let a = '';
let b = '';
let operation = '';

let firstValue = true;
let resultboxtext = [''];

function update(x) {
    resultbox.textContent = resultboxtext.join(' ');
    // x ? resultboxtext = [' ']: resultboxtext = resultboxtext;
    console.log(resultboxtext);
}

function getValue() {
    let value = event.target.value;
    if (Number(value)>=0 && Number(value) <=9) {
        if (firstValue) {
            a = a + value;
            input.value = a;
        } else {
            b = b + value;
            input.value = b;
        }
    } else {operation = value;
    firstValue = false;
    resultboxtext.push(a);
    resultboxtext.push(operation);
    update();}
}

// function calcType() {
//     calculationType = event.target.value;
//     firstValue ? firstValue=false : firstValue=true;
//     if (calculationType === 'addition') {
//         resultboxtext.push(a);
//         resultboxtext.push('+');
//         update();
//     } else if (calculationType === 'subtraction') {
//         resultboxtext.push(a);
//         resultboxtext.push('-');
//         update();
//     } else if (calculationType === 'multiplication') {
//         resultboxtext.push(a);
//         resultboxtext.push('*');
//         update();
//     } else if (calculationType === 'division') {
//         resultboxtext.push(a);
//         resultboxtext.push('/');
//         update();
//     }
//     console.log(calculationType);
//     console.log(firstValue)
// }

function calculation() {
    let result;
    
    if (operation === '+') {
        result = Number(a) + Number(b);
    } else if (operation === '-') {
        result = Number(a) - Number(b);
    } else if (operation === '*') {
        result = Number(a) * Number(b);
    } else if (operation === '/') {
        result = Number(a) / Number(b);
    } else if (operation === '%') {
        b = b/100;
        result = Number(a) * Number(b);
    }

    input.value = result;
    resultboxtext.push(b);
    resultboxtext.push('=', result);
    update();
    a = result;
    b = '';
    operation = ''
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
