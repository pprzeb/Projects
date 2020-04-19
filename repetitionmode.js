import {dataBase} from './creationmode.js';

let acc = 0;

export function show() {
    let sentence = dataBase[acc].phrase;
    document.getElementById('phrase2').textContent = sentence;
    acc++;
}

export function  check() {
    let sentence = document.getElementById('myinput2').value;
    
    if (sentence === dataBase[acc-1].translate) {
        document.getElementById('phraseVerify2').textContent = 'That\'s OK';
        document.getElementById('next').focus();
        
    } else {
        document.getElementById('phraseVerify2').textContent = 'Wrong answer!'
        document.getElementById('myinput2').focus()}
}

export function clear2() {
    document.getElementById('myinput2').value = '';
    document.getElementById('phraseVerify2').textContent = '\xa0';
    document.getElementById('myinput2').focus();
}



