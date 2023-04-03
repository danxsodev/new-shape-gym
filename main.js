const buttonBurger = document.getElementById('btn-burguer');

function openMenu(event) {
    if (event.type === "touchstart") event.preventDefault();

    const nav = document.getElementById("navigation");
    nav.classList.toggle("menu-expanded");

    const menuExpanded = nav.classList.contains("menu-expanded");
    event.currentTarget.setAttribute("aria-expanded", menuExpanded);
    
    if (menuExpanded) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu");
        buttonBurger.innerHTML = `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="#B5D43B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 6L18 18" stroke="#B5D43B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`;
    } 
    
    else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu");
        buttonBurger.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 22.6667C4 23.403 4.59695 24 5.33333 24H26.6667C27.403 24 28 23.403 28 22.6667C28 21.9303 27.403 21.3333 26.6667 21.3333H5.33333C4.59695 21.3333 4 21.9303 4 22.6667ZM4 16C4 16.7364 4.59695 17.3333 5.33333 17.3333H26.6667C27.403 17.3333 28 16.7364 28 16C28 15.2636 27.403 14.6667 26.6667 14.6667H5.33333C4.59695 14.6667 4 15.2636 4 16ZM5.33333 8C4.59695 8 4 8.59695 4 9.33333C4 10.0697 4.59695 10.6667 5.33333 10.6667H26.6667C27.403 10.6667 28 10.0697 28 9.33333C28 8.59695 27.403 8 26.6667 8H5.33333Z" fill="#161616"/>
        </svg>  `;
    }
}  
buttonBurger.addEventListener("click", openMenu);
buttonBurger.addEventListener("touchstart", openMenu);

let currentImageIndex = 0;
let images = document.querySelectorAll(".slideshow img");
setInterval(function() {
    images[currentImageIndex].style.opacity=0;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity=1;
}, 3000);



