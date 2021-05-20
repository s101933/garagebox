<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'LOTR');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '25&z%/zS{`~I6Cvp9_Y~RCFBTyzKY~o7spG9$q`Fu-v]8lp#BU3r *$|_]3sY5AI');
define('SECURE_AUTH_KEY',  'a7}Of1M~2>q{taC-j?TFiih#hV0bf}KBa=ZW%$YlNT?XgY;YYb8]iwv)Zdb%I:8U');
define('LOGGED_IN_KEY',    'Y[R4G6m|a7jQjexxygXeR2V+bN0>,aV p^B5+1l+PolpJTl(Ifa~zl=*f;BI6K^x');
define('NONCE_KEY',        ';@S1?>[ea05m$TqE(Ubu2pou(4X7e1)0n+_ J1UOt 28p~&C*SGuPX1U8s*!K)qa');
define('AUTH_SALT',        'v-eS<D@F~rai?f+c1ufF<Y1sdP4!=B)bhYij=;VReU4qHu)&B5kEi ceNB<:FVC%');
define('SECURE_AUTH_SALT', 'Qsvojd?Y~/]0o%8A6.@~?3)^)K=]M[M8.XPRd<lq.^:aJH=aP9.cjQP!m).Vj]yN');
define('LOGGED_IN_SALT',   'T;|FvNjPqo.J1H,OMHxPsrL9jQ,@S= eU$6/a~dfX!iXb/Z7NT^S*$?oRJZhZ6*o');
define('NONCE_SALT',       '!DBpXWD(C;DW<qd!L86^&>Pg~R)J|*VyUJvB,j.A_AW?EtH!T;e_4W5-B7aH.n;h');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
