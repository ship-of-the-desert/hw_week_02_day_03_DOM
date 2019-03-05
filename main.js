// document.getElementsByTagName("body").innerHTML.style.font-family("Arial, sans-serif");
document.getElementsByTagName("body").style.font-family("Arial, sans-serif");
document.getElementsByTagName("body").style.text-align("center");
var nickname = document.getElementsByClassName(".nickname");
var favorite = document.getElementsByClassName(".favorite");
var hometown = document.getElementsByClassName(".hometown");

var textNickname = document.createTextNode("Mimi");
var textFavorite = document.createTextNode("Shopping");
var textHometown = document.createTextNode("Riyadh");
document.getElementsByClassName(".nickname").style.color("dodgerblue");
document.getElementsByClassName(".favorite").style.color("dodgerblue");
document.getElementsByClassName(".hometown").style.color("dodgerblue");

var listitem = document.querySelector('.listitem')
li.appendChild(textNickname);
li.appendChild(textFavorite);
li.appendChild(textHometown);

var profilePicture = document.querySelector('.profilePicture');
let img = document.createElement('img');
img.setAttribute("src", "https://pinartarhan.com/blog/wp-content/uploads/2018/04/rsz_la-casa-de-papel-6-2-sezon-netflix-te-6-nisan-10691040_o.jpg");
img.setAttribute("width", "10%")
profilePicture.appendChild(img);