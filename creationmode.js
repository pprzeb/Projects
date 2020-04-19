function addPhrasetoDB() {
    let phrase = document.getElementById('myinput').value;
    let translate1 = document.getElementById('translate1input').value;
    let translate2 = document.getElementById('translate2input').value;
    let translate3 = document.getElementById('translate3input').value;
    let translate4 = document.getElementById('translate4input').value;

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
        translate1,
        translate2,
        translate3,
        translate4,
        knowIndex: 1,
    };
        
    localStorage.setItem(id,JSON.stringify(phrasedb));
    
};

export function createList() {
    addPhrasetoDB();
    document.getElementById('phrase').textContent = document.getElementById('myinput').value || '\xa0';
    document.getElementById('myinput').value = '';
    document.getElementById('translate1input').value = '';
    document.getElementById('translate2input').value = '';
    document.getElementById('translate3input').value = '';
    document.getElementById('translate4input').value = '';
    document.getElementById('phraseVerify').textContent = "Added to the database!";
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
        
        elements.insertAdjacentHTML('beforeend', 
        `<li class='li' id='${item.id}'><div class='nb'>${i+1}: </div>${item.phrase}
        <button class='deleteButton' id="${item.id}" onclick="document.getElementById('${item.id}').remove(); localStorage.removeItem(${item.id})" >Delete</button><br>
        <span class='transl'>${item.translate1}</span></li>`);
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


export function langNumber(x) {
    if (x==1) {
        document.getElementById('translate2input').className="hide";
        document.getElementById('translate3input').className="hide";
        document.getElementById('translate4input').className="hide";
    } else if (x==2) {
        document.getElementById('translate3input').className="hide";
        document.getElementById('translate4input').className="hide";
    } else if (x==3 ){
        document.getElementById('translate4input').className="hide";
    }     
}










