<?php

require_once 'includes/functions.php';

$twig = getTwigInstance();

$template = $twig->load('index.twig');

$projets_details = array(
  "Rux" => array(
      "description" => "This is the presentation of the redesign of our school playground ",
      "title" => "Rethinking ux",
      "image" => "https://peach.blender.org/wp-content/uploads/poster_bunny_small.jpg"
  ),
  "Iolce" => array(
      "description" => "This was one of my first website. The task was to watch a conference “Ethics of web design” resume, comment and obviously make a website with these informations",
      "title" => "Iolce",
      "image" => "https://peach.blender.org/wp-content/uploads/poster_bunny_small.jpg"
  ),
  "Ilab" => array(
      "description" => "orange",
      "title" => "Ilab",
      "image" => "https://peach.blender.org/wp-content/uploads/poster_bunny_small.jpg"
  )
);

$tpl_data = [
  'title' => 'Portfolio',
  'projets_details' => $projets_details
];

echo $template->render($tpl_data);

