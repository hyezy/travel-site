var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');


gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
		//2. adding autoprefixer
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		//1. having a one pipe gulp.src to gulp.dest
		.pipe(gulp.dest('./app/temp/styles'));

});