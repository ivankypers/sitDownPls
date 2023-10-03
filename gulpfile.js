const {src, dest, series, watch} = require('gulp')

const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const cleanCss = require('gulp-clean-css');
const autoprefixes = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const del = require('del');
const image = require('gulp-image');
const environments = require('gulp-environments');
const development = environments.development;
const production = environments.production;
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require("gulp-notify");

const clean = () => {
    return del(['dist'])
}

const htmlMinify = () => {
    return src('src/**/*.html')
        .pipe(development(sourcemaps.init()))
        .pipe(htmlMin ({
            collapseWhitespace: true,
    }))
        .pipe(development(sourcemaps.write()))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}

const styles = () => {
    return src([
        'src/styles/components/**/*.css',
        'src/styles/*.css'])
        .pipe(development(sourcemaps.init()))
        .pipe(concat('main.css'))
        .pipe(autoprefixes({
            cascade: false,
        }))
        .pipe(cleanCss({
            level: 2,
        }))
        .pipe(development(sourcemaps.write()))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}

const filterStyles = () => {
    return src('src/styles/filters.css')
        .pipe(development(sourcemaps.init()))
        .pipe(concat('filters.css'))
        .pipe(autoprefixes({
            cascade: false,
        }))
        .pipe(cleanCss({
            level: 2,
        }))
        .pipe(development(sourcemaps.write()))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}

const scripts = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/*.js'
    ])
        .pipe(development(sourcemaps.init()))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('app.js'))
        .pipe(uglify({
            toplevel: true,
        }).on('error', notify.onError))
        .pipe(development(sourcemaps.write()))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}

const images = () => {
    return src([
        './src/images/**.jpg',
        './src/images/**.png',
        './src/images/**.jpeg',
        './src/images/*.svg',
        './src/images/**/*.jpg',
        './src/images/**/*.png',
        './src/images/**/*.jpeg'
    ])
        .pipe(image())
        .pipe(dest('dist/images'))
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: `dist`
        }
    })
}

watch('src/**/*.html', htmlMinify)
watch("src/**/*.css", styles)
watch('src/js/**/*.js', scripts)

exports.default = series(clean, htmlMinify, styles, filterStyles, scripts, images, watchFiles)
