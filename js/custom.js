//$(document).ready(function () {
//// Add smooth scrolling to all links in navbar + footer link
//    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
//
//// Prevent default anchor click behavior
//        event.preventDefault();
//        // Store hash
//        var hash = this.hash;
//        // Using jQuery's animate() method to add smooth page scroll
//        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
//        $('html, body').animate({
//            scrollTop: $(hash).offset().top
//        }, 900, function () {
//
//// Add hash (#) to URL when done scrolling (default click behavior)
//            window.location.hash = hash;
//        });
//    });
//});
//
//jQuery(function ($) {
//
//    //Initiat WOW JS
//    new WOW().init();
//    //smoothScroll
//    smoothScroll.init();
//
//    // Progress Bar
//    $('#skillstest').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
//        if (visible) {
//            $.each($('div.progress-bar'), function () {
//                $(this).css('width', $(this).attr('aria-valuetransitiongoal') + '%');
//            });
//            $(this).unbind('inview');
//        }
//    });
//});
//
//$(document).ready(function () {
//    var myButton = $('#mybutton');
//    var userFeed = new Instafeed({
//        get: 'user',
//        userId: '4828631159',
//        accessToken: '4828631159.1677ed0.79cec29b3ab94404ad45f640b87dc4ef',
//        limit: '8',
//        sortBy: 'most-recent',
//        after: function () {
//            var images = $("#instafeed").find('a');
//            $.each(images, function (index, image) {
//                var delay = (index * 75) + 'ms';
//                $(image).css('-webkit-animation-delay', delay);
//                $(image).css('-moz-animation-delay', delay);
//                $(image).css('-ms-animation-delay', delay);
//                $(image).css('-o-animation-delay', delay);
//                $(image).css('animation-delay', delay);
//                $(image).addClass('animated flipInX');
//            });
//
//        },
//        template: ' <div class="col-md-3 col-sm-4 col-xs-4"><div class="insta-image"><a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likes">&hearts; {{likes}}</div></a></div></div>'
//    });
//    userFeed.run();
//});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos+0.75) {
    document.getElementById("cici").style.top = "0";
  } else {
    document.getElementById("cici").style.top = "-90px";
    document.getElementById("pippo").style.padding = "0px";
  }
  prevScrollpos = currentScrollPos;
}
