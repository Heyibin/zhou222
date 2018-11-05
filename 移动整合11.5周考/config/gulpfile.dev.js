const gulp = require("gulp");
const browserify = require("gulp-browserify");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const cleanCss = require("gulp-clean-css");
const webserver = require("gulp-webserver");


gulp.task("js", () => {
    gulp.src("./src/**/*.js")
        .pipe(browserify({
            inseryGlobals: true,
            debug: !gulp.env.production
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist"))
})

gulp.task("css", () => {
    gulp.src("./src/**/*.css")
        .pipe(autoprefixer({
            browsers: ["last 2 versions"],
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest("dist"))
})

gulp.task("sass", () => {
    gulp.src("../src/**/*.scss")

    .pipe(autoprefixer({
            browsers: ["last 2 versions"],
        }))
        .pipe(sass())

    .pipe(gulp.dest("dist"))
})
gulp.task("page", () => {
    gulp.src("./src/**/*.html")

    .pipe(gulp.dest("dist"))
})

gulp.task("server", ["default"], function() {
    gulp.src("./src")
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: '/page/index.html',
            host: '127.0.0.1',
            port: '8088',
        }))
})
gulp.task("default", ["page", "js", "css", "sass"], () => {
    console.log(11)
})