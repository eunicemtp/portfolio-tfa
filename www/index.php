<?php

require_once 'includes/functions.php';

$twig = getTwigInstance();

$template = $twig->load('index.twig');

$projets_details = array(
  "Rux" => array(
      "description" => "This is the presentation of the redesign of our school playground ",
      "title" => "Rethinking ux",
      "images" => array(
          "/assets/images/rux_haut2.png",
          "/assets/images/rux_bas2.png"
      )
  ),
  "Iolce" => array(
      "description" => "This was one of my first website. The task was to watch a conference “Ethics of web design” resume, comment and obviously make a website with these informations",
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

