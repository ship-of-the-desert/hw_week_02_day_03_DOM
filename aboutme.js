document.body.style.fontFamily = "Arial, sans-serif";

// var body = document.querySelector("body");
// body=center

document.body.style.alignItems="center";

// var image = document.querySelector("img");
// image.setAttribute("src", "https://goo.gl/images/Kzczyi") 
// image.setAttribute("alt","profilePicture")











var heading=document.querySelector("h2");
var currentText = heading.innerHTML;
heading.innerHTML="My Book List"


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

  for (let i = 0; i < books.length; i+=1) {
      var currentListItems = books[i];
      console.log("currentListItems")
  }