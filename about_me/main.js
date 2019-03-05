// my booklist
var books = [{
        title: "Our Final Invention",
        author: "Don James Barrat",
        alreadyRead: false,
        url: "https://upload.wikimedia.org/wikipedia/en/d/df/Our_Final_Invention.jpg"
    },
    {
        title: "The Code Book",
        author: "Simon Singh",
        alreadyRead: true,
        url: "https://upload.wikimedia.org/wikipedia/en/0/06/The_Code_Book.jpg?download"
    },
    {
        title: "The Organized Mind: \
      Thinking Straight in the Age of Information Overload",
        author: "Daniel Levitin",
        alreadyRead: true,
        url: "https://upload.wikimedia.org/wikipedia/en/c/cc/The_Organized_Mind_hardcover_cover.jpg?download"
    },
    {
        title: "Physics of the Future",
        author: "Michio Kakue",
        alreadyRead: true,
        url: "https://upload.wikimedia.org/wikipedia/en/8/8d/Physics_of_the_future_Kaku_2011.jpg"
    },
    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        alreadyRead: true,
        url: "https://upload.wikimedia.org/wikipedia/en/6/62/Kite_runner.jpg"
    }
];
// Change font-family attribute of the page to "Arial, sans-serif"
var body = document.querySelector("body")

body.style.fontFamily = "Arial, sans-serif";
body.style.border = "1px red solid";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignContent = "center";
body.style.flexWrap = "wrap";
body.style.flexDirection = "column"

// change nickname
body.querySelector("#nickname").textContent = "mojo";

// give li's class of listitem
// and change color to dodgerblue
var listItems = body.querySelectorAll("li");
for (var li of listItems) {
    li.setAttribute("class", "listitem");
    li.setAttribute("style", "color: dodgerblue");
}

// create a new img element 
var image = document.createElement("img");
image.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/b/be/Big_Poster.jpg")
var profilePicture = body.querySelector(".profilePicture");
profilePicture.appendChild(image);

// create header for fav books
var favBooks = body.querySelector(".favoriteBooks");
var h1 = document.createElement("h1");
var text = document.createTextNode("My Book List");
h1.appendChild(text);
favBooks.appendChild(h1);

//
// Bonus
//

// remove bullet points
var ul = body.querySelector("ul");
ul.setAttribute("style", "list-style: none");

// add book cover images
for (var i = 0; i < books.length; i++) {
    var bookName = document.createElement("h3");
    var bookImage = document.createElement("img");
    var bookNameText = document.createTextNode(books[i]["title"]);

    bookName.appendChild(bookNameText);
    if (books[i]['alreadyRead'] === true) {
        bookName.setAttribute("style", "color: red");
    }
    favBooks.appendChild(bookName);

    bookImage.setAttribute("src", books[i]["url"]);
    favBooks.appendChild(bookImage);

}