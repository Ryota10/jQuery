// //对比一：
// //原生JS
// window.onload = function (e) {
//     // 通过原生JS入口函数可以拿到DOM元素
//     var img = document.getElementsByTagName("img")[0];
//     console.dir(img);

//     //通过原生JS入口函数 可以 拿到DOM元素的宽高
//     var width = window.getComputedStyle(img).width;
//     console.dir("原生JS onload " + width);

// }

// //jQuery 语法
// $(document).ready(function () {
//     //通过jQuery入口函数可以拿到DOM元素
//     var $img = $("img");
//     console.dir($img);

//     //通过jQuer入口函数 不可以 拿到DOM元素的宽高
//     var $width = $img.width();
//     console.dir("jQuery ready " + $width);
// });


/*  
    1.原生JS和jQuery入口函数可以拿到DOM元素
    2.原生JS和jQuery入口函数加载模式不同
        原生JS会等到DOM元素加载完毕，并且图片页加载完毕才会执行
        jQuery会等到DOM元素加载完毕，But 不会等到图片也加载完毕就会执行
    
    注意：jQuery会打印出宽度是浏览器缓存的影响
*/


//对比二：
//原生JS
//3.原生JS有多个 window.onload 入口函数时只会执行一次, 后面的会覆盖前面的
// window.onload = function () {
//     alert("JS hello one"); // 不会显示
// }
// window.onload = function () {
//     alert("JS hello second"); // 会显示
// }

//jQuery 语法
// 4.jQuery中多个 $(document).ready() 入口函数会执行多次,后面的不会覆盖前面的
$(document).ready(function () {
    alert("jQuery hello one"); //会显示
});
$(document).ready(function () {
    alert("jQuery hello second"); // 会显示
});