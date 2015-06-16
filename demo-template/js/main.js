// // scroll effects
// window.onscroll=function scrollPosition() {
//     var scrollBarPosition = window.pageYOffset | document.body.scrollTop; // why both? 
//     if(scrollBarPosition >= 0 && scrollBarPosition <= 250) {

//         document.getElementById('textArea').style.marginTop = -(scrollBarPosition*0.4) + 'px';
//         document.getElementById('textArea').style.opacity = (1 -scrollBarPosition/200);
//         document.getElementById('hero').style.webkitFilter = ('blur(' + (scrollBarPosition/20) + 'px)');
//         // document.getElementById('status').innerHTML = "Scroll position=" + scrollBarPosition;  

//         console.log('hi');  
//     }
    
//     // else {
        
//     // }
// };


$(document).ready(function(){

// modal fade in

    // click button, fade in
    $(".modal-button").click(function(){
        $('.modal-overlay, .modal').fadeIn(200, function() {
            $('.modal-overlay, .modal').css('display', 'block');
        });
    });

    // click overlay or 'x', fade out
    $(".modal-overlay").click(function(){
        $('.modal-overlay, .modal').fadeOut(200, function() {
            $('.modal-overlay, .modal').css('display', 'none');
        });
    });

// modal height

    


});


