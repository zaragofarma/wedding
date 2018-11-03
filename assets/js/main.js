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
    //  end scroll-up function
    // paragraph scroll-down "neche" function start here
    // -----------------------------------------------
function verticalSlideDown(){
    $(".scroll-inner-container").each(function(){
        let id = makeid();
        var div = $(this);
        div.stop();
        $(this).attr("id",id);
        var remHeight = div[0].scrollHeight - $(this).height();
        var scrollableHeight = remHeight - div.scrollTop();
        var pos = div.scrollTop();
        var remainingTime = (pos * 100) / 5; //here 5 is a speed

        div.animate({
            scrollTop:0
        },{
            duration: remainingTime,
            easing: "linear",

        });

    });
};
    //  end scroll-down function

    // mouse movement exucution start here .when mouse hover over 10% top or 10% bottom then scroll up/down start
    // ----------------------------------------------------------------------------------------------------------
var obj = $('.scroll-inner-container');
var top, left, bottom, right;
var excldH,objHeight,objWidth;
// Get position of the div 'scroll-inner-container'
    function getPos(obj) {
    var offsets = obj.offset();
    objHeight = obj.height();
    objWidth = obj.width();
    excldH = objHeight/3; //Caculating 10% height
    top = offsets.top,
    left = offsets.left,
    bottom = top+objHeight,
    right = left+objWidth
};
getPos(obj);

    //Calls fuction on mouse over
obj.mousemove(function(e) {
    handleMouseMove(e)
});

    // document ready function end
});

// raw JavaScript code here
// =========================

