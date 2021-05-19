//$() 或者 jQuery()  就代表调用 jQuery 的核心函数

//1.接收一个函数
$(function () {
    alert("hello jQuery 1");
    //2.接收一个字符串
    //2-1.接收一个字符串选择器
    //会返回一个 jQuery 对象， 对象中保存了 找到的 DOM 元素
    var $box1 = $("#box-1");
    var $box2 = $(".box-2");
    console.dir($box1);
    console.dir($box2);

    //2-2.接收一个代码片段
    //会返回一个 jQuery 对象， 对象中保存了 创建的 DOM 元素
    $span = $("<span>test span </span>");
    console.dir($span);
    $box1.append($span);

    //3.接收一个DOM元素
    //会被包装成一个 jQuery 对象返回给我们
    var p = document.getElementsByTagName("p")[0];
    console.dir(p); //DOM 元素
    var $p = $(p);
    console.dir($p);
});