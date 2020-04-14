let count = 0
const add = document.getElementById('add');
const remove = document.getElementById('remove');
const counter = document.getElementById('counter');

add.addEventListener("click", () => {
    count = count + 1;
    counter.innerHTML=count});
remove.addEventListener("click", () => {
    count = count - 1;
    counter.innerHTML=count});
