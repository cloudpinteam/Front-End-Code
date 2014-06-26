$(document).ready(function(){
    $('.container').css({top: 0, opacity: 0}).
    animate({top: 50, opacity: 1}, 1200);
    
  $("#upload").click(function(){
    $("h1").fadeOut(500);
    $("h2").fadeOut(500);
    $("#icon").fadeOut(500);
    $("#upload").fadeOut(500);

 	
	 document.getElementById("icon").src = "img/grayIcon.png";
    $("#icon").fadeIn(500); //this creates the gray icon pin
		

    var newButton1 = document.createElement('button'); //this creates the "upload more" button
    newButton1.innerHTML = "Upload more";
    var buttonParent = document.getElementById("containerButton");
    newButton1.id = "uploadMore";
    buttonParent.appendChild(newButton1);


		var newButton = document.createElement('button'); // this creates the "done button"
    newButton.innerHTML = "Done";
    var buttonParent = document.getElementById("containerButton");
		newButton.id = "done";
		buttonParent.appendChild(newButton);

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


}
