const mix = require('laravel-mix');

mix.webpackConfig({}).options({
    processCssUrls: false,
    postCss: [
        require('tailwindcss')
    ]
});

mix.sass('input.scss', 'output.css');
