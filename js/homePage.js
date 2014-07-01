$(document).ready(function(){
    $('.container').css({top: 0, opacity: 0}).
    animate({top: 50, opacity: 1}, 1200);
    
  document.getElementById("theFiles").addEventListener("change", handleFileSelect);  
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



function showLocalFileUpload(files) {
    /* Transition to new HTML */
    $("h1").fadeOut(0);
    $("h2").fadeOut(0);
    $("#icon").fadeOut(0);
    $("#upload").fadeOut(0);
    document.getElementById("icon").src = "img/grayIcon.png";
    
    $("#fileListSpan").fadeIn(0);
    
    var text = document.createElement('h1'); //this creates new text on click
    text.innerHTML = "(Everything you uploaded is encrypted and never stored on the web)";
    text.id = "encryption";
    var container1 = document.getElementById("writtenContent");
    container1.appendChild(text);
    
    /* Upload More Option */    
    var newButton1 = document.createElement('button'); //this creates the "upload more" button
    newButton1.innerHTML = "Upload more";
    var buttonParent = document.getElementById("containerButton");
    newButton1.id = "uploadMore";
    containerButton.appendChild(newButton1);

    /* Done Option */    
    var newButton2 = document.createElement('button'); // this creates the "done button"
    newButton2.innerHTML = "Done";
    var buttonParent = document.getElementById("newButton");
    newButton2.id = "done1";
    newButton.appendChild(newButton2);
    
    /*show progress bar*/
    var progress = document.createElement('div');
    progress.id = "progress_bar";
    var progressPercent = document.createElement("div");
    progressPercent.setAttribute("class", "percent");
    progress.appendChild(progressPercent);
    var container = document.getElementById("bar");
    bar.appendChild(progress);
    
    /* cancel icon */
    var cancelIcon = document.createElement('img'); //creates the cancel icon
    cancelIcon.src = "img/cancel.png";
    cancelIcon.id = "cancel";
    cancel.appendChild(cancelIcon);
    
    /* Populate table with selected files */
    for (var i = 0, f; f = files[i]; i++) {
        var newFileGrouping = document.createElement("div");
        newFileGrouping.setAttribute("class", "fileGrouping");
        var newFileName = document.createElement("div");
        newFileName.setAttribute("class", "fileName");
        newFileName.textContent = f.name;
        var newFileSize = document.createElement("div");
        newFileSize.setAttribute("class", "fileSize");
        newFileSize.textContent = Math.round(f.size/(1024*1024)) + " MB";
        var newFileStatus = document.createElement("div");
        newFileStatus.setAttribute("class", "fileStatus");
        newFileStatus.textContent = "Queued";
        newFileGrouping.appendChild(newFileName);
        newFileGrouping.appendChild(newFileSize);
        newFileGrouping.appendChild(newFileStatus);
        document.getElementById("fileListContainer").appendChild(newFileGrouping);
    }    
    /* Read the selected files */
    var fileReaders = new Array();
    loadNextFile(fileReaders, files, 0);
}  
//

function loadNextFile(fileReaders, files, i) {
    fileReaders.push(new FileReader());
    fileReaders[i].onprogress = updateProgressBar;
    fileReaders[i].onload = fileCompleted;
    fileReaders[i].onerror = fileError;
    fileReaders[i].readAsArrayBuffer(files[i]);
    
    function updateProgressBar(e) {
        if (e.lengthComputable) {
            var percentLoaded = Math.round((e.loaded / e.total) * 100);
            // Increase the progress bar length.
            if (percentLoaded < 100) {
                var progress = document.getElementsByClassName("percent")[0];
                progress.style.width = percentLoaded + '%';
            }
        }
    }
    
    function fileCompleted(e) {
        var progress = document.getElementsByClassName("percent")[0];
        progress.style.width = "100%";
        progress.textContent = "100%";
        var curFileGrouping = document.getElementsByClassName("fileGrouping")[i];
        curFileGrouping.getElementsByClassName("fileStatus")[0].textContent = "Prepared";
        if(i < files.length) {
            loadNextFile(fileReaders, files, i+1);
        }
    }    
    
    function fileError(e) {
        console.error(e);
        var progress = document.getElementsByClassName("percent")[0];
        progress.style.width = "0%";
        progress.textContent = "0%";
        var curFileGrouping = document.getElementsByClassName("fileGrouping")[i];
        curFileGrouping.getElementsByClassName("fileStatus")[0].textContent = "Error";
        if(i < files.length) {
            loadNextFile(fileReaders, files, i+1);
        }
    }
}

function handleFileSelect(e) {
    var files = e.target.files;
    if(files) {
        showLocalFileUpload(files);
    }
}


