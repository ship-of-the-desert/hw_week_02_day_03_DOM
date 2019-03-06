
// change font family
document.getElementsByTagName("h1").style.fontFamily = "Arial, sans-serif";
document.getElementsByTagName("p").style.fontFamily = "Arial, sans-serif";
document.getElementsByTagName("li").style.fontFamily = "Arial, sans-serif";
// change the alignment
document.getElementsByTagName("body").style.alignContent = "center";
// replace span tag
document.getElementsById("nickname").setAttribute("p", "LamyaaHamid");
document.getElementsById("favorite").setAttribute("p", "Cat");
document.getElementsById("hometown").setAttribute("p", "Riyadh");
// change list color
document.getElementsByTagName("li")[0].setAttribute("class", "democlass");
li.style.Color = "dodgerblue";
// creat an imag
var element = document.createElement("img");
    element.setAttribute("src","268x0w.png");
    document.getElementbyClass('profilePicture').appendChild(element);


// after i finish it it doesn't appear.
