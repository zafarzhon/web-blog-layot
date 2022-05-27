const gulp = require('gulp')
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();



gulp.task('sassToCss', () => {
    return gulp.src('app/sass/main.sass')
        .pipe(sass({
            errorLogToConsole: true
        }))
        .on('error', console.error.bind(console))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public/css/'));
});


gulp.task('minifyJs', function () {
    return pipeline(
        gulp.src('app/js/*.js'),
        uglify(),
        rename({
            suffix: '.min'
        }),
        gulp.dest('public/js/')
    );
});


gulp.task('minifyImg', () => {
    return gulp.src('app/img/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/img/'))
});


gulp.task('serve', () => {
    browserSync.init({
        server: 'public'
    });
    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});


gulp.task('watchFiles', () => {
    gulp.watch('app/sass/*.sass', gulp.series('sassToCss'));
    gulp.watch('app/js/*.js', gulp.series('minifyJs'));
    gulp.watch('app/img/*.*', gulp.series('minifyImg'));
});


gulp.task('watch', async function () {
    return gulp.series('watchFiles');
});


gulp.task('default', gulp.parallel('watchFiles', 'serve'));