$(window).scroll(function(){
    $(".header_background").css("background-position-y", $(window).scrollTop() / 1.5);
    console.log($(window).scrollTop());
    if($(window).scrollTop() > $(".header").height()){
        $(".header_menu").addClass("fixed");
        $(".header_menu_logo").addClass("fixed");
        $(".header_menu_hamburger").addClass("fixed");
        $(".header_menu_logo_style1").css("color", "#2a2f4a");
    }
    else{
        $(".header_menu").removeClass("fixed");
        $(".header_menu_logo").removeClass("fixed");
        $(".header_menu_hamburger").removeClass("fixed");
        $(".header_menu_logo_style1").css("color", "#8d82c4");
    }
});
$(".button_learn").click(function(){
    location.href = "learn.html";
});
$(".get_started_button").click(function(){
    location.href = "learn.html";
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