var gulp = require('gulp')
var sass = require('gulp-sass')
gulp.task('scss', () => {
    gulp.src('public/current/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/dist/css'))
})
gulp.task('default', ['scss'], () => {
    console.log('task start')
})