var fs = require('fs');
var path = require('path');
var memwatch = require('memwatch-next');

function readFile() {
    fs.readFile(path.resolve('file-to-read.txt'), function (err, buffer) {
        buffer = null;
    });
}

function readFileSync() {
    var fileContent = fs.readFileSync(path.resolve('file-to-read.txt'));
}

memwatch.on('stats', function(stats) { 
    console.log(stats.estimated_base, stats.current_base); 
});

for(var i = 0; i < 1000000; i++) {
    readFileSync();
    if (i === 500000) {
        console.log("run gc");
        global.gc();
    }
}

global.gc();