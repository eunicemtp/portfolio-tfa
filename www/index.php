<?php

require_once 'includes/functions.php';

$twig = getTwigInstance();

$template = $twig->load('index.twig');

$projets_details = array(
  "Rux" => array(
      "description" => "This is the presentation of the redesign of our school playground ",
      "info" => "At the request of the principal and teachers, we're going to help design the playground. 
                It's not up to scratch yet, so we need to come up with ideas for its layout, including activities, 
                furniture, etc.",
        "info2" => "The difficulties here were not only coding or the design of the website it was to find the right ideas for
                 the redesign of the playground, I had a lot more to think about. When a chose an idea I had to be able to make a 
                 design for my website that reflected my ideas, that's tricky",
      "title" => "Rux",
      "images" => array(
          "/assets/images/rux_haut2.png",
          "/assets/images/rux_bas2.png"
      ),
      "design_images" => array(
        "/assets/images/img_mobile-1.png",
        "/assets/images/img_mobile-2.png",
        "/assets/images/img_mobile-3.png"
    )

  ),
  "Iolce" => array(
      "description" => "This was one of my first website. The task was to watch a conference “Ethics of web design” resume, comment and obviously make a website with these informations",
      "infoo" => "The decisions weren't easy at all, the hardest for me was choosing the colors... 
                To make everything compatible, readable and not too overloaded, it had to be the perfect match 
                with the conference and the rest of the site. After a few tries, I chose dark red, white and black. 
                To stay in the spirit of the conference.",
        "info2" => "The decisions weren't easy at all, the hardest for me was choosing the colors... 
        To make everything compatible, readable and not too overloaded, it had to be the perfect match 
        with the conference and the rest of the site. After a few tries, I chose dark red, white and black. 
        To stay in the spirit of the conference.",        
      "title" => "Iolce",
      "images" => array(
          "/assets/images/ethics.png"
      )
  ),
  "Ilab" => array(
      "description" => "orange",
      "title" => "Ilab",
      "images" => array(
          "/assets/images/ilab_img.png"
      )
  )
);


$tpl_data = [
  'title' => 'Portfolio',
  'projets_details' => $projets_details
];

echo $template->render($tpl_data);

