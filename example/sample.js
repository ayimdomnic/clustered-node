'use strict';

/**
 * Created by ayimdomnic on 2016-09-25.
 */
var http    = require("http");
var clustered_node = require("./../lib");
var config = require("./config");

var server = http.createServer(function(req, res){
    res.end("Hello World");
});

function runServer() {
    return http.createServer(function(req, res){
        res.end("Hello World");
    });
};

clustered_node.listen(config, server);
//clustered_node.run(config, runServer);