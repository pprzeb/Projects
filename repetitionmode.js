let acc = 1;

export function show() {
    if (acc<=localStorage.length) {
        let sentence = JSON.parse(localStorage[acc]).phrase;
        document.getElementById('phrase2').textContent = sentence;
        acc++;
        counter();
    }
}

function counter() {
    document.getElementById('counter').textContent = (acc-1 +' / '+ localStorage.length);
};

export function  check() {
    let sentence = document.getElementById('myinput2').value;
    if (sentence.toLocaleLowerCase() === JSON.parse(localStorage[acc-1]).translate.toLocaleLowerCase()) {
        document.getElementById('phraseVerify2').textContent = 'That\'s OK';
        document.getElementById('next').focus();
    } else {
        document.getElementById('phraseVerify2').textContent = `Wrong answer!`;
        document.getElementById('answer').textContent = `${JSON.parse(localStorage[acc-1]).translate}`;
        document.getElementById('myinput2').focus()};
}

export function clear2() {
    document.getElementById('myinput2').value = '';
    document.getElementById('phraseVerify2').textContent = '\xa0';
    document.getElementById('answer').textContent = '';
    document.getElementById('myinput2').focus();
}



