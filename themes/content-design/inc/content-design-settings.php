<?php
/**
 * Add all your sections, fields and settings during admin_init
 */

function wporg_settings_api_init() {
    // Add the section to reading settings so we can add our
    // fields to it
    add_settings_section(
        'wporg_setting_section',
        'Example settings section in reading',
        'wporg_setting_section_callback_function',
        'page'
    );

    // Add the field with the names and function to use for our new
    // settings, put it in our new section
    add_settings_field(
        'wporg_setting_name',
        'Example setting Name',
        'wporg_setting_callback_function',
        'page',
        'wporg_setting_section'
    );

    // Register our setting so that $_POST handling is done for us and
    // our callback function just has to echo the <input>
    register_setting( 'reading', 'wporg_setting_name' );
} // wporg_settings_api_init()

add_action( 'admin_init', 'wporg_settings_api_init' );


/**
 * Settings section callback function
 *
 * This function is needed if we added a new section. This function
 * will be run at the start of our section
 */

function wporg_setting_section_callback_function() {
    echo '<p>Intro text for our settings section</p>';
}

/*
 * Callback function for our example setting
 *
 * creates a checkbox true/false option. Other types are surely possible
 */

function wporg_setting_callback_function() {
    echo '<input name="wporg_setting_name" id="wporg_setting_name" type="checkbox" value="1" class="code" ' . checked( 1, get_option( 'wporg_setting_name' ), false ) . ' /> <label for="wporg_setting_name">Explanation text</label>';
}
