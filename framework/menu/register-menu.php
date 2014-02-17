<?php

	/**
	 * Register menus
	 *
	 * @link http://codex.wordpress.org/Function_Reference/register_nav_menus
	 * @link http://codex.wordpress.org/Function_Reference/wp_nav_menu
	 * @example wp_nav_menu( array( 'theme_location' => 'startwp-menu', 'menu_class' => 'swp-menu', ) );
	 */
	add_theme_support( 'menus' );
	add_action( 'init', 'swp_register_menu' );

	function swp_register_menu() {
		register_nav_menus(
		    array(
		    	'startwp-menu' => __( 'Start WP - Menu' )
			)
		);
	}

?>