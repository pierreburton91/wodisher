const gulp = require("gulp");

gulp.task("move", () => {
  return gulp.src("dist/**").pipe(gulp.dest("docs"));
});
