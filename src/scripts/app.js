import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('DOMContentLoaded', function () {
    var section = document.getElementById('section__works');
    var sectionHeight = section.scrollHeight;
    section.style.height = sectionHeight + 'px';
});



var contenus = document.querySelectorAll(".contenu");

document.addEventListener("scroll", function() {
    
    contenus.forEach(contenu => {

        var masque = document.querySelector(".masque");
    
    
        var masqueRect = masque.getBoundingClientRect();
        var contenuRect = contenu.getBoundingClientRect();
        
        if (
        contenuRect.bottom > masqueRect.top &&
        contenuRect.top < masqueRect.bottom
        ) {
        gsap.to(contenu, { opacity: 0, duration: 0.2 });
        } else {
        gsap.to(contenu, { opacity: 1, duration: 0.3 });
        }
            
    });
    
});
  