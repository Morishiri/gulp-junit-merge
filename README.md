# gulp-junit-merge
[![GitHub license](https://img.shields.io/github/license/Morishiri/gulp-junit-merge.svg)](https://github.com/Morishiri/gulp-junit-merge/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/gulp-junit-merge.svg)](https://www.npmjs.com/package/gulp-junit-merge)
[![npm](https://img.shields.io/npm/dt/gulp-junit-merge.svg)](https://www.npmjs.com/package/gulp-junit-merge)
[![Build Status](https://travis-ci.org/Morishiri/gulp-junit-merge.svg?branch=master)](https://travis-ci.org/Morishiri/gulp-junit-merge)
[![Windows build status](https://ci.appveyor.com/api/projects/status/tqi2iucxaaubfcus/branch/master?svg=true)](https://ci.appveyor.com/project/Morishiri/gulp-junit-merge/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/Morishiri/gulp-junit-merge/badge.svg?branch=master)](https://coveralls.io/github/Morishiri/gulp-junit-merge?branch=master)

[![Known Vulnerabilities](https://snyk.io/test/github/morishiri/gulp-junit-merge/badge.svg)](https://snyk.io/test/github/morishiri/gulp-junit-merge)
[![dependencies Status](https://david-dm.org/Morishiri/gulp-junit-merge/status.svg)](https://david-dm.org/Morishiri/gulp-junit-merge)
[![devDependencies Status](https://david-dm.org/Morishiri/gulp-junit-merge/dev-status.svg)](https://david-dm.org/Morishiri/gulp-junit-merge?type=dev)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

[![bitHound Overall Score](https://www.bithound.io/github/Morishiri/gulp-junit-merge/badges/score.svg)](https://www.bithound.io/github/Morishiri/gulp-junit-merge)
[![bitHound Code](https://www.bithound.io/github/Morishiri/gulp-junit-merge/badges/code.svg)](https://www.bithound.io/github/Morishiri/gulp-junit-merge)

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

### With options

```
const gulp = require('gulp');
const merger = require('gulp-junit-merge');

gulp.task('merge', () => {
    return gulp.src('./reports/**/junit.xml')
        .pipe(merger({
            filename: 'junit-global.xml'
        }))
        .pipe(gulp.dest('./reports/merged'));
});
```

#### Available options

- `filename` - emmited file will have the name provided
