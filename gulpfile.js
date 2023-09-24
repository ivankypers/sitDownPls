const {src, dest, series, watch} = require('gulp')

const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const cleanCss = require('gulp-clean-css')
const autoprefixes = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create();
const del = require('del')
const image = require('gulp-image')

const clean = () => {
    return del(['dist'])
}

const htmlMinify = () => {
    return src('src/**/*.html')
        .pipe(htmlMin ({
            collapseWhitespace: true,
    }))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}

const styles = () => {
    return src('src/styles/**/*.css')
        .pipe(concat('main.css'))
        .pipe(autoprefixes({
            cascade: false,
        }))
        .pipe(cleanCss({
            level: 2,
        }))
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

exports.default = series(clean, htmlMinify, styles, images, watchFiles)
