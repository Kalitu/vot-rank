// source aide
// https://www.abeautifulsite.net/adding-and-removing-elements-on-the-fly-using-javascript#:~:text=Adding%20Elements%20Dynamically&text=The%20way%20it%20works%20is,specified%20using%20the%20elementId%20argument.

// Recup le nombre de proposition
let lstElementsProposition = [...document.getElementsByTagName('li')];
let nbProposition = lstElementsProposition.length;

function addProposition() {

    nbProposition = nbProposition + 1;

    // recup element parent -> 'ul'
    const parent = document.getElementById("listeProposition");

    // creation de 'li' element
    const li = document.createElement('li');
    li.setAttribute('id', `proposition_${nbProposition}`);
    li.setAttribute('class', 'proposition');
    // creation de 'input' element
    const input = document.createElement('input');
    input.setAttribute('name', `proposition_${nbProposition}`);
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', `Proposition...`);
    // creation de 'button' element
    const btn = document.createElement('button');
    btn.innerHTML = "-";
    btn.setAttribute('id', `btnDelProposition_${nbProposition}`);
    btn.setAttribute('onclick', `delProposition('proposition_${nbProposition}')`);

    li.appendChild(input);
    li.appendChild(btn);

    parent.appendChild(li);
    console.log(nbProposition);
}

function delProposition(propositionId) {
    const proposition = document.getElementById(propositionId);
    proposition.parentNode.removeChild(proposition);

    console.log(nbProposition);
}

const addButton = document.getElementById('btnAddProposition');
addButton.addEventListener("click", addProposition);
