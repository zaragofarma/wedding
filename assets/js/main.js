// jquery library code here
// =========================
$(document).ready(function(){
    // text container function "scroll-up" and "scroll-down" start here
    // -----------------------------------------------------------------
    // random id genarator function start (to detact scroll element dynamically)
    // -------------------------------------------------------------------------
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }
      

});

// raw JavaScript code here
// =========================

