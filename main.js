

//Change the font-family of the page to "Arial, sans-serif"
document.querySelector('body').style.fontFamily = "Arial, sans-serif";

//Change the alignment of the page to 'center'
document.querySelector('body').style.textAlign = 'center';



// Replace each of the span tags (nickname, favorite, hometown) 
//with your own information (e.g. put your nickname in the nickname span)
document.getElementById("nickname").innerText="Ali";
document.getElementById("favorite").innerText="Falcon";
document.getElementById("hometown").innerText="Najran";


// Give each li the class of "listitem"
document.querySelector("ul").className = "listitem";


//Change each li's text color to "dodgerblue"
document.querySelector("ul").style.color = "dodgerblue"


//Create a new img element and set its src attribute to a picture of your favorite show or movie
//Put that new img element in the div with the class of "profilePicture"
var newImg = document.createElement("IMG");
newImg.src = "https://upload.wikimedia.org/wikipedia/en/8/83/The_Upside.png";
document.getElementsByClassName("profilePicture")[0].appendChild(newImg);





