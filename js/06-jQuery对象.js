$(function () {
    /* 1.jQuery对象是一个 伪数组
       伪数组：有 "0-(length-1)" 的属性， 并且有 "length" 属性
     */
    var $div = $("div");
    console.dir($div);

    var arr = [9, 8, 7];
    console.dir(arr);
});