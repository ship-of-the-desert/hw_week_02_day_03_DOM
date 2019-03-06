// change the font family to "Arial, sans-serif"
let body = document.querySelector("body");
body.style.fontFamily = "Arial, sans-serif";

// Change the alignment of the page to 'center'
body.style.textAlign = "center";

// Replace each of the `span` tags (nickname, favorite, hometown) with your own information
let span = document.querySelectorAll("span");
span[0].textContent ="Areej";
span[1].textContent ="Horse";
span[2].textContent = "Jeddah";

//Give each li the class of "list item"
let li = document.querySelectorAll("li");
for( let i = 0; i < li.length; i++){
    li[i].setAttribute("class","listit");
}
//Change each `li`'s text color to `"dodgerblue"`    
for(let i = 0; i < li.length; i++){
    li[i].style.color = 'dodgerblue';
}

//Create a new img element and set its src attribute to a picture of your favorite show or movie.
let img = document.createElement('img');
img.setAttribute('src','https://i.pinimg.com/236x/dc/cc/03/dccc0317673e8a22d9bdbf6bfb2a55b4--disney-toys.jpg');
let profilePicture = document.querySelector('.profilePicture');
profilePicture.appendChild(img);
console.log(img);

//Copy this data into your JavaScript file
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

// Create an h1 with the text of "My Book List", and put it inside div.favoriteBooks
let h1 = document.createElement('h1');
h1.textContent= 'My Book List';
let favoriteBooks = document.querySelector('.favoriteBooks');
favoriteBooks.appendChild(h1);

// Iterate through the array of books. For each book, create a p tag with the book title and author (e.g. "The Most Human Human, by Brian Christian"). Append it to the page
for( let i in books){
    let p = document.createElement('p')
    p.textContent = `${books[i]['title']} by ${books[i]['author']}`
    favoriteBooks.appendChild(p);

    let imgBook = document.createElement('img')
    imgBook.setAttribute('src',`${books[i]['image']}`)
    favoriteBooks.appendChild(imgBook);

    if(books[i]['alreadyRead']){
        p.style.color = 'red';
    }
}