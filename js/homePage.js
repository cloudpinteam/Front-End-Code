$(document).ready(function(){
    $('.container').css({top: 0, opacity: 0}).
    animate({top: 50, opacity: 1}, 1200);
    
  $("#upload").click(function(){
    $("h1").fadeOut(500);
    $("h2").fadeOut(500);
    $("#icon").fadeOut(500);
    $("#upload").fadeOut(500);
    $(this).text("Upload more").fadeIn();
 	
	 document.getElementById("icon").src = "img/grayIcon.png";
    $("#icon").fadeIn(500); //this creates the gray icon pin
		
		var newButton = document.createElement('button');
    newButton.innerHTML = "Done";
    var buttonParent = document.getElementById("containerButton");
		newButton.id = "done";

		containerButton.appendChild(newButton);


  });
});


   







