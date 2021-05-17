// //原生JS语法书写
// window.onload = function (ev) {
//     // 利用原生的JS查找DOM元素
//     var divTag = document.getElementsByTagName("div");
//     var divId = document.getElementById("box-2");
//     var divClass = document.getElementsByClassName("box-3");
//     console.dir(divTag);
//     console.dir(divId);
//     console.dir(divClass);
//
//     //利用原生的JS修改背景颜色
//     divTag[0].style.backgroundColor = "pink";
//     divId.style.backgroundColor = "yellow";
//     divClass[0].style.backgroundColor = "blue";
// }

//jQuery 语法书写
//未使用缩写格式
// $(document).ready(function () {

// });

//使用缩写格式
$(function () {
    //获取Jquery对象
    var $divTag = $("div")[0];
    var $divId = $("#box-2");
    var $divClass = $(".box-3");

    //设置对象的背景色
    $($divTag).css({
        "backgroundColor": "yellow"
    });
    $($divId).css({
        "backgroundColor": "blue"
    });
    $($divClass).css({
        "backgroundColor": "pink"
    });

    //链式操作
    $($("div")[2]).css({
        "backgroundColor": "green"
    });
})