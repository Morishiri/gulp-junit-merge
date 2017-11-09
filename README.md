# gulp-junit-merge
[![npm version](https://badge.fury.io/js/gulp-junit-merge.svg)](https://badge.fury.io/js/gulp-junit-merge)
[![Build Status](https://travis-ci.org/Morishiri/gulp-junit-merge.svg?branch=master)](https://travis-ci.org/Morishiri/gulp-junit-merge)
[![Coverage Status](https://coveralls.io/repos/github/Morishiri/gulp-junit-merge/badge.svg?branch=master)](https://coveralls.io/github/Morishiri/gulp-junit-merge?branch=master)
[![Build status](https://ci.appveyor.com/api/projects/status/tqi2iucxaaubfcus/branch/master?svg=true)](https://ci.appveyor.com/project/Morishiri/gulp-junit-merge/branch/master)

*Simple gulp plugin using [junit-report-merger](https://github.com/bhovhannes/junit-report-merger) underneath.*

## Usage example

### Default usage

```
const gulp = require('gulp');
const merger = require('gulp-junit-merge');

gulp.task('merge', () => {
    return gulp.src('./reports/**/junit.xml')
        .pipe(merger())
        .pipe(gulp.dest('./reports/merged'));
});
```
