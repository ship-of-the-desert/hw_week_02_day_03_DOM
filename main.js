var image = document.querySelector('.image');

// let genImg = document.createElement("img")
// image.appendChild(genImg)
// genImg.setAttribute("onclick", "src= https://picsum.photos/200/200")
    var site = document.getElementById("select").value

    // if (document.getElementById("select").value = "picsum"){
    //     ("https://picsum.photos/"+width+ "/" + height)
    // } else if (document.getElementById("select").value = "fillMurray"){
    //      ("http://www.fillmurray.com/"+width+ "/" + height)
    // }else if (document.getElementById("select").value = "placeCage"){
    //     ("http://www.placecage.com/c/"+width+ "/" + height)
    // }else {
    //     ("https://loremflickr.com/"+width+ "/" + height)
    // }
    



function random(){
    let width = document.querySelector(".width").value
    let height = document.querySelector(".height").value
    let genImg = document.createElement("img")
    let imgSrc = "https://picsum.photos/"+width+ "/" + height
    image.appendChild(genImg) 
    // document.querySelector("img").setAttribute(imgSrc)
    // image.appendChild(genImg) 
    genImg.src = imgSrc;

}

// ("https://picsum.photos/"+width+ "/" + height)


// function link (){
//     if (site == "picsum"){
//         ("https://picsum.photos/"+width+ "/" + height)
//     } else if (site ==  "fillMurray"){
//          ("http://www.fillmurray.com/"+width+ "/" + height)
//     }else if (site ==  "placeCage"){
//         ("http://www.placecage.com/c/"+width+ "/" + height)
//     }else {
//         ("https://loremflickr.com/"+width+ "/" + height)
//     }
// }
// if (site == "picsum"){
//     ("https://picsum.photos/"+width+ "/" + height)
// } else if (site ==  "fillMurray"){
//      ("http://www.fillmurray.com/"+width+ "/" + height)
// }else if (site ==  "placeCage"){
//     ("http://www.placecage.com/c/"+width+ "/" + height)
// }else {
//     ("https://loremflickr.com/"+width+ "/" + height)
// }