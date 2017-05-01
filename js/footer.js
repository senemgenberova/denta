$(document).ready(function(){
    var input = $("#email_input");
    var invalid_msg = $(document.createElement('span'));
    invalid_msg.attr("class","invalid_msg");
    var button = $("#subs");
    var valid_msg = $(".valid_msg");
    var blue = "#55BBEB";
    var orange = "#F25927"
    var x = 0;
    var y = 0;

    // email duz olmalidi
    // input bos olmamalidi+
    //buttonu click eliyende email duz olmalidi

    button.on({
        click: function(event){
                x = event.clientX;
                y = event.clientY;
                if(input.val().length == 0 || input.val().indexOf("@") == -1){
                    $(".input-group").append(invalid_msg);
                    invalid_msg.text("The email is not a valid email.");
                    invalid_msg.css("display","block");
                    input.css("border","1px solid #F25927");
                    console.log("bosdur ve ya @ yoxdur");
                    $(this).css("background",orange);
                }

                else{
                    $(this).css("background",blue);
                    input.val("");
                    valid_msg.css("display","block");
                    valid_msg.animate({left: '2%'},300);
                    setTimeout(function(){
                        valid_msg.animate({left: '-70%'},300);
                    },2500);
                }
        },

        mouseenter: function(){
            $(this).css("background",blue);
        },

        mouseleave: function(){
            $(this).css("background",orange);
        }
    });

    $(window).click(function(event){
        if(event.pageX > x && event.pageY > y){
            button.css("background","#F25927");            
        }
        x = 0;
        y = 0; 
    });

    input.focusout(function(){
        if($(this).val().length == 0 || $(this).val().indexOf("@") == -1){
            $(".input-group").append(invalid_msg);
            invalid_msg.text("The email is not a valid email.");
            invalid_msg.css("display","block");
            $(this).css("border","1px solid "+orange);
            button.css("background",orange);
            console.log("bosdur ve ya @ yoxdur");
        }
        else{
            invalid_msg.css("display","none");
            $(this).css("border","none");
        }
    });    
});