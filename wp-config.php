<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'financecalculator' );

/** Database username */
define( 'DB_USER', 'financecal' );

/** Database password */
define( 'DB_PASSWORD', 'Linux@5455' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '&i=-+WU!`/k@W_vqZzUQ:9r!2IbptjD}^0,5LV%uAPgGOoYE4P{.g$Q=~UYL5T.k' );
define( 'SECURE_AUTH_KEY',  'Lta,>@74G3.q~}MK!@::y^H1%5~xc}obvF3|af/A%d.T&Ucgi&16ia!;6a6(A}!K' );
define( 'LOGGED_IN_KEY',    'cIUZ2V[l`W)>I<y%t4*!D58_U;W|c:2X3H 4QpW+BbI=YtcsqLg[Lb>9<>}pv=Vf' );
define( 'NONCE_KEY',        ' uwZ3haC vN<[ytEouKR@&C,S`GZ&Z?AWu.s2J%V2ts?:NMz#Rj&4/3trCZk_ WT' );
define( 'AUTH_SALT',        '<l}QmXh?Uoqn4aIhFVog:l)N:l$/^uK6y<CcaW+o76,X7[1_]h*~W$.,-5sk~L|f' );
define( 'SECURE_AUTH_SALT', '#fOxCFg-SF7R.0U 7gT;EWy;(61e9S |x@JZH~]{aVV7o)X!-zo4lLXg:K hcV#L' );
define( 'LOGGED_IN_SALT',   '7=~h@X`)Y..b{77n5=`pp7Bta@%f;m*gs,>s_DnNO^vyJQeu#vbf$gau9yz1J^Dt' );
define( 'NONCE_SALT',       '?`8qi &:7ssqj3( Q^}j@atoAvHZ8C]?f8PI~+IyClkSU8aexDN)l)8>CQdp/pAW' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
