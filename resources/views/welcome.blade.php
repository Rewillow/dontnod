<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>DontNod Games</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"> <!-- Per importare il font da Google Fonts !-->
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> <!-- Per importare il font da Google Fonts !-->
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"> <!-- Per importare il font da Google Fonts !-->
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
        <script src="bower_components/aos/dist/aos.js"></script> 
        @viteReactRefresh <!-- Queste due righe di codice servono per specificare che il foglio di stile principale è app.css, mentre quello relativo alla gestione generale è app.jsx. Viene fatto questo per evitare che sia Laravel a gestire per esempio le rotte, lasciando spazio a React. !-->
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    <body>
        <div id="app"></div>
    </body>
</html>

!