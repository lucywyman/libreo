var gulp = require("gulp");
var traceur = require("gulp-traceur");
var mocha = require("gulp-mocha");

gulp.task('build', function() {
	return gulp.src("modules/**/*.js")
		.pipe(traceur())
		.pipe(gulp.dest("build/modules"));
});

gulp.task('build.tests', function() {
	return gulp.src("tests/**/*.js")
		.pipe(traceur())
		.pipe(gulp.dest("build/tests"));
});

gulp.task("test", ["build", "build.tests"], function() {
	return gulp.src("build/test/**/*.js")
		.pipe(mocha());
});

gulp.task("test.watch", ['build', 'build.tests', 'test'], function() {
	return gulp.watch(["modules/**/*.js", "test/**/*.js"], ["test"]);  
});
