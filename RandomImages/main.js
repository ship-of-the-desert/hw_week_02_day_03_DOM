let btn = document.querySelector('#randomize');
btn.addEventListener('click',function(){
    let img = document.createElement('img');
    img.setAttribute('src','https://source.unsplash.com/random');
    let imageContainer = document.querySelector('.image');
    imageContainer.appendChild(img);
})