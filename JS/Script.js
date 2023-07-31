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


function handleScroll() {
    
    const header = document.getElementById("header");
  
    
    if (header) {
      
      const currentScrollPos = window.scrollY;
  
      if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
      } else {
        header.style.top = `-${header.offsetHeight}px`;
      }
  
      prevScrollPos = currentScrollPos;
    }
  }
  
    let prevScrollPos = window.scrollY;
  
  window.addEventListener("scroll", handleScroll);
  