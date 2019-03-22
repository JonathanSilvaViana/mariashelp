$(function(){
   
    $(".line>a").click(function(){
        $(".line>a").removeClass("on");
        $(this).addClass("on");
       
        var i1 = $(this).parent().index();
        console.log(i1);
        
    });
});