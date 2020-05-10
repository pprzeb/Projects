import {displayInputs} from './modules/creationmode.js';
import {showList} from './modules/creationmode.js';

// import {} from './modules/creationmode.js';
// import {} from './modules/repetitionmode.js';
// import {} from './modules/repetitionmode.js';
// import {} from './modules/repetitionmode.js';
// import {} from './modules/repetitionmode.js';

const creationBtn = document.getElementById('creation');
const repetitionBtn = document.getElementById('repetition');

const clearBtn = document.getElementById('clearDB');
const submitbtn = document.getElementById('submitbtn');

const clearDb = () => localStorage.clear();
creationBtn.addEventListener('click', creationmode);
repetitionBtn.addEventListener('click', repetitionmode);

clearBtn.addEventListener('click', clearDb);
submitbtn.addEventListener('click', displayInputs);

function creationmode() {}

function repetitionmode() {}


       









