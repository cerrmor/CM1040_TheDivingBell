//store the current messages for being displayed
var titles = ["Garrison: hey I want to go diving.", "Bob: sure we are setting up a diving adventure this weekend I will PM you the details"];
var titleInput = document.getElementById("title");
var messageBox = document.getElementById("display");
var form = document.getElementById("messages");
//creates a <p> element for displaying the messages on the webpage
var p = document.createElement('p');
//var n = 1;

//function call for displaying the array on page load
clearAndShow();

//checks that the entered data meets the correct format ex only letters
function Allow()
{
    if (!user.title.value.match(/^[a-zA-Z]+$/) && user.title.value !="")
    {
        user.title.value="";
        alert("Please Enter only alphabets");
    }
    window.location.reload()
}

//inserts the text box text to the array for displaying
function insert () 
{
    titles.push(titleInput.value);
    clearAndShow();
}

//clears the text box and posts the text to the html page
function clearAndShow ()
{
    titleInput.value = "";
    p.innerHTML = "";
    p.innerHTML += " " + titles.join("<br/> ") + "<br/>";
    messageBox.appendChild(p);
    p.className = 'message';
}

//prevents the page from reloading every time a message is posted 
function handleForm(event) 
{ 
    event.preventDefault(); 
} 
form.addEventListener('submit', handleForm);