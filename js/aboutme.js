var body=document.querySelector('body');
body.style.fontFamily='Arial, sans-serif';
body.style.textAlign='center';

var span=document.querySelectorAll('span');
span[0].innerText='Shadow.';
span[1].innerText='Feline.';
span[2].innerText='Makkah.';

var liClass=document.querySelectorAll('li');
liClass[0].setAttribute('class','listitem');
liClass[1].setAttribute('class','listitem');
liClass[2].setAttribute('class','listitem');

liClass[0].style.color("dodgerblue")
liClass[1].style.color("dodgerblue")
liClass[2].style.color("dodgerblue")

var newImage=document.createElement("img");
newImage.setAttribute('src','download.jpeg');
document.body.appendChild(newImage);
