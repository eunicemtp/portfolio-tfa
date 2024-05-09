import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import $ from "jQuery";
gsap.registerPlugin(ScrollTrigger);

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

$(function() {
    $('.square').on('click', function() {
      var description = $(this).find('.description').text();
      $('.description-popup').text(description);
      $('.popup').show();
    });
  
    $('.popup').on('click', function() {
      $(this).hide();
    });
});
  
  
  

// $(document).ready(function() {
//     $('.contenu').each(function() {
//       var contenuHeight = $(this).height(); // Hauteur du contenu
//       var contenuWidth = $(this).width(); // Largeur du contenu
      
//       $(this).addClass('dynamic-height').css({
//         'height': contenuHeight + 'px', // Définit la hauteur de .contenu à la hauteur de son contenu
//         'width': contenuWidth + 'px' // Définit la largeur de .contenu à la largeur de son contenu
//       });
//     });
//   });
  
  