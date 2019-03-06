document.body.style.fontFamily = "Arial, sans-serif";

//

document.getElementsByTagName("body").style.alignContent = "center";
//
var nickname = document.getElementById(".nickname");
nickname.innerHTML = "alhanouf"
var favorite = document.getElementById("favorite");
favorite.innerHTML= "lion"
var hometown = document.getElementById("hometown");
hometown.innerHTML = "Riyadh"

//
var listItems= document.querySelectorAll("li");

 for (var i= 0; i < listItems.length; i++) {
    listItems[i].setAttribute("class", "listitem");
    listItems[i].style.color= "dodgerblue";


//
var myImg= document.createElement("img");
myImg.setAttribute("src", "ff.jpg");
var div= document.querySelector(".profilePicture");
div.appendChild(myImg.);


////
var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: true
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      alreadyRead: true
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true
    }
  ];

  // H1
  var title= document.createElement("h1");
title.textContent= "My Book List";
  
// add h1 to div.favoriteBooks
var bookdiv= document.querySelector(".favoriteBooks");
bookdiv.appendChild(title);


//iterate through the array of books
for (var i=0; i < books.length; i++) {
    var d= document.createElement("p");
    d.textContent= books[i].title + ", by " + books[i].author;
    bookdiv.appendChild(d);
