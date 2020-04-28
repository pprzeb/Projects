export let acc = {value: 1};

let keys = []; 
export function show() {
    keys = [];
    for(let i=0; i<localStorage.length; i++) {
        keys.push(localStorage.key(i));
        keys.sort((a,b)=> a-b);
        };
    
    if (acc.value<=localStorage.length) {
        let sentence = JSON.parse(localStorage[keys[acc.value-1]]).sentence_en;
        document.getElementById('phrase2').textContent = sentence;
        acc.value++;
        console.log(acc);
        console.log(keys);
        counter();
    }
}

function counter() {
    document.getElementById('counter').textContent = (acc.value-1 +' / '+ localStorage.length);
};

export function  check() {
    let sentence = document.getElementById('myinput2').value;
    if (sentence.toLocaleLowerCase() === JSON.parse(localStorage[keys[acc.value-2]]).sentence_fr.toLocaleLowerCase()) {
        document.getElementById('phraseVerify2').textContent = 'That\'s OK';
        document.getElementById('next').focus();
    } else {
        document.getElementById('phraseVerify2').textContent = `Wrong answer!`;
        document.getElementById('answer').textContent = `${JSON.parse(localStorage[keys[acc.value-2]]).sentence_fr}`;
        document.getElementById('myinput2').focus()};
}

export function clear2() {
    document.getElementById('myinput2').value = '';
    document.getElementById('phraseVerify2').textContent = '\xa0';
    document.getElementById('answer').textContent = '';
    document.getElementById('myinput2').focus();
}



