// webpack.mix.js

let mix = require('laravel-mix');

require('laravel-mix-svelte');

mix.js('src/app.js', 'dist').setPublicPath('dist');



mix.js('resources/js/app.js', 'public/js')
    // .sass('resources/sass/app.scss', 'public/css')
    .svelte({
        dev: !mix.inProduction()
    });