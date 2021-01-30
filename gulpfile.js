const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const minifyCss = require("gulp-minify-css");
// const babel = require('gulp-babel');


function copyHtml(){
    gulp.src("./src/*.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\2011"));
}

function copyImg(){
    gulp.src("./src/img/*.{jpg,png}")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\2011\\img"))
}


function copyCss(){
    gulp.src("./src/css/**/*")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\2011"))
}

function doJS(){
    gulp.src("./src/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\2011\\js"));
}

function doSass(){
    gulp.src("./src/scss/*.scss")
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\2011\\css"));
}


// 监听

gulp.task("watchall",async ()=>{
    
    gulp.watch("./src/*.html", async ()=>{ copyHtml() });   
    gulp.watch("./src/img/*.{jpg,png}", async ()=>{ copyImg() });   
    gulp.watch("./src/img/*.{jpg,png}", async ()=>{ copyImg() });   
    gulp.watch("./src/css/**/*", async ()=>{ copyCss() });   
    gulp.watch("./src/js/*.js", async ()=>{ doJS() });   
    gulp.watch("./src/scss/*.scss", async ()=>{ doSass() });

});

