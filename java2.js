// same thing but for cover pages only
var c = "cover5.jpg"
     var d = "cover4.jpg"
 
    var backgrounds3 = [c, d];

    var work2 = document.getElementById("work2");
    var cover = document.getElementById("cover");

   

    work2.addEventListener("mouseenter", function() {
        
        cover.src = backgrounds3[0];
        
    });

    work2.addEventListener("mouseleave", function() {
        
        cover.src = backgrounds3[1];
        
    });

// same thing for sketchbook

var e = "cover6.jpg"
     var f = "cover4.jpg"
 
    var backgrounds4 = [e, f];

    var sketchbook2 = document.getElementById("sketchbook2");
    var cover = document.getElementById("cover");


    sketchbook2.addEventListener("mouseenter", function() {
        
        cover.src = backgrounds4[0];
        
    });

    sketchbook2.addEventListener("mouseleave", function() {
        
        cover.src = backgrounds4[1];
        
    });

// attempting to make button with hover effect

var c = "cover5.jpg"
     var d = "cover4.jpg"
 
    var backgrounds3 = [c, d];

    var work2 = document.getElementById("work2");
    var cover = document.getElementById("cover");

   

    work2.addEventListener("mouseenter", function() {
        
        cover.src = backgrounds3[0];
        
    });

    work2.addEventListener("mouseleave", function() {
        
        cover.src = backgrounds3[1];
        
    });

var follower = document.getElementById("follower");

document.onmousemove = function(event) {
        
    follower.style.left = event.clientX + 20 + "px";
    follower.style.top = event.clientY + 20 + "px";
    
}
