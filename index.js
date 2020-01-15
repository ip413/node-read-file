var fs = require('fs');

var LOOP_LIMIT = 10e3;
var HALF_LOOP_LIMIT = LOOP_LIMIT/2;

function readFile() {
    fs.readFile('file-to-read.txt', function (err, _content) {
        // console.log("" + _content.length);
        // = undefined; = null; delete - all those have no impact on memory usage here 
        var content = _content;
    });
}

function readFileSync() {
    // console.log("" + _content.length);
    // = undefined; = null; delete - all those have no impact on memory usage here 
    var content = fs.readFileSync('file-to-read.txt');
}

function loop() {
    for (var i = 0; i < LOOP_LIMIT; i++) {
        readFile();
        // readFileSync();
        if (i === HALF_LOOP_LIMIT) {
            console.log("run gc");
            global.gc();
        }

        if (i === LOOP_LIMIT - 1) {
            global.gc();
            console.log("almost finished");

            setInterval(function () {
                global.gc();
                console.log(new Date());
            }, 1000);

        }
    }
}

// nice to have timeout for catching initial memory size
setTimeout(loop, 2000);
global.gc();
