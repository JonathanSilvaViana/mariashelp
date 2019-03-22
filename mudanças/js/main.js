//changes the colors of nav links

$(function(){
    $("#MenuBar a").bind("click", function(){
        $("#MenuBar a").removeClass("clicked");
        $(this).addClass("clicked");

        var i1 = $(this).parent().index();
        console.log(i1);
    });
});

//this changes the content's options color

$(function(){
	$(".projectList a").bind("click", function()
	{
		$(".projectList a").removeClass("selected_field");
		$(this).addClass("selected_field");

		var i2 = $(this).parent().index();
        console.log(i2);
	});
});

