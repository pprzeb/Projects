function addPhrasetoDB() {
    const word_en = document.getElementById('word_en').value;
    const word_fr = document.getElementById('word_fr').value;
    const word_it = document.getElementById('word_it').value;
    const word_ro = document.getElementById('word_ro').value;
    const word_pl = document.getElementById('word_pl').value;
    const sentence_en = document.getElementById('sentence_en').value;
    const sentence_fr = document.getElementById('sentence_fr').value;
    const sentence_it = document.getElementById('sentence_it').value;
    const sentence_ro = document.getElementById('sentence_ro').value;
    const sentence_pl = document.getElementById('sentence_pl').value;

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
        word_en,
        word_fr,
        word_it,
        word_ro,
        word_pl,
        sentence_en,
        sentence_fr,
        sentence_it,
        sentence_ro,
        sentence_pl,
        knowIndex: 1,
    };
        
    localStorage.setItem(id,JSON.stringify(phrasedb));
    
};

export function createList() {
    addPhrasetoDB();
    document.getElementById('phrase').textContent = document.getElementById('sentence_en').value || '\xa0';
    document.getElementById('sentence_en').value = '';
    document.getElementById('sentence_fr').value = '';
    document.getElementById('sentence_it').value = '';
    document.getElementById('sentence_ro').value = '';
    document.getElementById('sentence_pl').value = '';
    document.getElementById('phraseVerify').textContent = "Added to the database!";
    document.getElementById('sentence_en').focus();
    
    
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
        `<li class='li' id='${item.id}'><div class='nb'>${i+1}: ${item.word_en} || ${item.word_fr} || ${item.word_it} || ${item.word_ro} || ${item.word_pl}  </div>${item.sentence_en}
        <button class='deleteButton' id="${item.id}" onclick="document.getElementById('${item.id}').remove(); localStorage.removeItem(${item.id})" >Delete</button><br>
        <span class='transl'>${item.sentence_fr}</span></li>`);
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
        document.getElementById('sentence_pl').className="hide";
        document.getElementById('sentence_it').className="hide";
        document.getElementById('sentence_ro').className="hide";
    } else if (x==2) {
        document.getElementById('sentence_ro').className="hide";
        document.getElementById('sentence_pl').className="hide";
    } else if (x==3 ){
        document.getElementById('sentence_pl').className="hide";
    }     
}










