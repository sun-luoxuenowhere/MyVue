var v1 = document.getElementById("v1");
var v2 = document.getElementById("v2");
var btn = document.getElementById("btn");
var res = document.getElementById("res");
// 引入add方法
// var add = require("./calc.js");
 import add from "./calc.js";
import"../statics/css/site.css";
import"../statics/css/site1.scss";
import"../statics/css/site2.less";
btn.onclick = function() {
    var v1value = parseFloat(v1.value);
    var v2value = parseFloat(v2.value);
    res.value = add(v1value, v2value);
}
