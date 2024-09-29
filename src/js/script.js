const openButton = document.querySelector(".mob__item.menu");
const closeButton = document.querySelector(".modal__close");
const menu = document.querySelector(".modal");

function openModal() {
    menu.style.display = 'flex';
    document.body.style.overflowY = "hidden";
}

function closeModal() {
    menu.style.display = 'none';
    document.body.style.overflowY = "scroll";
}

openButton.addEventListener("click", ()=>{
    openModal();
});

closeButton.addEventListener("click", ()=>{
    closeModal();
});