$(document).ready(function(){
    $('.container').css({top: 0, opacity: 0}).
    animate({top: 50, opacity: 1}, 1200);
    
  $("#upload").click(function(){
    $("h1").fadeOut(500);
    $("#icon").fadeOut(500);
    $("#upload").fadeOut(500);
    $(this).text("Upload more").fadeIn();
 	
	// document.getElementById("icon").src = "img/grayIcon.png";
 //    $("#icon").fadeIn(500);
		

		// $("#newImg").fadeIn(500);



		// var newImage = document.createElement('img');
		// newImage.id = "newImg";
		// newImage.setAttribute("src", "img/grayIcon.png");

		// document.body.appendChild(newImage);


  });
});


   







