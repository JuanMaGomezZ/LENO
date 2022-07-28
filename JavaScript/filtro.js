let simplesContainer = document.querySelector("#simples");
let doblesContainer = document.querySelector("#dobles");
let triplesContainer = document.querySelector("#triples");
let veggiesContainer = document.querySelector("#veggies");
let filterSimplesBtn = document.querySelector("#filter-simples");
let filterDoblesBtn = document.querySelector("#filter-dobles");
let filterTriplesBtn = document.querySelector("#filter-triples");
let filterVeggiesBtn = document.querySelector("#filter-veggies");
let filterShowAll = document.querySelector("#filter-all");
let titleSimples = document.querySelector("#paty-simples");
let titleDobles = document.querySelector("#paty-dobles");
let titleTriples = document.querySelector("#paty-triples");
let titleVeggies = document.querySelector("#paty-veggies");



filterShowAll.style.color = "#ef8e3d";
filterShowAll.style.borderBottom = "12px double #960f1a";

filterShowAll.onclick = () => {
    simplesContainer.classList.remove("hidden");
    doblesContainer.classList.remove("hidden");
    triplesContainer.classList.remove("hidden");
    veggiesContainer.classList.remove("hidden");

    titleSimples.classList.remove("hidden");
    titleDobles.classList.remove("hidden");
    titleTriples.classList.remove("hidden");
    titleVeggies.classList.remove("hidden");

    filterShowAll.style.color = "#ef8e3d";
    filterShowAll.style.borderBottom = "12px double #960f1a";
    filterSimplesBtn.removeAttribute('style');
    filterDoblesBtn.removeAttribute('style');
    filterTriplesBtn.removeAttribute('style');
    filterVeggiesBtn.removeAttribute('style');  
};

filterSimplesBtn.onclick = () => {
    doblesContainer.classList.add("hidden");
    triplesContainer.classList.add("hidden");
    veggiesContainer.classList.add("hidden");
    simplesContainer.classList.remove("hidden");
   

    titleDobles.classList.add("hidden");
    titleTriples.classList.add("hidden");
    titleVeggies.classList.add("hidden");
    titleSimples.classList.remove("hidden");
    titleSimples.classList.add("under-section");

    filterSimplesBtn.style.color = "#ef8e3d";
    filterSimplesBtn.style.borderBottom = "12px double #960f1a";
    filterDoblesBtn.removeAttribute('style');
    filterTriplesBtn.removeAttribute('style');
    filterShowAll.removeAttribute('style');
    filterVeggiesBtn.removeAttribute('style');
};

filterDoblesBtn.onclick = () => {
    simplesContainer.classList.add("hidden");
    triplesContainer.classList.add("hidden");
    veggiesContainer.classList.add("hidden");
    doblesContainer.classList.remove("hidden");

    titleSimples.classList.add("hidden");
    titleDobles.classList.remove("hidden");
    titleTriples.classList.add("hidden");
    titleVeggies.classList.add("hidden");

    filterDoblesBtn.style.color = "#ef8e3d";
    filterDoblesBtn.style.borderBottom = "12px double #960f1a";
    filterSimplesBtn.removeAttribute('style');
    filterTriplesBtn.removeAttribute('style');
    filterShowAll.removeAttribute('style');
    filterVeggiesBtn.removeAttribute('style');
};

filterTriplesBtn.onclick = () => {
    doblesContainer.classList.add("hidden");
    simplesContainer.classList.add("hidden");
    veggiesContainer.classList.add("hidden");
    triplesContainer.classList.remove("hidden");

    titleSimples.classList.add("hidden");
    titleDobles.classList.add("hidden");
    titleTriples.classList.remove("hidden");
    titleVeggies.classList.add("hidden");

    filterTriplesBtn.style.color = "#ef8e3d";
    filterTriplesBtn.style.borderBottom = "12px double #960f1a";
    filterDoblesBtn.removeAttribute('style');
    filterSimplesBtn.removeAttribute('style');
    filterShowAll.removeAttribute('style');
    filterVeggiesBtn.removeAttribute('style');
};

filterVeggiesBtn.onclick = () => {
    doblesContainer.classList.add("hidden");
    simplesContainer.classList.add("hidden");
    triplesContainer.classList.add("hidden");
    veggiesContainer.classList.remove("hidden");

    titleSimples.classList.add("hidden");
    titleDobles.classList.add("hidden");
    titleTriples.classList.add("hidden");
    titleVeggies.classList.remove("hidden");

    filterVeggiesBtn.style.color = "#ef8e3d";
    filterVeggiesBtn.style.borderBottom = "12px double #960f1a";
    filterDoblesBtn.removeAttribute('style');
    filterSimplesBtn.removeAttribute('style');
    filterTriplesBtn.removeAttribute('style');
    filterShowAll.removeAttribute('style');
};


