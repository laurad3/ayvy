var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var jsFOLDER = 'src/js/';
var jsFILES = ['ayvy.js'];

gulp.task('default', ['sass', 'js', 'watch']);

gulp.task('sass', function () {
	return gulp.src('src/scss/**/*.scss') // our file
		.pipe(sass({
			outputStyle: 'compressed', // nested | compact | exanded | compressed
			includePaths: ['node_modules/breakpoint-sass/stylesheets'] // include breakpoint
		}).on('error', sass.logError))
		.pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // autoprefixer
		.pipe(gulp.dest('./frontend/css')); // or './[destination]'
});

gulp.task('watch', function () { 
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('js', function () {
	jsFILES.map(function (entry) {
		return browserify({
			entries: [jsFOLDER + entry],
			debug: true
		})
		.transform(babelify, { presets: ['env'] })
		.bundle()
		.on('error', function (err) {
			console.log(err.stack);
		})
		.pipe(source(entry))
		.pipe(gulp.dest('./frontend/js'))
	});
});