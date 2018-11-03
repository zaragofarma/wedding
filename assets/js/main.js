// jquery library code here
// =========================
$(document).ready(function(){
    // text container function "scroll-up" and "scroll-down" start here
    // -----------------------------------------------------------------
    //  random id genarator function start (to detact scroll element dynamically)
    //  glabally for thit wedding site
    //  -------------------------------------------------------------------------
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
    }
    // end ID genarator

    // paragraph scroll-up "upore" function start here
    // -----------------------------------------------
function verticalSlideUp(){
    $(".scroll-inner-container").each(function(){
        let id = makeid();
        var div = $(this);
        div.stop();
        $(this).attr("id",id);
        var remHeight = div[0].scrollHeight - $(this).height();
        var scrollableHeight = remHeight - div.scrollTop();
        var pos = div.scrollTop();
        var remainingTime = (remHeight - pos) * 100 / 5; //here 5 is a speed
        div.animate({
            scrollTop:remHeight
        },{
            duration: remainingTime,
            easing: "linear",
        });
    });
};



});

// raw JavaScript code here
// =========================

