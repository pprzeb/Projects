export let dataBase = [{id: 1, phrase: "fads", translate: "fa", knowIndex: 1}];

export function addPhrasetoDB() {
    let phrase = document.getElementById('myinput').value;
    let translate = document.getElementById('translateinput').value;
    const phrasedb = {
        id: dataBase.length+1,
        phrase,
        translate,
        knowIndex: 1,
    };
    dataBase.push(phrasedb);
    
};
export function createList() {
    
    addPhrasetoDB();
    document.getElementById('phrase').textContent = document.getElementById('myinput').value || '\xa0';
    document.getElementById('myinput').value = '';
    document.getElementById('translateinput').value = '';
    document.getElementById('phraseVerify').textContent = "Added to the database!  "
    document.getElementById('myinput').focus();
    
    console.log(dataBase);
}

export function showlist() {
    document.getElementById('elements').remove();
    let list = document.createElement("ul");
    list.id='elements';
    document.getElementById('divlist').append(list);
    
    let elements = document.getElementById('elements');
    for(let i=0; i<dataBase.length; i++) {
        elements.insertAdjacentHTML('beforeend', 
        `<li id='${dataBase[i].id}'>${dataBase[i].id}: ${dataBase[i].phrase} <br>${dataBase[i].translate}</li>`)
    }
   
}

export function clear() {
    phrase.textContent = '\xa0';
    phraseVerify.textContent = '\xa0';
}; 







