// webpack.mix.js

let mix = require('laravel-mix');

// https://laravel-mix.com/extensions/svelte
require("laravel-mix-svelte");

// leave empty if you need to handle multiple package dirs
mix.setPublicPath('');

// compilation of js, 'input folder','output folder'
mix.js('packages/svelte-demo/Resources/Private/JavaScript/main.js', 'packages/svelte-demo/Resources/Public/CompiledJavaScript/main.js');

// add svelte support
mix.svelte({
    dev: !mix.inProduction()
});

// TODO: add sass support?
/*
mix.sass('src/app.scss','dist').options({
    // https://laravel.com/docs/8.x/mix#url-processing
    processCssUrls: false
});*/

// https://github.com/drud/ddev-browsersync#laravel-mix-configuration
mix.browserSync({
    proxy: "localhost",
    open: false,
    ui: false
});