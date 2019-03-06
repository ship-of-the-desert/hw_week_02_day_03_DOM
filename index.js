



let x = document.querySelector('#randomize');
x.addEventListener('click',function()
{
     let select= document.querySelector(".select").value;
     let width = document.querySelector(".width").value;
     let height =document.querySelector(".height").value;


 
 if (select == 'picsum.photos')
  url = "https://picsum.photos/200/300/?random";

 if (select == 'fillmurray')
  url= "http://www.fillmurray.com/200/350";

 if (select == 'placecage')
  url= "http://www.placecage.com/200/350";

 if (select == 'loremflickr')
  url= "https://loremflickr.com/200/350";
  
  let img = document.createElement('img');
  img.setAttribute("src", url);
  let imageContainer = document.querySelector('.image');
    imageContainer.appendChild(img);



    )

}
