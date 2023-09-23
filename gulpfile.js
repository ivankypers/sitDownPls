const {src, dest, series, watch} = require('gulp')

const concat = require('gulp-concat')
const htmlMin = require('gulp-htmlmin')
const cleanCss = require('gulp-clean-css')
const autoprefixes = require('gulp-autoprefixer')

const htmlMinify = () => {
    src('src/**/*.html')
        .pipe(htmlMin ({
            collapseWhitespace: true,
    }))
        .pipe(dest('dist'))
}

const styles = () => {
    src('src/styles/**/*.css')
        .pipe(concat('main.css'))
        .pipe(autoprefixes({
            cascade: false,
        }))
        .pipe(cleanCss({
            level: 2,
        }))
        .pipe(dest('dist'))
}


exports.default = series(htmlMinify, styles)
