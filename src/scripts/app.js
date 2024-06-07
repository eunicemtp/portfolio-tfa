"use strict";

import { gsap } from "gsap"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import $ from "jQuery";
gsap.registerPlugin(ScrollTrigger,Draggable);

var contenus = document.querySelectorAll(".contenu");

const mediaQueryMobile = window.matchMedia('(max-width: 899px)')
// Check if the media query is true
if (mediaQueryMobile.matches) {
   
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


ScrollTrigger.create({
    trigger: "#bg3", // élément à pinner
    start: "top", // déclencheur lorsque le top de section__myself-bg atteint le top de la fenêtre
    end: "+=300%", // fin du pinning après 300vh
    pin: true, // active le pinning
    // pinSpacing: true, // active l'ajout de l'espace de pinning
   
});

const mediaQueryAllMobile = window.matchMedia('(max-width: 1023px)')
// Check if the media query is true
if (mediaQueryAllMobile.matches) {

  ScrollTrigger.create({
    trigger: ".section__myself", // élément à pinner
    start: "top top", // déclencheur lorsque le top de section__myself-bg atteint le top de la fenêtre
    end: "+=150%", // fin du pinning après 300vh
    pin: true, // active le pinning

    
});


    scrollAnimationMobile1(".triangLeft", 0,600);
    scrollAnimationMobile1(".triangledown", 600,0);
    var hide = gsap.timeline();
    var hideFlyers = gsap.timeline();
    hideFlyers.to(".firstHide",{opacity:0});
    hide.from(".secondHide--mobile",{opacity:0});
    
    
    gsap.to(".triangleUp", {
        scrollTrigger: {
            trigger: "#bg3",
            start: "top top",
            end: "bottom top",
            scrub: true,
            toggleActions: "play reverse play reverse",
            onEnter: () => hide.play(),
            onLeave: () => hide.reverse(),
            onEnterBack: () => hide.play(),
            onLeaveBack: () => hide.reverse(),
            onEnter: () => hideFlyers.play(),
            onLeave: () => hideFlyers.reverse(),
            onEnterBack: () => hideFlyers.play(),
            onLeaveBack: () => hideFlyers.reverse(),
            
        },
        y: -400,
        ease: "none",
        
        onComplete: () => {
            gsap.to(".triangleUp", {
                y: 0,
                ease: "none",
                onComplete: () => {
                    // hide.reverse();
                    scrollAnimationMobile2(".triangleBuzzle", 0,400,".pin","top top");
                    
                }
            });
        }
    });

    function scrollAnimationMobile2(selector, yValue, xValue, pin, starting) {
      gsap.to(selector, {
          scrollTrigger: {
              trigger: pin,
              start: starting,
              end: "bottom top",
              scrub: true,
              toggleActions: "play reverse play reverse",
              
          },
          y: yValue,
          x: xValue,
          
          ease: "none",
          onComplete: () => {
            
            
              gsap.to(selector, {                
                
                
                toggleActions: "play reverse play reverse",
                  y: 0,
                  x: 0,
                 
                  scale: 1, // Réinitialiser l'échelle à 1 pour tous les éléments
                  ease: "none",
                  
              });
              
              gsap.to(".bigTriangle, .hideFinal", {
                toggleActions: "play reverse play reverse",
                scrollTrigger: {
                      trigger: ".pin2",
                      start: "top top",
                      end: "bottom top",
                      scrub: true,
                      
                },
               
                x: 900,
                ease: "none",
                opacity:1,

                onComplete: () => {
                  gsap.to(".bigTriangle, .hideFinal,.section__myself p", {
                      y: 0,
                      x: 0,
                      scale: 1, // Réinitialiser l'échelle à 1 pour tous les éléments
                      ease: "none",
                      opacity:0,
                  });
                  
                }
                
              });

            gsap.to(".flyers", {
              y: 0,
              x: -3000,
              scale: 2,
              scrollTrigger: {
                trigger: ".pin2",
                start: "top top",
                end: "bottom top",
                scrub: true,
                toggleActions: "play reverse play reverse",
              },

              
            });
            
          }
      });
  }
  function scrollAnimationMobile1(selector, yValue, xValue,) {
    gsap.to(selector, {
        scrollTrigger: {
          trigger: "#bg3",
          start: "top top",
          end: "bottom top",
          scrub: true,
          toggleActions: "play reverse play reverse",
        },
        y: yValue,
        x: xValue,
        ease: "none",
        onComplete: () => {
            gsap.to(selector, {
              y: 0,
              x: 0,
              ease: "none",
            });
          
        }
    });
}
  
    

}

const mediaQueryDesktop = window.matchMedia('(min-width: 1024px)')
// Check if the media query is true
if (mediaQueryDesktop.matches) {
   
  ScrollTrigger.create({
    trigger: ".section__myself", // élément à pinner
    start: "top top", // déclencheur lorsque le top de section__myself-bg atteint le top de la fenêtre
    end: "+=200%", // fin du pinning après 300vh
    pin: true, // active le pinning
    
    
  });
  ScrollTrigger.create({
      trigger: ".section__works", // élément déclencheur
      start: "top top", // déclencheur lorsque le top de .section__works atteint le top de la fenêtre
      end: "+=15%", // fin du pinning après 100vh
      pin: true, // élément à pinner
  });

  // ScrollTrigger.create({
  //   trigger: ".section__myself-bg2", // élément à pinner
  //   start: "top top", // déclencheur lorsque le top de section__myself-bg atteint le top de la fenêtre
  //   end: "+=200%", // fin du pinning après 300vh
  //   pin: ".section__myself", // active le pinning
  // });

  // ScrollTrigger.create({
  //   trigger: ".section__myself-bg2", // élément à pinner
  //   start: "top top", // déclencheur lorsque le top de section__myself-bg atteint le top de la fenêtre
  //   end: "+=200%", // fin du pinning après 300vh
  //   pin: true, // active le pinning
  // });
    
    gsap.to(".bigTriangle", {
        scrollTrigger: {
        trigger: "#bg3",
        start: "top top",
        end: "bottom top",
        scrub: true,
        toggleActions: "play reverse play reverse",
       
        },
        
        y:700,
        ease: "none",
        onComplete: () => {
            gsap.to(".bigTriangle", {
                y:0,
                ease: "none",
            });
        }
    });

    var hide = gsap.timeline();
    hide.to(".firstHide",{opacity:0})
        .from(".secondHide",{opacity:0});
    
    
    gsap.to(".triangleUp", {
        scrollTrigger: {
            trigger: "#bg3",
            start: "top top",
            end: "bottom top",
            scrub: true,
            toggleActions: "play reverse play reverse",
            onEnter: () => hide.play(),
            onLeave: () => hide.reverse(),
            onEnterBack: () => hide.play(),
            onLeaveBack: () => hide.reverse(),
            
        },
        y: -400,
        ease: "none",
        
        onComplete: () => {
            gsap.to(".triangleUp", {
                y: 0,
                ease: "none",
                onComplete: () => {
                    hide.reverse();
                    scrollAnimation(".smallTriangle", -700,".pin","top top");
                    scrollAnimation(".smallTriangleDown", 700,".pin","top top");
                    scrollAnimation(".flyers", -1000,".pin","center top");
                }
            });
        }
    });

    function scrollAnimation(selector, yValue,pin,starting) {
        gsap.to(selector, {

            scrollTrigger: {
                trigger: pin, // Trigger commun
                start: starting, // Début commun
                end: "bottom top", // Fin commune
                scrub: true, // Défilement en douceur commun
                toggleActions: "play reverse play reverse",
                
            },
            y: yValue,
            ease: "none",
            onComplete: () => {
                gsap.to(selector, {
                    y: 0,
                    ease: "none",
                });
            }
        });
    }
        
   

}


$(function() {


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



/////////////////////
/// PROJECT SLIDER///
////////////////////

const gradients = [
    '#220334',
    '#590400',
    '#0E0F1B',
    '#6aa84f'
];
  
  const svgElement = document.querySelector('.section__myself-bg');
  const paths = document.querySelectorAll('.triangle');
  let nextSlideEl;
  
  function animateSVGOut(elements) {

    // gsap.from(elements, {opacity: 0}),
    gsap.to(elements, {
      opacity: 0,
      duration: 0.01,
      stagger: 0.1,
      ease: "power2.inOut",
      onComplete: () => {
        elements.forEach(element => {
          element.style.opacity = 0; // Ensure opacity is set to 0 after animation completes
        });
        
        showNextSlide(); // Afficher le prochain slide après l'animation
      }
    });
    // maskNextSlide();
  }
  
function changeColors(elements, color) {
    elements.forEach(element => {
        element.setAttribute('fill', color);
        element.setAttribute('stroke', color);
        element.style.opacity = 1;
    });
}
  
  let prevButton = document.querySelector('.btn__prev');
  let nextButton = document.querySelector('.btn__next');
  let slides = document.querySelectorAll('.slider__el');
  let interval;
  let timeout;
  
  if (slides.length > 0) {
    slides[0].classList.add('slider__el--show');
    changeBackground(slides[0]);
  }
  
  prevButton.addEventListener('click', (e) => {
    animateSVGOut(paths); // Démarrer l'animation pour masquer les chemins SVG
    prevSlide();
    clearAuto();
    setupTimeout();
  });
  
  nextButton.addEventListener('click', (e) => {
    animateSVGOut(paths); // Démarrer l'animation pour masquer les chemins SVG
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
    
    nextSlideEl = activeSlideEl.nextElementSibling;
    if(!nextSlideEl || !nextSlideEl.classList.contains('slider__el')){
      nextSlideEl = activeSlideEl.parentNode.firstElementChild;
    }
    activeSlideEl.classList.remove('slider__el--show');
    nextSlideEl.classList.add('slider__el--show');
    nextSlideEl.style.opacity = 0;
    changeBackground(nextSlideEl);
  }
    function maskNextSlide() {
    nextSlideEl.style.opacity = 0; // Masquer le prochain slide jusqu'à ce que l'animation soit terminée
  }
  function showNextSlide() {
    nextSlideEl.style.opacity = 1; // Afficher le prochain slide
    // animateSVG(paths); // Démarrer l'animation pour afficher les chemins SVG du prochain slide
  }
  

  
  function changeBackground(slide) {
    const elementsToChange = ['#bgautre'];
    elementsToChange.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            const classes = Array.from(element.classList).filter(c => c.startsWith('gradient-bg-'));
            element.classList.remove(...classes);
            const newBgClass = slide.dataset.gradient;
            element.classList.add(newBgClass);
            const gradientIndex = parseInt(newBgClass.split('-')[2]) - 1;
            const gradient = gradients[gradientIndex];
            changeColors(paths, gradient);
        }
    });
    }
  
  function clearAuto(){
    if(interval){
      clearInterval(interval);
    } 
    if(timeout){
      clearTimeout(timeout);
    }
  }
  
  function setupTimeout(){
    timeout = setTimeout(() => {
      launchAuto();
    }, 5000);
  }
  
  // function launchAuto(){
  //   interval = setInterval(() => {
  //     animateSVGOut(paths); // Démarrer l'animation pour masquer les chemins SVG
  //   }, 5000);
  // }
  
  setupTimeout();
  

  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5 // 50% of the section needs to be visible
  };

  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              navLinks.forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('href') === `#${id}`) {
                      link.classList.add('active');
                  }
              });
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));

  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          navLinks.forEach(link => link.classList.remove('active'));
          this.classList.add('active');
      });
  });

  // Check current URL to set active state on load
  const currentURL = window.location.href;
  navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      if (currentURL.includes(linkHref)) {
          link.classList.add('active');
      }
  });