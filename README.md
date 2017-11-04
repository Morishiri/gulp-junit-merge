# gulp-junit-merge

Simple gulp plugin using [junit-report-merger](https://github.com/bhovhannes/junit-report-merger) underneath.

## Usage example

```
const gulp = require('gulp');
const merger = require('gulp-junit-merge');

gulp.task('merge', () => {
    return gulp.src('./reports/**/junit.xml')
        .pipe(merger())
        .pipe(gulp.dest('./reports/merged'));
});
```
