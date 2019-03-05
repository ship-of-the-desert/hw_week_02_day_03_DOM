// Change the font-family of the page to "Arial, sans-serif"
let body = document.querySelector('body');
body.style.fontFamily = 'Arial, sans-serif';

// Change the alignment of the page to 'center'
body.style.textAlign = 'center';

// replace each of the span tags (nickname, favorite, hometown) with your own information (e.g. put your nickname in the nickname span)
let span = document.querySelectorAll('span');
span[0].textContent ='Abdulaziz';
span[1].textContent ='Tiger';
span[2].textContent = 'Riyadh';

//Give each li the class of "listitem"
let li = document.querySelectorAll('li');
for( let i = 0; i < li.length; i++){
    li[i].setAttribute('class','listit');
}

//Change each li's text color to "dodgerblue"
for(let i = 0; i < li.length; i++){
    li[i].style.color = 'dodgerblue';
}

//Create a new img element and set its src attribute to a picture of your favorite show or movie. Put that new img element in the div with the class of "profilePicture"
let img = document.createElement('img');
img.setAttribute('src','https://ih1.redbubble.net/image.521001871.4592/flat,800x800,070,f.u1.jpg');
let profilePicture = document.querySelector('.profilePicture');
profilePicture.appendChild(img);
console.log(img);


// Books
var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      image: 'https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg',
      alreadyRead: false
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      image: 'https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg',
      alreadyRead: true
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      image: 'https://images-na.ssl-images-amazon.com/images/I/416hcZSPfoL._SX317_BO1,204,203,200_.jpg',
      alreadyRead: true
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      image: 'https://images-na.ssl-images-amazon.com/images/I/41wwbSgEDNL._SX311_BO1,204,203,200_.jpg',
      alreadyRead: true
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: 'https://images-na.ssl-images-amazon.com/images/I/51vv75oglyL._SX326_BO1,204,203,200_.jpg',
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

//Bonus
// Remove the list bullet points from your lists
for( let i = 0; i < li.length; i++){
    li[i].style.listStyle = 'none';
}

// Add the book cover image. For each book, add an img element for each book on the page
// I already did it above.

// Change the style of the book depending on whether you have read it or not (e.g. make the text color red if you have read it)
// I already did it above.










