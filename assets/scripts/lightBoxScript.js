//initially set to null untill the script is called
var classID = null;
var captionID = null;

// Opens the lightbox Modal
function openModal(id,name,caption) 
{
    //sets the image to display as a block 
    document.getElementById(id).style.display = "block";
    //sets the variable classid = to the class name of the lightbox
    classID = document.getElementsByClassName(name);
    captionID = document.getElementById(caption);
}

// Closes the lightbox Modal
function closeModal() 
{
    //hides the images from the light box modal and resets the slide index
    slideIndex = 1;
    var list = document.getElementsByClassName("modal");
    for(var i = 0; i < list.length; i++)
    {
        list[i].style.display = "none";
    }
}

var slideIndex = 1;
//function call to show the selected image
showSlides(slideIndex);

// Next/previous controls allows selection of the next or previous slide
function plusSlides(n) 
{
    showSlides(slideIndex += n);
}

// Thumbnail image controls sets the image to display by the thumbnail clicked
function currentSlide(n) 
{
    showSlides(slideIndex = n);
}

//displays the selected image
function showSlides(n) 
{
    var i;
    var slides = classID;

    var dots = document.getElementsByClassName("demo");
    var captionText = captionID;
//    var captionText = document.getElementById("caption");
    
    //if the index number is greater then the number of slides return to first slide
    if (n > slides.length) {slideIndex = 1}
    //else if the index number is less then the number of slide return to the last slide
    if (n < 1) {slideIndex = slides.length}
    
    //hides the images not currently being displayed
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    
    //allows a thumb nail to be selected
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    //displays the currently selected image
    slides[slideIndex-1].style.display = "block";
    //displays the selected thumbnail
    dots[slideIndex-1].className += " active";
    //displays the alt tag as a captioned name
    captionText.innerHTML = dots[slideIndex-1].alt;
}