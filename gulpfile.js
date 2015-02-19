var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    jade = require('gulp-jade'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

gulp.task('sass', function () {
    return gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(reload({stream:true}));
});

gulp.task('jade2html',function(){
    gulp.src('*.jade')
    .pipe(jade())
    .pipe(gulp.dest(''))
})

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass','jade2html','browser-sync'], function() {
    gulp.src('css/*.css')
        .pipe(concatCSS("bundle.css"))
        .pipe(minifyCSS())
        .pipe(rename('bundle.min.css'))
        .pipe(gulp.dest('app/'));
    gulp.watch("css/*.scss", ['sass']);
});
