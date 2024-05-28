"use strict";

import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import $ from "jQuery";
gsap.registerPlugin(ScrollTrigger,Draggable);

var contenus = document.querySelectorAll(".contenu");

const mediaQuery = window.matchMedia('(max-width: 899px)')
// Check if the media query is true
if (mediaQuery.matches) {
   
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
}



// document.addEventListener("scroll", function() {

//     var slider = document.querySelector(".slider");
//     var masque = document.querySelector(".masque");

//     var masqueRect = masque.getBoundingClientRect();
//     var sliderRect = slider.getBoundingClientRect();
//     // var textRect = text.getBoundingClientRect();

//     if (
//         sliderRect.bottom > masqueRect.top &&
//         sliderRect.top < masqueRect.bottom
//         ) {
//             slider.style.position = 'sticky';
//             // slider.style.top = '0';
//         // gsap.to(slider, { opacity: 0, duration: 0.2,y:90 });
//         } 
//         else {
//         // gsap.to(slider, { opacity: 1, duration: 0.3,y:0 });
//         slider.style.position = 'sticky';
//         }


// });

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
    // $('.square').on('click', function() {
    //   var description = $(this).find('.description').text();
    //   var title = $(this).find('.title--popup').text();
    //   var info = $(this).find('.info').text();
    //   var info2 = $(this).find('.info2').text();
    //   var designImages = $(this).find('.design_images').html();
    //   var designImages = $(this).find('.design_images2').html();
    //   $('.popup__title').text(title);
    //   $('.popup__description').text(description);
    //   $('.popup__info').text(info);
    //   $('.second_info').text(info2);
    //   $('#design-images').html(''); // Clear previous images
    //   $('#design-images').html(designImages);
    //   $('#design-images2').html(designImages);
    //   $('.popup').show();
      
    //   // Ajouter une classe au corps pour figer le défilement
    //   $('body').addClass('popup-open');
    // });

    $('.square').on('click', function() {
        var description = $(this).find('.description').text();
        var title = $(this).find('.title--popup').text();
        var info = $(this).find('.info').text();
        var info2 = $(this).find('.info2').text();
        var designImages = $(this).find('.design_images').html();
        var adjustImages = $(this).find('.adjust_images').html();
        $('.popup__title').text(title);
        $('.popup__description').text(description);
        $('.popup__info').text(info);
        $('.second_info').text(info2);
        $('#design-images').html(''); // Clear previous images
        $('#design-images').html(designImages);
        $('#adjust-images').html('');
        $('#adjust-images').html(adjustImages);
        $('.popup').show();
        
        // Ajouter une classe au corps pour figer le défilement
        $('body').addClass('popup-open');
    });
    


    $('.popup__btn--close').on('click', function() {
      $(this).closest('.popup').hide(); // Masquer le popup en trouvant le conteneur parent
      $('body').removeClass('popup-open'); // Supprimer la classe du corps pour réactiver le défilement
    });

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


//////////////////
/// DRAG SLIDER///
/////////////////


// const slider = document.querySelector('.slider');
// const slides = gsap.utils.toArray('.slide');
// let currentSlide = 0;

// const updateSlidePosition = (slideIndex) => {
//     gsap.to(slider, {
//         x: -slideIndex * window.innerWidth,
//         duration: 0.5,
//         ease: 'power3.out'
//     });
// };

// Draggable.create(slider, {
//     type: 'x',
//     // bounds: { minX: -((slides.length - 1) * window.innerWidth), maxX: 0 },
//     edgeResistance: 0.65,
//     inertia: true,
//     dragResistance: 0.3,
//     /*onDragEnd: function() {
//         // const slideWidth = window.innerWidth;
//         const slideWidth = slides.length;
//         const totalWidth = slideWidth * (slides.length - 1);
//         let newSlideIndex = Math.round(-this.x / slideWidth);

//         newSlideIndex = Math.max(0, Math.min(newSlideIndex, slides.length - 2));
//         currentSlide = newSlideIndex;

//         updateSlidePosition(currentSlide);
//     }*/
// });

// window.addEventListener('resize', () => {
//     Draggable.get(slider).applyBounds({
//         minX: -((slides.length - 1) * window.innerWidth),
//         maxX: 0
//     });
//     updateSlidePosition(currentSlide);
// });



// document.addEventListener("DOMContentLoaded", function() {
//     // Initialize the GSAP draggable slider
//     let slider = document.querySelector('.slider');
//     let isDragging = false;
//     let startPosX = 0;
//     let currentTranslate = 0;
//     let dragInstance = null;

//     slider.addEventListener('touchstart', handleTouchStart);
//     slider.addEventListener('touchmove', handleTouchMove);
//     slider.addEventListener('touchend', handleTouchEnd);

//     function handleTouchStart(event) {
//         const touch = event.touches[0];
//         isDragging = true;
//         startPosX = touch.clientX;
//         currentTranslate = getPositionX(slider);
        
//         // Kill any existing animation
//         if (dragInstance) {
//             dragInstance.kill();
//             dragInstance = null;
//         }
//     }

//     function handleTouchMove(event) {
//         if (!isDragging) return;
//         const touch = event.touches[0];
//         const currentPositionX = touch.clientX;
//         const diffX = currentPositionX - startPosX;
//         const newTranslate = currentTranslate + diffX;
        
//         // Update the slider position
//         slider.style.transform = `translateX(${newTranslate}px)`;
//     }

//     function handleTouchEnd() {
//         isDragging = false;
        
//         // Animate the slider position with GSAP
//         dragInstance = gsap.to(slider, {
//             x: "-=200",
//             duration: 0.5,
//             ease: "power2.out",
//             onComplete: () => {
//                 // Reset the drag instance
//                 dragInstance = null;
//             }
//         });
//     }

//     function getPositionX(element) {
//         const style = window.getComputedStyle(element);
//         const matrix = new DOMMatrixReadOnly(style.transform);
//         return matrix.m41;
//     }
// });


// const slider = document.querySelector('.popup__slider');
// const slides = gsap.utils.toArray('.popup__slider__el');
// let currentSlide = 0;

// const updateSlidePosition = (slideIndex) => {
//     gsap.to(slider, {
//         x: -slideIndex * window.innerWidth,
//         duration: 0.5,
//         ease: 'power3.out'
//     });
// };

// Draggable.create(slider, {
//     type: 'x',
//     bounds: { minX: -((slides.length - 1) * window.innerWidth), maxX: 0 },
//     // edgeResistance: 0.65,
//     inertia: true,
//     // dragResistance: 0.3,
//     onDragEnd: function() {
//         // const slideWidth = window.innerWidth;
//         // const totalWidth = slideWidth * (slides.length - 1);
//         // let newSlideIndex = Math.round(-this.x / slideWidth);

//         // newSlideIndex = Math.max(0, Math.min(newSlideIndex, slides.length - 2));
//         // currentSlide = newSlideIndex;

//         // updateSlidePosition(currentSlide);
//     }
// });

// window.addEventListener('resize', () => {
//     Draggable.get(slider).applyBounds({
//         minX: -((slides.length - 1) * window.innerWidth),
//         maxX: 0
//     });
//     updateSlidePosition(currentSlide);
// });

/////////////////////
/// PROJECT SLIDER///
////////////////////



    let prevButton = document.querySelector('.btn__prev');
    let nextButton = document.querySelector('.btn__next');
    let slides = document.querySelectorAll('.slider__el');
    let interval;
    let timeout;

    // Initialize the first slide as visible
    if (slides.length > 0) {
        slides[0].classList.add('slider__el--show');
        changeBackground(slides[0]);
    }

    prevButton.addEventListener('click', (e) => {
        prevSlide();
        clearAuto();
        setupTimeout();
    });

    nextButton.addEventListener('click', (e) => {
        nextSlide();
        clearAuto();
        setupTimeout();
    });

    document.addEventListener('keydown', keyboardListener);

    function keyboardListener(event){
        clearAuto();
        setupTimeout();
        if(event.code == 'ArrowLeft'){
            prevSlide();
        } else if(event.code == 'ArrowRight'){
            nextSlide();
        }
    }

    function prevSlide(){
        let activeSlideEl = document.querySelector('.slider__el--show');
        let prevSlideEl = activeSlideEl.previousElementSibling;
        if(!prevSlideEl || !prevSlideEl.classList.contains('slider__el')){
            prevSlideEl = activeSlideEl.parentNode.lastElementChild;
        }
        activeSlideEl.classList.remove('slider__el--show');
        prevSlideEl.classList.add('slider__el--show');
        changeBackground(prevSlideEl);
    }

    function nextSlide(){
        let activeSlideEl = document.querySelector('.slider__el--show');
        let nextSlideEl = activeSlideEl.nextElementSibling;
        if(!nextSlideEl || !nextSlideEl.classList.contains('slider__el')){
            nextSlideEl = activeSlideEl.parentNode.firstElementChild;
        }
        activeSlideEl.classList.remove('slider__el--show');
        nextSlideEl.classList.add('slider__el--show');
        changeBackground(nextSlideEl);
    }

    function changeBackground(slide){
        const worksSection = document.querySelector('#bg');
        // Remove existing gradient-bg-* class from works section
        const classes = Array.from(worksSection.classList).filter(c => c.startsWith('gradient-bg-'));
        worksSection.classList.remove(...classes);
        // Get the gradient class from data attribute
        const newBgClass = slide.dataset.gradient;
        // Add the new gradient-bg-* class to works section
        worksSection.classList.add(newBgClass);
    }

    function clearAuto(){
        if(interval){
            clearInterval(interval);
        } 
        if(timeout){
            clearTimeout(timeout);
        }
    }

    // function launchAuto(){
    //     interval = setInterval(() => {
    //         nextSlide();
    //     }, 5000);
    // }

    function setupTimeout(){
        timeout = setTimeout(() => {
            launchAuto();
        }, 5000);
    }

    setupTimeout();

