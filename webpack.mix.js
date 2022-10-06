const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.options({
    hmrOptions: {
        host: 'localhost',  // site's host name
        port: 5000,
    }
});


mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': __dirname + '/resources/js',
            '~': __dirname + '/resources/js/pages',
        },
    },
    devServer: {
        hot: true,
        proxy: {
            '*': 'http://localhost:8000'
        }
    }
})


mix.js('resources/js/app.js', 'public/js')
    .vue({

    })
    .sass('resources/sass/app.scss', 'public/css');
