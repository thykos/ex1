var gulp = require('gulp'),
    concatCSS = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    jade = require('gulp-jade');

gulp.task('default', function() {
    gulp.src('css/*.css')
        .pipe(concatCSS("bundle.css"))
        .pipe(minifyCSS())
        .pipe(rename('bundle.min.css'))
        .pipe(gulp.dest('app/'));
});

gulp.task('watch', function(){
    gulp.watch('css/*.css',['default'])
    
})

gulp.task('sass',function(){
    gulp.src('css/style.scss')
        .pipe(sass())
})

gulp.task('jade2html',function(){
    gulp.src('*.jade')
    .pipe(jade())
    .pipe(gulp.dest(''))
})