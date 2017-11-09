const fs = require('fs');
const gulp = require('gulp');
const assert = require('chai').assert;
const streamAssert = require('stream-assert');
const File = require('vinyl');
const junitMerge = require('../index');

const expectedMergedResult = fs.readFileSync(`${__dirname}/fixtures/result.xml`);

describe('gulp-junit-merge', () => {
    describe('null files', () => {
        it('should ignore null files', function (done) {
            const stream = junitMerge();
            stream
                .pipe(streamAssert.length(0))
                .pipe(streamAssert.end(done));
            stream.write(new File());
            stream.end();
        });
    });

    describe('in stream mode', () => {
        it('should throw about unsupported streams', (done) => {
            gulp.src([`${__dirname}/fixtures/input1.xml`, `${__dirname}/fixtures/input2.xml`], { buffer: false })
                .pipe(junitMerge())
                .once('error', (err) => {
                    assert.equal(err.message, 'Streams not supported!');
                    done();
                });
        });
    });

    describe('in buffer mode', () => {
        it('should return one file', (done) => {
            gulp.src([`${__dirname}/fixtures/input1.xml`, `${__dirname}/fixtures/input2.xml`])
                .pipe(junitMerge())
                .pipe(streamAssert.length(1))
                .pipe(streamAssert.end(done));
        });

        it('should return file with content of all input files', (done) => {
            gulp.src([`${__dirname}/fixtures/input1.xml`, `${__dirname}/fixtures/input2.xml`])
                .pipe(junitMerge())
                .pipe(streamAssert.first((d) => { assert.equal(d.contents.toString(), expectedMergedResult.toString()); }))
                .pipe(streamAssert.end(done));
        });

        it('should contain testsuites tag containing merged info about results', (done) => {
            gulp.src([`${__dirname}/fixtures/input1.xml`, `${__dirname}/fixtures/input2.xml`])
                .pipe(junitMerge())
                .pipe(streamAssert.first((d) => { assert.include(d.contents.toString(), '<testsuites tests="4" failures="2" errors="0">'); }))
                .pipe(streamAssert.end(done));
        });
    });
});