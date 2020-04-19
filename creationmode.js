function addPhrasetoDB() {
    let phrase = document.getElementById('myinput').value;
    let translate = document.getElementById('translateinput').value;
    
    let keys = []; 
    for(let i=0; i<localStorage.length; i++) {
        keys.push(localStorage.key(i));
        keys.sort((a,b)=> a-b);
        }
        
    let id = 1;
    for(let x of keys) {
        if (x == id) {
            id++
        }
    }
    
    const phrasedb = {
        id,
        phrase,
        translate,
        knowIndex: 1,
    };

    
    localStorage.setItem(id,JSON.stringify(phrasedb));
    
};

export function createList() {
    addPhrasetoDB();
    document.getElementById('phrase').textContent = document.getElementById('myinput').value || '\xa0';
    document.getElementById('myinput').value = '';
    document.getElementById('translateinput').value = '';
    document.getElementById('phraseVerify').textContent = "Added to the database!  "
    document.getElementById('myinput').focus();
    
    
}

export function showlist() {
    document.getElementById('elements').remove();
    let list = document.createElement("ul");
    list.id='elements';
    document.getElementById('divlist').append(list);
    
    let elements = document.getElementById('elements');
    
    let keys = []; 
    
    for(let k=0; k<localStorage.length; k++) {
        keys.push(localStorage.key(k));
        keys.sort((a,b)=> a-b);
        };

    for(let i=0; i<localStorage.length; i++) {
        if (localStorage.length>0) {
        let x = keys[i];
        let item = JSON.parse(localStorage[x]);
        console.log(item);
        elements.insertAdjacentHTML('beforeend', 
        `<li class='li' id='${item.id}'><div class='nb'>${i+1}: </div>${item.phrase}
        <button class='deleteButton' id="${item.id}" onclick="document.getElementById('${item.id}').remove(); localStorage.removeItem(${item.id})" >Delete</button><br>
        <span class='transl'>${item.translate}</span></li>`);
        }
    }
    counter();
};

function counter() {
    document.getElementById('counter').textContent = localStorage.length;
};

export function clear() {
    phrase.textContent = '\xa0';
    phraseVerify.textContent = '\xa0';
}; 










