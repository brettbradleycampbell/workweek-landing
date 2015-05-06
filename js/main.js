// scroll effects
window.onscroll=function scrollPosition() {
    var scrollBarPosition = window.pageYOffset | document.body.scrollTop; // why both? 
    if(scrollBarPosition >= 0 && scrollBarPosition <= 1200) {

        document.getElementById('parallax1').style.marginTop = -(scrollBarPosition*0.15) + 'px';

    }

    if(scrollBarPosition > 400 && scrollBarPosition <= 2400) {

        document.getElementById('parallax2').style.marginTop = -((scrollBarPosition - 400)*0.25) + 'px';

    }


};


// modal fade in

$(document).ready(function(){

    // click button, fade in
    $(".example1").click(function(){
        $('.modal-overlay, .modal').fadeIn(200, function() {
            $('.modal-overlay, .modal').css('display', 'block');
        });
    });

    // click overlay or 'x', fade out
    $(".modal-overlay, .circle").click(function(){
        $('.modal-overlay, .modal').fadeOut(200, function() {
            $('.modal-overlay, .modal').css('display', 'none');
        });
    });


});



// modal height -- how do I combine the document.ready and window.resize
$(document).ready(function(){
    var newheight = $(window).height() - 100 + "px";      
    $("#iframe1").height(newheight);
});

$(window).resize(function(){
    var newheight = $(window).height() - 100 + "px";      
    $("#iframe1").height(newheight);
});



