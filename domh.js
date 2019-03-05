
// 
document.body.style.fontFamily = "Arial, sans-serif";
//
document.body.style.display = "flex"; 
document.body.style.flexDirection = "column"; 
document.body.style.alignItems = "center"; 
//
var changeNickName = document.getElementById("nickname");
changeNickName.innerHTML = "Sarah"; 
var changeFavAn = document.getElementById("favorite");
changeFavAn.innerHTML = "Cat"; 
var changeHome = document.getElementById("hometown");
changeHome.innerHTML = "Riyadh"; 
//
var list= document.querySelectorAll("li");

for (var i= 0; i < list.length; i++) {
    list[i].setAttribute("class", "listitem");
    list[i].style.color = "dodgerblue";
}

//
var imageParent = document.querySelector(".profilePicture");
let img2 = document.createElement("img")
img2.setAttribute("src", "https://resizing.flixster.com/l8vjhMH27-uXYoFUC76tamABpzg=/206x305/v1.dDs2MTY3MztqOzE3OTg0OzEyMDA7ODAwOzEyMDA")
imageParent.appendChild(img2)
//
var books = [
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      alreadyRead: false,
      imgUrl:"https://66.media.tumblr.com/tumblr_m3k9gaKdo21qa9tmh.png"
    },
  
    {
      title: "In Search of Lost Time",
      author: "Marcel Proust",
      alreadyRead: false,
      imgUrl:"https://images-na.ssl-images-amazon.com/images/I/911Xl59XwRL.__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg"
    },
    {title: "wonder",
      author: "R.J.Palacio",
      alreadyRead: true,
      imgUrl:"https://jkrbooks.typepad.com/.a/6a00d83451af1569e2016306a543ed970d-600wi"
    },
    { title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      alreadyRead: true,
      imgUrl:"https://66.media.tumblr.com/avatar_92209b6f1e40_128.png"
    }
  ];

 //
  var favoriteBook = document.querySelector('.favoriteBooks')
  var h = document.createElement("h1")
  var text = document.createTextNode("My Book List") //List me
  h.appendChild(text)
  favoriteBook.appendChild(h)
//
// bonus :
var list1 = document.querySelector('ul')
list1.style.listStyleType = "none"; 

//


for( let i in books){
    let creatP = document.createElement("p");
    creatP.textContent = `${books[i]['title']} by: ${books[i]['author']}`
 
    favoriteBook.appendChild(creatP);
    let creatImg = document.createElement('img')
    creatImg.setAttribute('src',`${books[i]['imgUrl']}`)
    favoriteBook.appendChild(creatImg);

    if(books[i]['alreadyRead']){
        creatP.style.color = 'red';
    }
}