document.body.style.fontFamily = "Arial, sans-serif";
document.body.setAttribute('align','center');
var nicknameNode = document.createTextNode("Ameerah")


document.getElementById("nickname").innerHTML="Ameerah";
document.getElementById("favorite").innerHTML="Cat";
document.getElementById("hometown").innerHTML="Riyadh";

for(var i=0 ; i<=2; i++)
{
var node = document.getElementsByTagName("li")[i];
node.setAttribute("class", "listitem");
//node.setAttribute("color","dodgerblues");
}

document.querySelector("li").style.color="dodgerblues";
//document.getElementsByTagName("li").setAttribute("color","dodgerblues")


var img1=document.createElement("img")
img1.setAttribute("src","img1.jpg")
img1.setAttribute("width","30%")
var imgContainer=document.querySelector(".profilePicture")
imgContainer.appendChild(img1)


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

  var textNode=document.createElement("h1")
  textNode.innerHTML="My Book List"
  document.querySelector(".favoriteBooks").appendChild(textNode)




var coverBook =["The Design of Everyday Things.png","The Most Human Human.png",
"The Most Human Human.png","The Most Human Human.png","The Most Human Human.png"]



for (var i=0;i<books.length;i++)
{

var elementP = document.createElement("p")
elementP.innerHTML=books[i].title +" , "+books[i].author;
document.querySelector(".favoriteBooks").appendChild(elementP)

var elementImg = document.createElement("img")
elementImg.setAttribute("src",coverBook[i])
elementImg.setAttribute("width","50px")
document.querySelector(".profilePicture").appendChild(elementImg)

if (books[i].alreadyRead == true)
{
    elementP.style.color="red"

}

}

var dot=document.querySelector("ul")
dot.style.listStyle="none"