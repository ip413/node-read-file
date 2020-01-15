# Test for memory management of fs module, for async and sync read
* Memory could be measured with:

```watch -n 1 'pmap -p \$(pgrep node) | tail -n -1 | cut -c 10- | tee -a result.txt'```

or

```top | watch node```

* Run test with:

```npm start```

* Test has no npm dependencies.


* Results for node 6 and 12:

![](https://github.com/ip413/node-read-file/blob/master/docs/data.png)

* Results different amount of reads, node 6.17.1:

![](https://github.com/ip413/node-read-file/blob/master/docs/read.png)
