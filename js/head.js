$(document).ready(function(){
    var li = $(".main_list").children("li");
    var time = 2000;

    li.eq(3).on({
        mouseenter: function(){
            $(this).find(".inner_pages").css("display","block");
             li.find(".inner_list").css("display","none");    
        },

        mouseleave: function(){
            setTimeout(function(){
                li.find(".inner_pages").css("display","none");                                             
                console.log("timeout");
            },time);
        }
    });

    li.eq(7).on({
        mouseenter : function(){
            $(this).find(".inner_list").eq(0).css("display","block").css("right","15.4%");
            li.find(".inner_pages").css("display","none");
            li.find(".inner_list").eq(1).css("display","none");
        },

        mouseleave: function(){
            setTimeout(function(){
                li.find(".inner_list").eq(0).css("display","none");                                             
            },time);
        }
    })

    li.eq(8).on({
        mouseenter : function(){
            $(this).find(".inner_list").eq(0).css("display","block").css("right","5.2%");
            li.find(".inner_pages").css("display","none");
            li.find(".inner_list").eq(0).css("display","none");
        },

        mouseleave: function(){
            setTimeout(function(){
                li.find(".inner_list").eq(1).css("display","none");   
                console.log("out");                                          
            },time);
        }
    })
});