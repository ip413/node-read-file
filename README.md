# Test for memory management of fs module, for async and sync read
* Memory could be measured with:

```watch -n 1 'pmap -p \$(pgrep node) | tail -n -1 | cut -c 10- | tee -a result.txt'```

or

```top | watch node```

* Run test with:

```npm start```

* Test has no npm dependencies.

* Switch between sync, async, number of read directly in code.

* WARNING: 10^5 async reads could consume 12GB of memory, so be careful with numbers.

* Results for node 6 and 12:

![](https://github.com/ip413/node-read-file/blob/master/docs/data.png)

* Results for different amount of reads, node 6.17.1:

![](https://github.com/ip413/node-read-file/blob/master/docs/read.png)

* Results for different file size (10, 20, 40, 80 KB)

![](https://github.com/ip413/node-read-file/blob/master/docs/file-size.png)

* Results for very log wait - 1 hour

![](https://github.com/ip413/node-read-file/blob/master/docs/one-hour.png)
