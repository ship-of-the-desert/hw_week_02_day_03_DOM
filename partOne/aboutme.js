
//Change font family
var body= document.querySelector("body");
body.style.fontFamily= "Arial, sans-serif";

//Change alignment
body.setAttribute("align", "center");

//remove bullets
var list= document.querySelector("ul");
list.style.listStyle= "none";

//changing text of span
var nickname= document.getElementById("nickname");
nickname.textContent= "KZ";
var favoriteAnimal= document.getElementById("favorite");
favoriteAnimal.textContent= "Sharks";
var hometown= document.getElementById("hometown");
hometown.textContent= "Safwa"

//modifying li: adding class name, changing text color
var listItems= document.querySelectorAll("li");

for (var i= 0; i < listItems.length; i++) {
    listItems[i].setAttribute("class", "listitem");
    listItems[i].style.color= "dodgerblue";
}

//img part and add to div
var img= document.createElement("img");
img.setAttribute("src", "https://www.logolynx.com/images/logolynx/89/895896f6ef9e4f1b455470a8d001ef83.png");
var div= document.querySelector(".profilePicture");
div.appendChild(img);

