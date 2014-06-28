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

    var text = document.createElement('h1'); //this creates new text on click
    text.innerHTML = "(Everything you uploaded is encrypted and never stored on the web)";
    text.id = "encryption";
    var container1 = document.getElementById("writtenContent");
    container1.appendChild(text);

    var newButton1 = document.createElement('button'); //this creates the "upload more" button
    newButton1.innerHTML = "Upload more";
    var buttonParent = document.getElementById("containerButton");
    newButton1.id = "uploadMore";
    containerButton.appendChild(newButton1);

    var newButton2 = document.createElement('button'); // this creates the "done button"
    newButton2.innerHTML = "Done";
    var buttonParent = document.getElementById("newButton");
    newButton2.id = "done1";
    newButton.appendChild(newButton2);
  });

    

});


 $('#trigger').click(function(){
    $(this).next('.dropdown-menu').slideToggle();
    $(this).toggleClass('active');          
    
    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
  });


  $("#newButton").click(function(){ //this redirects to the successful pin page
    window.location = "successfulPin.html";
  });



function createProgressBar() {
  var Progress = document.createElement('div');
  Progress.id = "progress_bar";
  var container = document.getElementById("bar");
  bar.appendChild(Progress);

  var cancelIcon = document.createElement('img'); //creates the cancel icon
  cancelIcon.src = "img/cancel.png";
  cancelIcon.id = "cancel";
  var box = document.getElementById('cancel');
  cancel.appendChild(cancelIcon);
}  

