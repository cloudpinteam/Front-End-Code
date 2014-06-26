$(document).ready(function(){
    $('.container').css({top: 0, opacity: 0}).
    animate({top: 50, opacity: 1}, 1200);
    
  $("#upload").click(function(){

    $("h1").fadeOut(500);
<<<<<<< HEAD
    $("h2").fadeOut(500);
=======
>>>>>>> FETCH_HEAD
    $("#icon").fadeOut(500);
    $("#upload").fadeOut(500);
    $(this).text("Upload more").fadeIn();
 	
	 document.getElementById("icon").src = "img/grayIcon.png";
    $("#icon").fadeIn(500);
		

		 $("#newImg").fadeIn(500);



<<<<<<< HEAD
  });
});


function createProgressBar () {
  var Progress = document.createElement('div');
  Progress.id = "progress_bar";
  var container = document.getElementById("writtenContent");
  writtenContent.appendChild(Progress);

  // var Percent = document.createElement('div');
  // Percent.class = "percent";
  // var container = document.getElementById("progress_bar");
  // progress_bar.appendChild(Percent);
=======
		// var newImage = document.createElement('img');
		// newImage.id = "newImg";
		// newImage.setAttribute("src", "img/grayIcon.png");

		// document.body.appendChild(newImage);


  });
});





   




     $("#newImage").fadeIn(500);


   





>>>>>>> FETCH_HEAD


}
