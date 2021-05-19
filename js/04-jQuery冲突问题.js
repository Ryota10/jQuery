// 1. 释放 $ 的使用权
//注意: 释放操作必须在编写其他jQuery代码之前编写
//      释放之后就不能再使用 $ , 改为使用jQuery
// jQuery.noConflict();
// jQuery(function () {
//     alert("hello jQuery");
// });

// 2.自定义一个访问符号
var now = jQuery.noConflict();
now(function () {
    alert("hello jQuery 2");
});