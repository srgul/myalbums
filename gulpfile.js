const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-csso');
const minifyJs = require('gulp-uglify')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create()

gulp.task('css', () => {
  return gulp.src('assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(autoprefixer())
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('public/stylesheets'))
    .pipe(browserSync.stream());
})

gulp.task('js', () => {
  return gulp.src('assets/js/**/*.js')
    .pipe(concat('app.min.js'))
    .pipe(minifyJs())
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.stream());
})

gulp.task('watch', () => {
  gulp.watch('assets/js/**/*.js', gulp.series('js'));
  gulp.watch('assets/sass/**/*.scss', gulp.series('css'));
})