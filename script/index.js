$(window).scroll(function(){
    $(".header_background").css("background-position-y", $(window).scrollTop() / 1.5);
    console.log($(window).scrollTop());
    if($(window).scrollTop() > $(".header").height()){
        $(".header_menu").addClass("fixed");
        $(".header_menu_logo").addClass("fixed");
        $(".header_menu_hamburger").addClass("fixed");
    }
    else{
        $(".header_menu").removeClass("fixed");
        $(".header_menu_logo").removeClass("fixed");
        $(".header_menu_hamburger").removeClass("fixed");
    }
});
$(document).ready(function(){
    $("#fst_layer div:nth-child(1)").css("width", "40%");
    $("#fst_layer div:nth-child(1)").css("background-image", "url(\"image/img1.jpg\")");
    $("#fst_layer div:nth-child(2)").css("width", "60%");
    $("#fst_layer div:nth-child(2)").css("background-image", "url(\"image/img2.jpg\")");
    $("#scd_layer div:nth-child(1)").css("width", "60%");
    $("#scd_layer div:nth-child(1)").css("background-image", "url(\"image/img3.jpg\")");
    $("#scd_layer div:nth-child(2)").css("width", "40%");
    $("#scd_layer div:nth-child(2)").css("background-image", "url(\"image/img4.jpg\")");
    $("#trd_layer div:nth-child(1)").css("width", "40%");
    $("#trd_layer div:nth-child(1)").css("background-image", "url(\"image/img5.jpg\")");
    $("#trd_layer div:nth-child(2)").css("width", "60%");
    $("#trd_layer div:nth-child(2)").css("background-image", "url(\"image/img6.jpg\")");
});
$(".main_layer").click(function(){
    location.href = "detail.html";
});
$(".header_menu_hamburger").click(function(){
    $(".menu").addClass("opened");
    $(".wrap").addClass("menu_opened");
});
$(".menu_close").click(function(){
    $(".menu").removeClass("opened");
    $(".wrap").removeClass("menu_opened");
});
$("#menu_home").click(function(){
    location.href = "index.html";
});
$("#menu_landing").click(function(){
    location.href = "detail.html";
});
$("#menu_generic").click(function(){
    location.href = "learn.html";
});
