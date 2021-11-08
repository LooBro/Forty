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