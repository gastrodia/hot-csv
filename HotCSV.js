/**
 * Created by yang on 14/12/9.
 */
var csv = require('fast-csv');
var fs = require('fs');


var HotCSV  = module.exports = function(file){
    this.file = file;
    this.list = [];
}

HotCSV.prototype.addList = function(data){
    this.list.push(data);
}

HotCSV.prototype.init = function(options,next){
    if(!next){
        next = options
    }else{
        this.options = options;
    }

    var scope = this;
    var loadFile = function(cb){
        csv.fromPath(scope.file,scope.options)
            .on("data", function(data){
                scope.addList(data);
            })
            .on("end", function(){
                if(cb) cb();
            });
    };

    loadFile(next);
    fs.watchFile(scope.file,function (curr, prev) {
        scope.list = [];
        loadFile(function(){
            console.log('reload ' + scope.file + ' success!');
            console.log('now list length is ' + scope.list.length);
            console.log('the current mtime is: ' + curr.mtime);
        });
    });
}

HotCSV.prototype.getList = function(callback){
    return this.list;
}

