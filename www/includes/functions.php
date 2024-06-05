<?php

require_once __DIR__ . '/../../vendor/autoload.php';

function getTwigInstance() {
  // le dossier ou on trouve les templates
  $loader = new Twig\Loader\FilesystemLoader(__DIR__ . '/../templates');
  // initialiser l'environnement Twig (avec debug)
  $twig = new Twig\Environment($loader, ['debug' => true]);

  return $twig;
}

function templateExists($twig, $page) {
  $loader = $twig->getLoader();
  return $loader->exists("{$page}.twig");
}