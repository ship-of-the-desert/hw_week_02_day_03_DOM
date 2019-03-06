
var body = document.querySelector("body") ; // alignment of page center
body.setAttribute("align","center") ;

var ulList= document.querySelector("ul"); // Remove list bullet from list
ulList.style.listStyle= "none";
  
function myFunction() { // change font family,and replace information 
    document.getElementById("myp").style.fontFamily = "Arial, sans-serif"; 
    document.getElementById("nickname").style.fontFamily = "Arial, sans-serif"; 
    document.getElementById("nickname").textContent="MeMe";
    document.getElementById("favorite").textContent="Cats";
    document.getElementById("hometown").textContent="Riyadh";
    
   
}
myFunction() ; // change color

function highlight(hometown,dodgerblue) {
    var a = document.getElementById(hometown);
    a.style.color = dodgerblue;
  }
  highlight("hometown","dodgerblue");
  
  
function highlight(favorite,dodgerblue) { // change color
    var a = document.getElementById(favorite);
    a.style.color = dodgerblue;
  }
  highlight("favorite","dodgerblue");
  
  
function highlight(nickname,dodgerblue) { // change color
    var a = document.getElementById(nickname);
    a.style.color = dodgerblue;
  }
  highlight("nickname","dodgerblue");

  
    var img = document.createElement("img"); // create new imge 
    img.setAttribute('src','https://writesoftheroundtable.files.wordpress.com/2018/09/cable-girls-season3-e1534947218979-1150x554.jpg');
    var Picture = document.querySelector('.profilePicture');
    Picture.appendChild(img);
    
     
    
  
// book list 
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
  var texth1= document.createElement("h1"); // creat h1 and but in favbook
texth1.textContent= "My Book List";
var favbook= document.querySelector(".favoriteBooks");
favbook.appendChild(texth1);

for( var i in books){ // create a `p` tag with the book title and author 
    var p = document.createElement("p")
    p.textContent = books[i].title + " .. author : " + books[i].author;
    favbook.appendChild(p);
}

if( alreadyRead = true ){ // Change style of the book depending on whether read it or not
    p.style.color = "green";
}
