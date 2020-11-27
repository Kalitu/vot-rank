const el = document.getElementById("items");
// const sortable = Sortable.create(el);
new Sortable(el, {
    animation: 200,
    ghostClass: 'any-background-class'
})

// Pour avoir la liste des options :
// On utilise le 'spread operator' pour transformer le 'HTML collection' en 'array javascript'
let items = [...document.getElementsByTagName("li")];
let itemsValue = items.map((item) => {
    return item.innerHTML;
})

console.log(itemsValue);