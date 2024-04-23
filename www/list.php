<?php

require_once 'vendor/autoload.php';

// Chemin vers le fichier Twig
$loader = new \Twig\Loader\FilesystemLoader(__DIR__.'/templates');
$twig = new \Twig\Environment($loader);


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
        "title" => "$0.40",
        "image" => "https://peach.blender.org/wp-content/uploads/poster_bunny_small.jpg"
    )
);

echo $twig->render('projets.twig', ['projets_details' => $projets_details]);