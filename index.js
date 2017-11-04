const File = require('vinyl');
const through = require('through2');
const junitReportMerger = require('junit-report-merger');

module.exports = function () {
    const reportStrings = [];
    return through.obj(processFile, collect);

    function processFile(file, encoding, callback) {
        reportStrings.push(file.contents.toString());
        callback();
    }

    function collect(callback) {
        const contents = junitReportMerger.mergeToString(reportStrings);
        const file = new File({
            path: 'junit.xml'
        });
        file.contents = new Buffer(contents);
        this.push(file);
        callback();
    }
};

