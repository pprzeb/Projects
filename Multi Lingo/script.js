import {createList} from './modules/creationmode.js';
import {showlist} from './modules/creationmode.js';
import {clear} from './modules/creationmode.js';
import {langNumber} from './modules/creationmode.js';
import {show} from './modules/repetitionmode.js';
import {check} from './modules/repetitionmode.js';
import {clear2} from './modules/repetitionmode.js';
import {acc} from './modules/repetitionmode.js';




let box2 = document.getElementById('box2');

function creationmode() {
        box2.innerHTML = '';
        box2.insertAdjacentHTML('afterbegin', `
        <input id='myinput' class='myinput' type="text" size="50" placeholder="English sentence"/>
        <input id='translate1input' class='myinput' type="text" size="50" placeholder="French translation"/>
        <input id='translate2input' class='myinput' type="text" size="50" placeholder="Romanian translation"/>
        <input id='translate3input' class='myinput' type="text" size="50" placeholder="Polish translation"/>
        <input id='translate4input' class='myinput' type="text" size="50" placeholder="Italian translation"/>
        <p class="phrase" id='phrase'>&nbsp</p>
        <p class="phraseCenter red" id='phraseVerify'>&nbsp</p>
        <button class='myButton' id="add">Add</button>`);
        document.getElementById('divlist').className = 'item';
        document.getElementById('translate1input').addEventListener("keypress", function(e) {
            if (e.keyCode == 13) {createList(), showlist()}
        });
        document.getElementById('myinput').addEventListener("keypress", clear);
        
        document.getElementById('add').addEventListener("click", createList);
        document.getElementById('add').addEventListener("click", showlist);
        // document.getElementById('creation').className='hide';
        const x = document.getElementById('langnumb').value;
        langNumber(x);
        

        

    };

function repetitionmode() {
        acc.value = 1;
        elements.innerHTML='';
        box2.innerHTML='';
        box2.insertAdjacentHTML('afterbegin', `<p class="phrase" id='phrase2'>&nbsp</p>
        <input id='myinput2' class='myinput' type="text" size="50" placeholder="Ta reponse"/>
        <p class="phrase red" id='answer'></p><p class="phraseCenter" id='phraseVerify2'>&nbsp</p>
        <button class='myButton' id="check">Check</button>
        <button class='myButton' id="next">Next</button>`);
        show();
        document.getElementById('divlist').className = '';
        document.getElementById('myinput2').addEventListener("keypress", function(e) {
            if (e.keyCode == 13) {check()}
        });
        document.getElementById('check').addEventListener("click", check);
        document.getElementById('next').addEventListener("click", show);
        document.getElementById('next').addEventListener("click", clear2);
        


    };
showlist();
creationmode();

document.getElementById('creation').addEventListener("click", creationmode);

document.getElementById('creation').addEventListener("click", showlist);
document.getElementById('repetition').addEventListener("click", repetitionmode);
// document.getElementById('repetition').addEventListener("click", );









