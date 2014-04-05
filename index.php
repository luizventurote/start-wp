<!doctype html>
<html lang="en">
    <head>

        <meta charset="UTF-8">
        <title>Start WP</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Icons -->
        <link rel="apple-touch-icon" href="img/apple-touch-icon.png">
        <link rel="shortcut icon" href="img/favicon.ico">

        <!-- Style -->
        <link rel="stylesheet" href="css/style.min.css">

        <script type="text/javascript" src="js/lib/modernizr.js"></script>

    </head>
    <body>

        <div class="page">

        </div> <!-- Page -->

        <!-- Scripts -->
        <script src="js/main.min.js"></script>

        <!-- Browser Sync -->
        <script src='//192.168.25.22:3000/socket.io/socket.io.js'></script>
        <script>var ___socket___ = io.connect('http://192.168.25.22:3000');</script>
        <script src='//192.168.25.22:3001/client/browser-sync-client.0.5.9.js'></script>

    </body>
</html>