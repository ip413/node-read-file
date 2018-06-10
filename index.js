var fs = require('fs');
var path = require('path');
var memwatch = require('memwatch-next');

memwatch.on('stats', function(stats) {
// do something with post-gc memory usage stats
});

function readFile() {
    var fileContent = fs.readFile(path.resolve('file-to-read.txt'), function (err, buffer) {
        // console.log("" + content);
        var content = buffer;
        content = null;
    });
}


memwatch.on('stats', function(stats) { console.log(stats.estimated_base, stats.current_base); });

for(var i = 0; i < 1000000; i++) {
    readFile()
    if (i === 500000) {
        console.log("run gc");
        global.gc();

    }
}

