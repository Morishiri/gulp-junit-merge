const File = require('vinyl');
const gutil = require('gulp-util');
const through = require('through2');
const junitReportMerger = require('junit-report-merger');

module.exports = function () {
    const reportStrings = [];
    return through.obj(processFile, collect);

    function processFile(file, encoding, callback) {
        if (file.isNull()) {
            callback();
            return;
        }

        if (file.isStream()) {
            this.emit('error', new gutil.PluginError('gulp-junit-merge', 'Streams not supported!'));
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
            path: 'junit.xml'
        });
        file.contents = new Buffer(contents);
        this.push(file);
        callback();
    }
};

