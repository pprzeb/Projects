const box2 = document.getElementById('box2');
const box4 = document.getElementById('box4');


//this function check which languages are chosen
function activeLang() {
    let langArray = [];
    let checkedLang = document.querySelectorAll('.checkbox')
    for (let x of checkedLang) {
    if (document.getElementById(x.id).checked) langArray.push(document.getElementById(x.id).id);
    }
    return langArray
}
//this function display inputs for chosen languages
export function displayInputs() {
    const langArray = activeLang();
    document.getElementById('box2').style.gridTemplateColumns = `repeat(${langArray.length}, 18%)`
    document.getElementById('box4').style.gridTemplateColumns = `5% repeat(${langArray.length}, 15%) 8%`
    box2.innerHTML = '';
    for (let i=0; i<langArray.length; i++) {
        createInputCard(langArray[i])
    };
    box2.insertAdjacentHTML('beforeend',`<button class='myButton' id="addtoDbBtn">Add</button>`)
    const addtoDbBtn = document.getElementById('addtoDbBtn');
    addtoDbBtn.style.gridArea = '2/2/3/4'
    addtoDbBtn.addEventListener('click', addItemToDb);
    showList();

}
//display inputs for checked languages
function createInputCard(langName) {
    let langIdHTML = langName.substring(0,2);
    box2.insertAdjacentHTML('beforeend',`<div class="card"><h2>${langName}</h2><input class='langInput' type="text" id=${langIdHTML}></input></div>`)
}
//this function display a list of words(only for checked languages) from localStorage
export function showList() {
    const langArray = activeLang();
    box4.innerHTML = '';
    for(let x of langArray) {
        box4.insertAdjacentHTML('beforeend',`<p>${x}</p>`)    
    }
    box4.insertAdjacentHTML('afterbegin',`<p>ID</p>`)
    box4.insertAdjacentHTML('beforeend',`<p></p>`)
    let keys = [];
    for (let i=0; i<localStorage.length; i++) {
        keys.push(localStorage.key(i));
        keys.sort((a, b) => a - b);
    }

    let langId = [];
    let langIdfromHTML = document.querySelectorAll('.langInput')
    for (let x of langIdfromHTML) {
        langId.push(document.getElementById(x.id).id);
    }
    
    let nr = 1;
    for(let x of keys) {
        let item = JSON.parse(localStorage[x]);
        box4.insertAdjacentHTML('beforeend',`<p>${nr}</p>`)
        nr++;
        for (let y of langId) {
            let z;
            item[y]?z = item[y]: z = '';
            box4.insertAdjacentHTML('beforeend',`<p class=${x} contenteditable="false">${z}</p>`)
        }
        box4.insertAdjacentHTML('beforeend', `<button class='deleteBtn' id='${x}'>Delete</button>`)
    }
    document.querySelectorAll('.deleteBtn').forEach(item => item.addEventListener('click', deleteItem))
    
}

// add new word to localStorage and display actual list of words
export function addItemToDb() {
    let keys = [];
    for (let i=0; i<localStorage.length; i++) {
        keys.push(localStorage.key(i));
        keys.sort((a, b) => a - b);
    }
    
    let id = keys[keys.length-1];
    id++
    
    const item = {id}

    let langIdfromHTML = document.querySelectorAll('.langInput')
    for (let x of langIdfromHTML) {
        item[x.id] = document.getElementById(x.id).value
    }
    
    localStorage.setItem(id, JSON.stringify(item))
    
    function clearInput () {
        for (let x of langIdfromHTML) {
        document.getElementById(x.id).value = ''
        }
    }
    clearInput();
    showList();
    langIdfromHTML[0].focus()

}

function deleteItem () {
    localStorage.removeItem(event.target.id);
    showList()
    
}

