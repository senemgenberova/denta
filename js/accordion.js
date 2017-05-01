$.fn.Accordion = function(accor_content){
    var accord = $(this);
    accord.children(".accord_topic").click(function(){
        $(this).children().eq(1).slideToggle(300);
        $(this).siblings().find(accor_content).slideUp(300);
        $(this).find('i').toggleClass('fa-minus');
        if($(this).find('i').attr("class") == "fa-minus"){
            console.log()
        }
    })
}

$(document).ready(function(){
    $(".accordion").Accordion(".accord_content");
})