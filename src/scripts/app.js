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

// var popup = document.querySelector(".popup");
// popup.addEventListener("scroll",function(){

//   var title = document.querySelector(".popup__title");
//   var text = document.querySelector(".popup__info");
//   var titleRect = title.getBoundingClientRect();
//   var textRect = text.getBoundingClientRect();

//   if (
//     textRect.bottom > titleRect.top &&
//     textRect.top < titleRect.bottom
//     ) {
//     gsap.to(text, { opacity: 0, duration: 0.2,y:90 });
//     } 
//     else {
//     gsap.to(text, { opacity: 1, duration: 0.3,y:0 });
//     }


// })
$(function() {
    $('.square').on('click', function() {
      var description = $(this).find('.description').text();
      var title = $(this).find('.title--popup').text();
      var info = $(this).find('.info').text();
      var info2 = $(this).find('.info2').text();
      $('.popup__title').text(title);
      $('.popup__description').text(description);
      $('.popup__info').text(info);
      $('.second_info').text(info2);
      $('.popup').show();
      
      // Ajouter une classe au corps pour figer le défilement
      $('body').addClass('popup-open');
    });


    $('.popup__btn--close').on('click', function() {
      $(this).closest('.popup').hide(); // Masquer le popup en trouvant le conteneur parent
      $('body').removeClass('popup-open'); // Supprimer la classe du corps pour réactiver le défilement
    });
    // var btn = document.querySelector(".popup__btn");
    // $('.popup__content').hide();
    // function toggleContent(targetId) {
    //   var content = $('#' + targetId + '-content');
      
    //   if (content.is(':visible')) {
    //       content.hide(); // Masquer le contenu s'il est déjà visible
    //       btn.removeClass('active-content'); // Retirer la classe si le contenu est masqué
          
    //   } else {
    //       $('.popup__content').hide(); // Masquer tous les autres contenus
    //       content.show(); // Afficher le contenu ciblé
    //       btn.addClass('active-content'); // Ajouter la classe au bouton actuel
    //   }
    // }

    // // Gérer les clics sur les boutons popup__btn
    // $('.popup__btn').on('click', function() {
    //   var targetId = $(this).data('target'); // Récupérer l'ID cible à partir de l'attribut data-target
    //   toggleContent(targetId); // Basculer l'affichage du contenu correspondant
    // });
    $('.popup__content').hide(); // Masquer tous les contenus au chargement de la page

    function toggleContent(targetId) {
        var content = $('#' + targetId + '-content');
        var btn = $('.popup__btn[data-target="' + targetId + '"]'); // Sélectionner le bouton associé
        
        if (content.is(':visible')) {
            content.hide(); // Masquer le contenu s'il est déjà visible
            btn.removeClass('active-content'); // Retirer la classe si le contenu est masqué
        } else {
            $('.popup__content').hide(); // Masquer tous les autres contenus
            $('.popup__btn').removeClass('active-content');
            content.show(); // Afficher le contenu ciblé
            btn.addClass('active-content'); // Ajouter la classe au bouton actuel
        }
    }

    // Gérer les clics sur les boutons popup__btn
    $('.popup__btn').on('click', function() {
        var targetId = $(this).data('target'); // Récupérer l'ID cible à partir de l'attribut data-target
        toggleContent(targetId); // Basculer l'affichage du contenu correspondant
    });


});

  
  


  
  