var fs = require('fs');
var memwatch = require('memwatch-next');
var printProcessData = false;
var LOOP_LIMIT = 1000000;
var HALF_LOOP_LIMIT = LOOP_LIMIT/2;

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
    // printProcessData && console.log(process.memoryUsage());
});

memwatch.on('leak', (info) => {
  console.error('memory leak:\n', info);
});

for(var i = 0; i < LOOP_LIMIT; i++) {
    readFile();
    // readFileSync();
    if (i === HALF_LOOP_LIMIT) {
        console.log("run gc");
        global.gc();
    }

    if (i === LOOP_LIMIT - 1) {
        setTimeout(function () {
            console.log("almost finished");
            global.gc();
            printProcessData = true;
        }, 12000);
    }
}

global.gc();
