/*

    PARTONE: about me

*/
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

/*

    PARTTWO: the book list

*/
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

//create h1
var title= document.createElement("h1");
title.textContent= "My Book List";

//add h1 to div
var bookdiv= document.querySelector(".favoriteBooks");
bookdiv.appendChild(title);

//iterating through books, create p: title and author
for (var i=0; i < books.length; i++) {
    var details= document.createElement("p");
    details.textContent= books[i].title + ", by " + books[i].author;
    bookdiv.appendChild(details);
}
