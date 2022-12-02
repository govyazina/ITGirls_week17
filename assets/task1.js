const input = document.querySelector("#full-name");
const names = document.querySelector('.names');
const firstName = document.querySelector('.first_name');
const lastName = document.querySelector('.last_name');
const parentsName = document.querySelector('.parents_name');

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        getFullName();
    }
})
function getFullName() {
    let name = input.value;
    let arrName = name.split(' ');
    const namesFiltred = arrName.filter(n => n);
    for (let i = 0; i < namesFiltred.length; i++) {
        namesFiltred[i] = namesFiltred[i].charAt().toUpperCase() + namesFiltred[i].slice(1).toLowerCase();
    }
    showNames(namesFiltred);
}

function showNames (names) {
    firstName.innerHTML = names[1];
    parentsName.innerHTML = names[2];
    lastName.innerHTML = names[0];
}