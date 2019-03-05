// create an image element
var imageTag = document.querySelector(".image")
var image = document.createElement("img");
var randomize = document.querySelector("#randomize");

randomize.addEventListener("click", function () {
    // access the tags
    var width = document.querySelector(".width").value;
    var height = document.querySelector(".height").value;
    var selector = document.querySelector(".selector").value;

    // select the source of the image
    switch (selector) {
        case "Picsum":
            url = "https://picsum.photos/400/400";
            break;
        case "Fill Murray":
            url = "http://www.fillmurray.com/400/400";
            break;
        case "Place Cage":
            url = "http://www.placecage.com/400/400";
            break;
        case "Lorem Flickr":
            url = "https://loremflickr.com/400/400";
            break;
    }

    // set the attributes and append the image tag
    image.setAttribute("src", url);
    imageTag.appendChild(image);
    image.setAttribute("style", `width: ${width}px; height: ${height}px`);

});