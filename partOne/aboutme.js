/*

    PARTONE: about me

*/
//Change font family
var body= document.querySelector("body");
body.style.fontFamily= "Arial, sans-serif";

//Change alignment
body.setAttribute("align", "center");

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
var bookImages= [
    "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
    "https://images.penguinrandomhouse.com/cover/9780679645689",
    "https://upload.wikimedia.org/wikipedia/commons/a/ab/JoyceUlysses2.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SX326_BO1,204,203,200_.jpg"
];

for (var i=0; i < books.length; i++) {
    var details= document.createElement("p");
    details.textContent= books[i].title + ", by " + books[i].author;
    bookdiv.appendChild(details);

    /* 
        bonus to add images for each book
    */
    var bookImg= document.createElement("img");
    bookImg.setAttribute("src", bookImages[i]);
    var nw= details.appendChild(bookImg);
    bookdiv.appendChild(nw);
}

/*

    bonus

*/
//remove bullets
var list= document.querySelector("ul");
list.style.listStyle= "none";

//adding book covers
//added inside the upper foor loop

//change color if read
for (var i= 0; i < books.length; i++) {
    var container= document.querySelectorAll("p");
    if (books[i].alreadyRead == true) {
        container[i].style.backgroundColor= "red";
    }
}
