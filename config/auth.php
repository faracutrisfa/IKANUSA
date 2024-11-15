<?php

return [

    /*
    |---------------------------------------------------------------------------
    | Authentication Defaults
    |---------------------------------------------------------------------------
    |
    | This option defines the default authentication "guard" and password
    | reset "broker" for your application. You may change these values
    | as required, but they're a perfect start for most applications.
    |
    */

    'defaults' => [
        'guard' => env('AUTH_GUARD', 'web'), // Bisa diubah sesuai dengan kebutuhan
        'passwords' => env('AUTH_PASSWORD_BROKER', 'users'),
    ],

    /*
    |---------------------------------------------------------------------------
    | Authentication Guards
    |---------------------------------------------------------------------------
    |
    | Define every authentication guard for your application. For example:
    | - 'web' for default users (admin)
    | - 'buyer' for pembeli (buyer)
    */

    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],

        'admin' => [
            'driver' => 'session',
            'provider' => 'users', // Model User untuk admin
        ],

        'buyer' => [
            'driver' => 'session',
            'provider' => 'buyers', // Model Buyer untuk pembeli
        ],
    ],

    /*
    |---------------------------------------------------------------------------
    | User Providers
    |---------------------------------------------------------------------------
    |
    | Providers define how users are retrieved from your database or other
    | storage systems. Define both 'users' for admin and 'buyers' for pembeli.
    */

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => env('AUTH_MODEL', App\Models\User::class),
        ],

        'buyers' => [
            'driver' => 'eloquent',
            'model' => App\Models\Buyer::class, // Model untuk pembeli
        ],
    ],

    /*
    |---------------------------------------------------------------------------
    | Password Reset Configuration
    |---------------------------------------------------------------------------
    |
    | Configure password reset functionality for both users (admin) and buyers.
    */

    'passwords' => [
        'users' => [
            'provider' => 'users',
            'table' => env('AUTH_PASSWORD_RESET_TOKEN_TABLE', 'password_reset_tokens'),
            'expire' => 60,
            'throttle' => 60,
        ],

        'buyers' => [
            'provider' => 'buyers',
            'table' => env('AUTH_PASSWORD_RESET_TOKEN_TABLE', 'password_reset_tokens'),
            'expire' => 60,
            'throttle' => 60,
        ],
    ],

    /*
    |---------------------------------------------------------------------------
    | Password Confirmation Timeout
    |---------------------------------------------------------------------------
    |
    | Here you may define the amount of seconds before a password confirmation
    | window expires. By default, it lasts for three hours.
    |
    */

    'password_timeout' => env('AUTH_PASSWORD_TIMEOUT', 10800),

];