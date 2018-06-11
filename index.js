var fs = require('fs');
var memwatch = require('memwatch-next');

function readFile() {
    fs.readFile('file-to-read.txt', function (err, content) {
        // console.log("" + content);
    });
}

function readFileSync() {
    var content = fs.readFileSync('file-to-read.txt');
    // console.log("" + content);
}

memwatch.on('stats', function(stats) { 
    console.log(stats.estimated_base, stats.current_base); 
});

for(var i = 0; i < 1000000; i++) {
    readFile();
    // readFileSync();
    if (i === 500000) {
        console.log("run gc");
        global.gc();
    }
}

global.gc();