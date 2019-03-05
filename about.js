

var body = document.getElementsByTagName('body')[0];
body.style.fontFamily = "Arial, sans-serif";
body.style.alignContent= "center";
body.style.textAlign = "center"; //this is what I'm trying to solve my problem

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
document.getElementsByTagName('ul')[0].style.listStyle =  "none";

var books = [
    {
      title: "Sammie & Budgie",
      author: "Scott semegran",
      alreadyRead: false ,
      img:"2.jpeg"
    },
    {
      title: "Black moses",
      author: "Alain marbanckou",
      alreadyRead: true   ,
      img:"4.jpeg"
    },
    {
      title: "Security",
      author: "stephen amidon",
      alreadyRead: true,
      img:"3.jpeg"
    },
    {
      title: "the really real mother coose",
      author: "mark stephen davis",
      alreadyRead: true,
      img:"5.jpeg"
    },
    {
      title: "At the going down of of the sun ",
      author: "marius oelsching",
      alreadyRead: true,
      img:"1.jpeg"
    }
  ];
  
  var header =  document.createElement('h1');
  var booksSection =  document.getElementsByClassName('favoriteBooks')[0];
  header.innerText="My Book List";
  booksSection.appendChild(header);

  for (let index = 0; index < books.length; index++) {
    var header =  document.createElement('p');
    header.innerText=books[index].title + " By "+ books[index].auther;
    if(books[index].alreadyRead){
        header.style.color ="blue"
    }
    var image =  document.createElement('img');
    image.src=books[index].img;
    // image.style.width="20px";
    // image.style.width="40px";

    booksSection.appendChild(header);
    booksSection.appendChild(image);


  }


