var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		bulkSass 	 = require('gulp-sass-glob-import'),
		autoprefixer = require('gulp-autoprefixer'),
		minifycss    = require('gulp-minify-css'),
		rename       = require('gulp-rename'),
		browserSync  = require('browser-sync').create(),
		jade         = require('gulp-jade'),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglifyjs'),
		sourcemaps = require('gulp-sourcemaps');

gulp.task('browser-sync', ['styles', 'scripts', 'jade', 'images'], function() {
		browserSync.init({
				server: {
						baseDir: "./",
                    directory: true
				},
				notify: false
		});
		
});

gulp.task('styles', function () {
	return gulp.src('dev/scss/*.scss')
    .pipe(sourcemaps.init())
	.pipe(bulkSass())
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))

	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(minifycss())
    .pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.stream());
});

gulp.task('jade', function() {
	return gulp.src('dev/jade/pages/*.jade')
	.pipe(jade({pretty: true}))
	.pipe(gulp.dest('./'));
});
gulp.task('images', function() {
    return gulp.src('dev/img/**/*')
		.pipe(gulp.dest('./img'));
});

gulp.task('scripts', function() {
	return gulp.src('dev/js/**/*')
		// .pipe(concat('libs.js'))
		// .pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./js'));
});

gulp.task('watch', function () {
	gulp.watch('dev/scss/**/*.scss', ['styles']);
	gulp.watch('dev/jade/**/*.jade', ['jade']);
	gulp.watch('dev/js/**/*.js', ['scripts']);
	gulp.watch('dev/js/**/*.js').on("change", browserSync.reload);
	gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
