



var body=document.querySelector('body');
body.style.fontFamily="Arial, sans-serif";
body.style="text-align:center"

document.getElementById('nickname').innerText="Amani";
//id.innerText="Amani"
document.getElementById('favorite').innerText="Rabbit";
document.getElementById('hometown').innerText="Riyadh";

var liClass=document.getElementsByTagName("li");//.classList.add("listitem");//tag ""
liClass.classList="listitem";
//liClass.add.classList("listitem");
console.log(liClass)
//var list=document.getElementsByClassName("listitem");//class ""
var licolor=document.querySelectorAll('li');
console.log(licolor);
licolor[0].style.color="dodgerblue";
licolor[1].style.color="dodgerblue";
licolor[2].style.color="dodgerblue";

//remove bullet list
licolor[0].style.listStyle="none";
licolor[1].style.listStyle="none";
licolor[2].style.listStyle="none";

var divOfImage=document.querySelector('.profilePicture');
console.log(divOfImage);

var imageOfMyFavoriteMovie=document.createElement("IMG");
imageOfMyFavoriteMovie.setAttribute("src","https://m.media-amazon.com/images/I/81a9FN-ImcL._SS500_.jpg");
//imageOfMyFavoriteMovie.setAttribute("width","304");
//imageOfMyFavoriteMovie.setAttribute("height","228");
divOfImage.appendChild(imageOfMyFavoriteMovie);


var favoriteBookDive=document.querySelector('.favoriteBooks');
var h1=document.createElement('h1');
h1.innerHTML="My Book List";
favoriteBookDive.appendChild(h1);



var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      cover:'https://www.bookbaby.com/images/book-cover-design-basic.png',
      alreadyRead: false
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      cover: 'https://marketplace.canva.com/MACXC0twKgo/1/0/thumbnail_large/canva-green-and-pink-science-fiction-book-cover-MACXC0twKgo.jpg',
      alreadyRead: true
    },
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      cover: 'https://media.giphy.com/media/12cfPQIOSlNj8Y/giphy.gif',
      alreadyRead: true
    },
    {
      title: "Ulysses",
      author: "James Joyce",
      cover: 'https://www.mtnviewconsulting.com/wp-content/uploads/2015/12/Inside-This-Moment-673x1024.jpg',
      alreadyRead: true
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: 'https://i.pinimg.com/236x/1d/84/60/1d84601aeaf8a43e9b78a32be9e10292--steven-king-stephen-king-books.jpg?b=t' ,
      alreadyRead: true
    }
  ];



for (let value of books){//access all arrays
  for(var key in value){
      //var a=value[key];
      //console.log(value.author+" and "+value.title);
    //title.innerHTML=key+":"+value[key];
    var title=document.createElement('p');
    var bookCover=document.createElement('img');
    bookCover.setAttribute("src",value.cover)
    title.innerHTML=`Title: ${value.title}\n Author:${value.author}`;
    
  }
    favoriteBookDive.appendChild(title);
    favoriteBookDive.appendChild(bookCover);
}