// I want this line to work with the word "work" when mouseover

var x = "homepage10.jpg"
    var y = "homepage.jpg"
 
    var backgrounds = [x, y];

    var work = document.getElementById("work");
    var trying = document.getElementById("trying");

    work.addEventListener("mouseenter", function() {
        
        trying.src = backgrounds[0];
        
    });

    work.addEventListener("mouseleave", function() {
        
        trying.src = backgrounds[1];
        
    });

// basically the same thing as above but for the word "sketchbook" 

var a = "homepage4.jpg"
    var b = "homepage.jpg"
 
    var backgrounds2 = [a, y];

    var sketchbook = document.getElementById("sketchbook");
    var trying = document.getElementById("trying");

    sketchbook.addEventListener("mouseenter", function() {
        
        trying.src = backgrounds2[0];
        
    });

    sketchbook.addEventListener("mouseleave", function() {
        
        trying.src = backgrounds2[1];
        
    });


var follower = document.getElementById("follower");

document.onmousemove = function(event) {
        
    follower.style.left = event.clientX + 20 + "px";
    follower.style.top = event.clientY + 20 + "px";
    
}

/*

//another attempt at using mouseover for the word "work and sketchbook" 

document.getElementById("bar").addEventListener("mouseover", mouseOver);
document.getElementById("bar").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("bar").style.color = "black";
}

function mouseOut() {
    document.getElementById("demo").style.color = "lightgrey";
}

//attempting to making nav top picture change color when hover too
var c = "cover5.jpg"
    var d = "cover4.jpg"
     var e = "cover5.jpg" */
 