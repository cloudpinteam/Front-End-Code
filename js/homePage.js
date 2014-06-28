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
    containerButton.appendChild(newButton1);

    var newButton = document.createElement('button'); // this creates the "done button"
    newButton.innerHTML = "Done";
    var buttonParent = document.getElementById("containerButton");
    newButton.id = "done1";
    containerButton.appendChild(newButton);
  });



 $('#trigger').click(function(){
    $(this).next('.dropdown-menu').slideToggle();
    $(this).toggleClass('active');          
    
    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
    })





})


function createProgressBar() {
  var Progress = document.createElement('div');
  Progress.id = "progress_bar";
  var container = document.getElementById("writtenContent");
  writtenContent.appendChild(Progress);
}