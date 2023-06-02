//sets/stores the starting index for the 3 slide shows
var slideIndex = [1,1,1];
//stores the class names of the slide shows
var slideId=["mySlides1","mySlides2","mySlides3"];
//stores the class names of the dots associated with the slide shows
var dotId = ["dot1","dot2","dot3"];

//function call for slide show one image one
showSlides(1,0);

//function call for slide show two image one
showSlides(1,1);

//function call for slide show three image one
showSlides(1,2);

//function is called every time the arrow selector is pressed
function plusSlides(n, no) 
{
    showSlides(slideIndex[no] += n, no);
}

//function that displays the currently selected image of the slide show
function currentSlide(n, no)
{
    showSlides(slideIndex[no] = n, no);
}

//function that controlls the dom elements that hide or show the images in the carosel
function showSlides(n, no) 
{
    var i;
    //sets the java script dom selector for the current slide to a variable "x"
    var x = document.getElementsByClassName(slideId[no]);
    //sets the java script dom selector for the current dot to a variable "dots"
    var dots = document.getElementsByClassName(dotId[no]);
    
    //if the current slide number is greater then number of slides return to first slide
    if (n > x.length) 
    {
        slideIndex[no] = 1;
    }    
    
    //else if the current slide number is less the number of slides return to last slide
    else if (n < 1) 
    {
        slideIndex[no] = x.length;
    }
    //hides all the slide images
    for (i = 0; i < x.length; i++) 
    {
        x[i].style.display = "none";  
    }
    //sets all the dots to not active
    for (i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //displays the current selected slide
    x[slideIndex[no] - 1].style.display = "block";
    //displays the current image associated with the corrispnding dot by activating it.
    dots[slideIndex[no] - 1].className += " active";
}