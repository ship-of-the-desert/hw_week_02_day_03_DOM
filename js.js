var body = document.querySelector(".body");
body.style.fontFamily = "Arial, sans-serif";
// body.style.color = "blue";
body.style.textAlign = "center";
var name = document.querySelector("#nickname");
var favorite = document.querySelector("#favorite")
var hometown = document.querySelector("#hometown");


name.innerText += "yasser";
favorite.innerText += "wolf";
hometown.innerText += "AL-zulfi";
var li = document.querySelector("ul")
li.style.color = "dodgerblue"
var img = document.createElement("img");
img.src = 'L.jpg';
li.appendChild(img);
//=========
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

var h1 = document.createElement("h1");
h1.innerText = "My Book List"
var favoriteBooks = document.querySelector(".favoriteBooks")
favoriteBooks.appendChild(h1)
var book_url = ["./img/thed.gif", "./img/theh.jpg", "./img/51tRkYYlpaL.jpg", "./img/ulysses.jpg", "./img/great-gatsby.jpg"]
for (i = 0; i < books.length; i++) {
    var img = document.createElement("img");
    img.src = book_url[i];
    var p = document.createElement("p");
    p.innerText += books[i].title + books[i].author;
    if (books[i].alreadyRead) {
        p.style.color = "red";
    }
    favoriteBooks.appendChild(p);
    favoriteBooks.appendChild(img)
    li.style.listStyleType = "none";
}






