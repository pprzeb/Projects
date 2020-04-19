import {createList} from './creationmode.js';
import {showlist} from './creationmode.js';
import {clear} from './creationmode.js';
import {show} from './repetitionmode.js';
import {check} from './repetitionmode.js';
import {clear2} from './repetitionmode.js';



let box2 = document.getElementById('box2');

function creationmode() {
        box2.innerHTML = '';
        box2.insertAdjacentHTML('afterbegin', `<p class="phrase" id='phrase'>&nbsp</p>
        <input id='myinput' class='myinput' type="text" size="50" placeholder="English sentence"/>
        <input id='translateinput' class='myinput' type="text" size="50" placeholder="French translate"/>
        <p class="phrase" id='phraseVerify'>&nbsp</p>
        <button class='myButton' id="add">Add</button>`);
        document.getElementById('translateinput').addEventListener("keypress", function(e) {
            if (e.keyCode == 13) {createList(), showlist()}
        });
        document.getElementById('myinput').addEventListener("keypress", clear);
        
        document.getElementById('add').addEventListener("click", createList);
        document.getElementById('add').addEventListener("click", showlist);

    };

function repetitionmode() {
        box2.innerHTML='';
        box2.insertAdjacentHTML('afterbegin', `<p class="phrase" id='phrase2'>&nbsp</p>
        <input id='myinput2' class='myinput' type="text" size="50" placeholder="Ta reponse"/>
        <p class="phrase" id='phraseVerify2'>&nbsp</p>
        <button class='myButton' id="check">Check</button>
        <button class='myButton' id="next">Next</button>`);
        show();
        document.getElementById('myinput2').addEventListener("keypress", function(e) {
            if (e.keyCode == 13) {check()}
        });
        document.getElementById('check').addEventListener("click", check);
        document.getElementById('next').addEventListener("click", show);
        document.getElementById('next').addEventListener("click", clear2);

    };
creationmode();
document.getElementById('creation').addEventListener("click", creationmode);
document.getElementById('repetition').addEventListener("click", repetitionmode);













