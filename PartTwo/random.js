
//button click actions:
//create img
var imgContainer = document.querySelector(".image")
var img = document.createElement("img");
var randomize = document.querySelector("#randomize");
randomize.addEventListener("click", createImg);

function createImg() {
    /*
        height and width for bonus1
    */
    var width = document.querySelector(".width").value;
    var height = document.querySelector(".height").value;
    var src= "https://source.unsplash.com/random";

    img.setAttribute("src", src);
    img.setAttribute("style", `width: ${width}px`);
    img.setAttribute("style", `height: ${height}px`);

    imgContainer.appendChild(img);
}