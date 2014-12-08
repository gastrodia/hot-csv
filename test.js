/**
 * Created by yang on 14/12/8.
 */
var SimpleHotCSV = require('./index').SimpleHotCSV;
var HotCSV = require('./index').HotCSV;
var path = require('path');
var hostCityList = path.join(__dirname,'./whiteCityList.csv');

var hotCity1 = new SimpleHotCSV(hostCityList);
hotCity1.init(function(){
    setInterval(function(){
        console.log('simpleHotCity length ' + hotCity1.getList().length)
    },1000);
});

var hotCity2 = new HotCSV(hostCityList);
hotCity2.init( {headers : ["column1"]},function(){
    setInterval(function(){
        console.log('hotCity length ' + hotCity1.getList().length)
    },1000);
});
