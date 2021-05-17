//原生JS
window.onload = function (e) {
    // 通过原生JS入口函数可以拿到DOM元素
    var img = document.getElementsByTagName("img")[0];
    console.dir(img);

    //通过原生JS入口函数可以拿到DOM元素的宽高
    var width = window.getComputedStyle(img).width;
    console.dir("原生JS onload " + width);

}

//jQuery 语法
$(document).ready(function () {
    //通过jQuery入口函数可以拿到DOM元素
    var $img = $("img");
    console.dir($img);

    //通过jQuer入口函数不可以拿到DOM元素的宽高
    var $width = $img.width();
    console.dir("jQuery ready " + $width);
});


/*  原生JS和jQuery入口看书可以拿到DOM元素
    原生JS会等到DOM元素加载完毕，并且图片页加载完毕才会执行
    jQuery会等到DOM元素加载完毕，But 不会等到图片也加载完毕就会执行
    
    注意：jQuery会打印出宽度是浏览器缓存的影响
*/