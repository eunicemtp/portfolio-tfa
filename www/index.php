<!-- 

require_once 'includes/functions.php';

$twig = getTwigInstance();

$template = $twig->load('index.twig');

$tpl_data = [
  'title' => 'Hello World',
];

echo $template->render($tpl_data); -->


<!DOCTYPE html>
<html>
<head>
  <title>DWMA project</title>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">

  <meta name="description" content="">
  <!-- Meta Partage -->

  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Contenu ajoute">

 <!-- Instagram Card data -->
 <meta name="Instagram:card" content="summary_large_image">
 <meta name="Instagram:site" content="@karuiart_">
 <meta name="Instagram:creator" content="@eunice_mtp">
 <meta name="Instagram:title" content="Portfolio by Eunice Mutope">
 <meta name="Instagram:description" content="Here my portfolio! You'll find all my projects, my resume and even more">
 <!-- Instagram summary card with large image must be at least 280x150px -->
 <meta name="Instagram:image" content="http://www.eunice-mutope-nkongolo.be/assets/images/karui_insta.png">

 <!-- Behance Card data -->
 <meta name="Behance:card" content="summary_large_image">
 <meta name="Behance:site" content="eunicemutope">
 <meta name="Behance:creator" content="eunicemutope">
 <meta name="Behance:title" content="Portfolio by Eunice Mutope">
 <meta name="Behance:description" content="Here my portfolio! You'll find all my projects, my resume and even more">
 <!-- Behance summary card with large image must be at least 280x150px -->
 <meta name="Behance:image" content="http://www.eunice-mutope-nkongolo.be/projets/helloworld/assets/images/karui_insta.png">

 <!-- Pinterest Card data -->
 <meta name="Pinterest:card" content="summary_large_image">
 <meta name="Pinterest:site" content="@emutope">
 <meta name="Pinterest:creator" content="@eunicemutope">
 <meta name="Pinterest:title" content="Portfolio by Eunice Mutope">
 <meta name="Pinterest:description" content="Here my portfolio! You'll find all my projects, my resume and even more">
 <!-- Pinterest summary card with large image must be at least 280x150px -->
 <meta name="Pinterest:image" content="http://www.eunice-mutope-nkongolo.be/projets/helloworld/assets/images/karui_insta.png">

 <!-- Hello world data -->
 <meta property="og:site_name" content="My portfolio - Eunice Mutope">
 <meta property="og:title" content="Portfolio - Eunice Mutope DWT - HEAJ">
 <meta property="og:description" content="Here my portfolio! You'll find all my projects, my resume and even more">
 <meta property="og:type" content="website">
 <meta property="og:url" content="http://www.eunice-mutope-nkongolo.be/">
 <meta property="og:image" content="https://eunice-mutope-nkongolo.be/assets/images/avatar2.png">
 <meta property="og:image:width" content="1800">
 <meta property="og:image:height" content="945">

  <!-- Favicon -->
  <link rel="icon" href="assets/images/avatar2.png">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://use.typekit.net/jts8cfb.css">
  <link rel="stylesheet" href="assets/styles/app.css">
  <script src='https://cdnjs.cloudflare.com/ajax/libs/trianglify/0.1.5/trianglify.min.js'></script>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js'></script>
  <script src="assets/scripts/app.js" defer></script>
  <script src="assets/scripts/background.js" defer></script>

</head>
<body>
  <main>
    <section class="section section__acceuil">
      <div class="acceuil">
        <h1 class="title">Hello!</h1>
        <p>I’m Eunice a web design student</p>
      </div>
    </section>
    <section class="section section__works">
      <h2 class="title">Works</h2>
    </section>

    <section class="section section__contact">
      <h2 class="title">Contact</h2>
      <ul class="reseaux">
        <li class="reseaux reseaux__el">
            <a href="https://www.instagram.com/karuiart_/"> <span class="hide"></span> 

                <svg viewBox="0 0 50 50" style="enable-background:new 0 0 22.7 22.7" xml:space="preserve"><path d="M14 6H8.6C6.9 6 6 6.9 6 8.7v5.4c.1 1.8.9 2.6 2.7 2.7h5.4c1.8-.1 2.6-.9 2.7-2.7V8.7C16.6 6.9 15.8 6 14 6zm-2.7 8.7c-1.9 0-3.4-1.5-3.4-3.4s1.5-3.4 3.4-3.4 3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4zm3.6-6.1c-.4 0-.8-.4-.8-.8s.4-.8.8-.8.8.4.8.8-.4.8-.8.8zm-1.4 2.7c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2c0-1.2 1-2.2 2.2-2.2 1.3 0 2.2 1 2.2 2.2zM11.3 0C5.1 0 0 5.1 0 11.3s5.1 11.3 11.3 11.3 11.3-5.1 11.3-11.3S17.6 0 11.3 0zm6.6 14.1c-.1 2.4-1.4 3.7-3.8 3.8H8.7c-2.4-.1-3.7-1.4-3.8-3.8V8.7C5 6.3 6.3 5 8.7 4.9h5.4c2.4.1 3.7 1.5 3.8 3.8v2.7c.1 1.7.1 2 0 2.7z"/></svg>
            </a>
        </li>
        <li class="reseaux reseaux__el">
            <a href="https://www.behance.net/eunicemutope"> <span class="hide"></span> 
                <svg viewBox="0 0 50 50">
                    <path d="M8.84 10.84H6.87V8.98h1.79c1.88 0 1.64 1.86.18 1.86zm5.79 1.05h2.62c-.11-1.68-2.36-1.8-2.62 0zm-5.9.4H6.87v1.95H8.7c1.78 0 1.67-1.95.03-1.95zM24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0zm-13.36-.73c1.67-.86 1.61-3.98-1.58-4.03H5v8.73h3.77c3.96 0 3.9-3.97 1.87-4.7zM14 8.1h4v-.87h-4v.87zm4.94 3.7a3.06 3.06 0 0 0-6.05.87c0 4.52 5.18 3.81 5.95 1.56h-1.85c-.64.74-2.5.53-2.4-1.19h4.4c.02-.55 0-.95-.05-1.25z"/>
                </svg>
            </a>
        </li>
        <li class="reseaux reseaux__el">
            <a href="https://www.pinterest.com/emutope/"><span class="hide"></span>
                <svg viewBox="0 0 50 50"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm0 19a7 7 0 0 1-2.07-.31c.28-.47.71-1.23.87-1.84l.43-1.66c.23.43.9.8 1.6.8 2.12 0 3.64-1.94 3.64-4.35 0-2.31-1.89-4.04-4.32-4.04-3.02 0-4.62 2.02-4.62 4.23 0 1.03.55 2.3 1.42 2.71.13.07.2.04.24-.09l.19-.8a.21.21 0 0 0-.05-.2c-.29-.34-.52-.99-.52-1.6a3.03 3.03 0 0 1 3.16-3.03c1.72 0 2.92 1.17 2.92 2.85 0 1.9-.95 3.2-2.2 3.2-.68 0-1.2-.56-1.03-1.26.2-.83.58-1.73.58-2.33 0-.54-.3-.99-.89-.99-.7 0-1.27.73-1.27 1.7 0 .62.21 1.04.21 1.04l-.82 3.48c-.14.6-.08 1.45-.02 2A7 7 0 1 1 12 19z"/></svg>
            </a>
        </li>
        <li class="reseaux reseaux__el ">
          <a href="mailto:eunicemtpro@gmail.com"><span class="hide"></span>
            
            <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
              <style type="text/css">.st0{display:none;}</style>
              <path d="M41.8,17v16.6c0,1.8-1.5,3.3-3.4,3.3H11.9c-1.8,0-3.3-1.5-3.3-3.3V17c0-0.6,0.1-1.2,0.4-1.8l16,11.1l16.1-11.3C41.6,15.5,41.8,16.3,41.8,17z"/><path d="M25,0C11.2,0,0,11.2,0,25s11.2,25,25,25s25-11.2,25-25S38.8,0,25,0z M44.1,34.5c0,2.1-1.7,3.8-3.8,3.8H10.2c-2.1,0-3.8-1.7-3.8-3.8V15.6c0-2.1,1.7-3.8,3.8-3.8h30.2c2.1,0,3.8,1.7,3.8,3.8V34.5z"/><g><path class="st0" d="M41.3,14.2h-32c0.6-0.9,1.6-1.3,2.7-1.3h26.5C39.6,12.9,40.7,13.3,41.3,14.2z"/><path d="M40.7,13.9L25.3,24.7c0,0-0.1,0-0.3,0L9.9,14.2c0.1-0.4,0.1-0.3,0.3-0.7h30.4C40.7,13.7,40.7,13.7,40.7,13.9z"/></g>
              </svg>              
         
          </a>
        </li>
      </ul>
    </section>

  </main>

  <footer>
      <small class="credits"><a href="index.html">Eunice Mutope</a> © 2024</small>
  </footer> 

</body>
</html>
