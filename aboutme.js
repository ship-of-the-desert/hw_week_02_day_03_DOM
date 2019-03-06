//
document.body.style.fontFamily = "Arial, sans-serif";
//
document.body.setAttribute('align', 'center');
//
//document.getElementById("nickname").innerHTML="alhanouf";
var nickname = document.getElementById("nickname");
nickname.innerHTML = "alhanouf"
var favorite = document.getElementById("favorite");
favorite.innerHTML= "lion"
var hometown = document.getElementById("hometown");
hometown.innerHTML = "Riyadh"

//
for (var i = 0 ; i <=2; i++)
var list = document.getElementsByTagName("li")[i];
list.setAttribute("class", "listitem");

document.querySelector("li").style.color="dodgerblue";

//
var myImg= document.createElement("img");
myImg.setAttribute("src", "ff.jpg");
var div= document.querySelector(".profilePicture");
div.appendChild(myImg);

//
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
  // h1
  var title = document.createElement("h1")
  title.innerHTML="My Book List"
 document.querySelector(".favoriteBooks").appendChild(title)

 // add h1 to div.favoriteBooks
 var bookdiv= document.querySelector(".favoriteBooks");
   bookdiv.appendChild(title);
  // remove dots
   var dots =document.querySelector("ul")
   dots.style.listStyle="none"

   // 
 //### Bonus - not sure abou the answers 
 for (var i=0;i <books.length; i++)
{
 var pp = document.createElement("p")
 pp.innerHTML=books[i].title +" , "+books[i].author;
 document.querySelector(".favoriteBooks").appendChild(pp)

 var Img = document.createElement("img")
 Img.setAttribute("src","design.jpg")

 document.querySelector(".profilePicture").appendChild(Img)



for (let value of books){  // all arrays
    for(var a in value){
        
      var title=document.createElement('p');
      var bookCover=document.createElement('img');
      bookCover.setAttribute("src","design.jpg")
      title.innerHTML=`Title: ${value.title}\n Author:${value.author}`;
  
     }
      favoriteBookDive.appendChild(title);
      favoriteBookDive.appendChild(bookCover);
  } 

if (books[i].alreadyRead == true)
{
   elementP.style.color="red"

}

}
