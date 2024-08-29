<?php
/*
Plugin Name: Greeting Shortcode
Description: A simple plugin that adds a [greeting] shortcode to display a welcome message.
Version: 1.0
Author: Wilmer Camois
*/

function greeting_shortcode() {
    return 'Welcome to My Site!';
}


add_shortcode('greeting', 'greeting_shortcode');