

var body = document.getElementsByTagName('body')[0];
body.style.fontFamily = "Arial, sans-serif";
body.style.alignItems = "center";
var spans = document.getElementsByTagName('span');
for (let index = 0; index < spans.length; index++) {
    if (spans[index].id == "nickname") {
        spans[index].innerHTML = "Norax3x"
    }
    else if (spans[index].id == "favorite") {
        spans[index].innerHTML = "Cat"
    }
    else if (spans[index].id == "hometown") {
        spans[index].innerHTML = "Riyadh"
    }
}
var listItems = document.getElementsByTagName('li');
for (let index = 0; index < listItems.length; index++) {
    listItems[index].className= "listitem"
    listItems[index].style.color = "dodgerblue"
}
var img =  new Image();
img.src = "./3482822-studio-ghibli-wallpapers.png";
img.alt = "";
document.getElementsByClassName('profilePicture')[0].appendChild(img);

