/**
 * Created by yang on 14/12/9.
 */
var HotCSV = require('./HotCSV');
var util = require('util');

var SimpleHotCSV  = module.exports = function(file){
    this.file = file;
    this.list = [];
    this.options = {headers : ["column1"]}
}

util.inherits(SimpleHotCSV,HotCSV);

SimpleHotCSV.prototype.addList = function(data){
    this.list.push(data.column1);
}

