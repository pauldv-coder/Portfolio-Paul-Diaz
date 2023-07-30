document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('#nav');
    const menu = document.querySelector('#menu');
    const close = document.querySelector('#close');

    menu.addEventListener("click", () => {
        nav.classList.add("visible");
    });

    close.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});