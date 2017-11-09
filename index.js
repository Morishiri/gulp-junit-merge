const gutil = require('gulp-util');
const File = gutil.File;
const through = require('through2');
const junitReportMerger = require('junit-report-merger');

module.exports = function ({ filename = 'junit.xml' } = {}) {
    const reportStrings = [];
    return through.obj(processFile, collect);

    function processFile(file, encoding, callback) {
        if (file.isNull()) {
            callback();
            return;
        }

        if (file.isStream()) {
            this.emit('error', new gutil.PluginError('gulp-junit-merge', 'Streams not supported!'));
            callback();
            return;
        }

        reportStrings.push(file.contents.toString());
        callback();

    }

    function collect(callback) {
        if (reportStrings.length === 0) {
            callback();
            return;
        }

        const contents = junitReportMerger.mergeToString(reportStrings);
        const file = new File({
            path: filename
        });
        file.contents = new Buffer(contents);
        this.push(file);
        callback();
    }
};

