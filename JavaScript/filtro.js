let simplesContainer = document.querySelector("#simples");
let doblesContainer = document.querySelector("#dobles");
let triplesContainer = document.querySelector("#triples");
let filterSimplesBtn = document.querySelector("#filter-simples");
let filterDoblesBtn = document.querySelector("#filter-dobles");
let filterTriplesBtn = document.querySelector("#filter-triples");
let filterShowAll = document.querySelector("#filter-all");
let titleSimples = document.querySelector("#paty-simples");
let titleDobles = document.querySelector("#paty-dobles");
let titleTriples = document.querySelector("#paty-triples");


filterShowAll.style.color = "#ef8e3d";
filterShowAll.style.borderBottom = "12px double #960f1a";

filterShowAll.onclick = () => {
    simplesContainer.classList.remove("hidden");
    doblesContainer.classList.remove("hidden");
    triplesContainer.classList.remove("hidden");

    titleSimples.classList.remove("hidden");
    titleDobles.classList.remove("hidden");
    titleTriples.classList.remove("hidden");

    filterShowAll.style.color = "#ef8e3d";
    filterShowAll.style.borderBottom = "12px double #960f1a";
    filterSimplesBtn.removeAttribute('style');
    filterDoblesBtn.removeAttribute('style');
    filterTriplesBtn.removeAttribute('style');
};

filterSimplesBtn.onclick = () => {
    doblesContainer.classList.add("hidden");
    triplesContainer.classList.add("hidden");
    simplesContainer.classList.remove("hidden");
   

    titleDobles.classList.add("hidden");
    titleTriples.classList.add("hidden");
    titleSimples.classList.remove("hidden");
    titleSimples.classList.add("under-section");

    filterSimplesBtn.style.color = "#ef8e3d";
    filterSimplesBtn.style.borderBottom = "12px double #960f1a";
    filterDoblesBtn.removeAttribute('style');
    filterTriplesBtn.removeAttribute('style');
    filterShowAll.removeAttribute('style');
};

filterDoblesBtn.onclick = () => {
    simplesContainer.classList.add("hidden");
    triplesContainer.classList.add("hidden");
    doblesContainer.classList.remove("hidden");

    titleSimples.classList.add("hidden");
    titleDobles.classList.remove("hidden");
    titleTriples.classList.add("hidden");

    filterDoblesBtn.style.color = "#ef8e3d";
    filterDoblesBtn.style.borderBottom = "12px double #960f1a";
    filterSimplesBtn.removeAttribute('style');
    filterTriplesBtn.removeAttribute('style');
    filterShowAll.removeAttribute('style');
};

filterTriplesBtn.onclick = () => {
    doblesContainer.classList.add("hidden");
    simplesContainer.classList.add("hidden");
    triplesContainer.classList.remove("hidden");

    titleSimples.classList.add("hidden");
    titleDobles.classList.add("hidden");
    titleTriples.classList.remove("hidden");

    filterTriplesBtn.style.color = "#ef8e3d";
    filterTriplesBtn.style.borderBottom = "12px double #960f1a";
    filterDoblesBtn.removeAttribute('style');
    filterSimplesBtn.removeAttribute('style');
    filterShowAll.removeAttribute('style');
};

