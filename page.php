<?php

/**
 * The template for displaying all pages.
 *
 * @package WordPress
 * @subpackage start-wp
 * @since Start WP Framework v0.0.1
 */

get_header(); ?>

	<?php
		// Start the Loop.
		while ( have_posts() ) : the_post();

			// The page content.
			the_content();

		endwhile;
	?>

<?php get_footer(); ?>