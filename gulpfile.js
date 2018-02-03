var gulp = require('gulp')
var sass = require('gulp-sass')
var uglify = require('gulp-uglify')
gulp.task('scss', () => {
    console.log('change scss')
    gulp.src('public/current/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/dist/css'))
})
gulp.task('js', () => {
    console.log('change js')
    gulp.src('public/current/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/js'))
})
gulp.task('watch', () => {
    gulp.watch('public/current/scss/**/*.scss', ['scss'])
    gulp.watch('public/current/js/*.js', ['js'])
})
gulp.task('default', ['scss', 'js', 'watch'], () => {
    console.log('task start')
})