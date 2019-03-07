//About Me
document.getElementById("page").style.fontFamily = "Arial, sans-serif";

document.getElementById("page").style.textAlign = "center";

document.getElementById("nickname").innerHTML="Reema";
document.getElementById("favorite").innerHTML="N/A";
document.getElementById("hometown").innerHTML="Riyadh";

document.getElementsByClassName("listItem").style.color= "dodgerblue";

var favShow = document.createElement("img");
  favShow.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg");



// The Book List
  var h = document.createElement("H1")                
  var t = document.createTextNode("My Book List");     
  div.favoriteBooks(t);




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

  console.log(books)

  books.Style.Add("list-style", "none");

  function createImg(){
    document.getElementById("imgCreator").src="https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg"
}

//Creating Random Images