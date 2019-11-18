// scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("nav-scroll");
    } else {
        $(".navbar-fixed-top").removeClass("nav-scroll");
    }
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-brand").addClass("nav-scroll-color");
    } else {
        $(".navbar-brand").removeClass("nav-scroll-color");
    }
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-nav > li > a").addClass("menu-scroll-menu");
    } else {
        $(".navbar-nav > li > a").removeClass("menu-scroll-menu");
    }
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-nav").addClass("menu-active");
    } else {
        $(".navbar-nav").removeClass("menu-active");
    }
});
$(window).scroll(function() {
    if ($(".navbar-toggle").offset().top > 50) {
        $(".icon-bar").addClass("toggle-color");
    } else {
        $(".icon-bar").removeClass("toggle-color");
    }
});
