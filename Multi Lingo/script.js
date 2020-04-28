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
        <input id='word_en' class='myinput' type="text" size="9" placeholder="English"/>
        <input id='word_fr' class='myinput' type="text" size="9" placeholder="French"/>
        <input id='word_it' class='myinput' type="text" size="9" placeholder="Italian"/>
        <input id='word_ro' class='myinput' type="text" size="9" placeholder="Romanian"/>
        <input id='word_pl' class='myinput' type="text" size="9" placeholder="Polish"/>
        <input id='sentence_en' class='myinput' type="text" size="40" placeholder="English"/>
        <input id='sentence_fr' class='myinput' type="text" size="40" placeholder="French"/>
        <input id='sentence_it' class='myinput' type="text" size="40" placeholder="Italian"/>
        <input id='sentence_ro' class='myinput' type="text" size="40" placeholder="Romanian"/>
        <input id='sentence_pl' class='myinput' type="text" size="40" placeholder="Polish"/>
        <p class="phrase" id='phrase'>&nbsp</p>
        <p class="phraseCenter red" id='phraseVerify'>&nbsp</p>
        <button class='myButton' id="add">Add</button>`);
        document.getElementById('divlist').className = 'item';
        document.getElementById('sentence_fr').addEventListener("keypress", function(e) {
            if (e.keyCode == 13) {createList(), showlist()}
        });
        document.getElementById('word_en').addEventListener("keypress", clear);
        
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









