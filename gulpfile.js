const gulp = require("gulp");
const clean = require('gulp-clean');

gulp.task("move", () => gulp.src("dist/**").pipe(gulp.dest("docs")));

gulp.task("clean", () => gulp.src("docs", { read: false }).pipe(clean()));

gulp.task("build", gulp.series(["clean", "move"]));
