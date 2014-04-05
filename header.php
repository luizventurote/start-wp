<!doctype html>
<html <?php language_attributes(); ?>>
<head>

    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title><?php wp_title(''); ?></title>
    <meta name="description" content="<?php bloginfo( 'description' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Style -->
    <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />

    <!-- Pingback -->
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

    <!-- Icons -->
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/img/apple-touch-icon.png">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.ico">

    <!-- Modernizr -->
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/assets/js/lib/modernizr.js"></script>

    <?php wp_head(); ?>

</head>
<body>

    <div class="page">