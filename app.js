'use strict';

function ProductImage(number) {
  this.name = number;
  this.source = 'images/' + this.name + '.jpg';
  this.timesShown = 0;//counts time an image is shown
  this.timesEachImageClicked = 0;
  ProductImage.all.push(this);
}

//var timesCycled = 0;//counts clicks

ProductImage.all = []; //array for my images

ProductImage.allNames = ['bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];//pushed into array

for(var i = 0; i < ProductImage.allNames.length; i++){ //loop through the number of image names and create object of new image with
  // new image from all names array
  new ProductImage(ProductImage.allNames[i]); //creates new object with images from all names array
}
// if(timesCycled > 2){
// alert('you are out of clicks');
// //display a list of the products..
// document.getElementById('the_image').removeEventListener('click', randomImage);
// document.getElementById('the_image1').removeEventListener('click', randomImage1);
// document.getElementById('the_image2').removeEventListener('click', randomImage2);
// }


 ProductImage.imgEl = document.getElementById('the_image');//gets element id from image 0 spot
 ProductImage.imgEl1 = document.getElementById('the_image1'); //gets element id from image 1 spot
 ProductImage.imgEl2 = document.getElementById('the_image2');

function randomImage() {
    var randomIndex = Math.floor(Math.random() * ProductImage.all.length);
    ProductImage.imgEl.src = ProductImage.all[randomIndex].source;
    ProductImage.imgEl.alt = ProductImage.all[randomIndex].name; ///changes image0
    ProductImage.all[randomIndex].timesShown += 1;
    ProductImage.all[randomIndex].timesEachImageClicked += 1;
    console.log(ProductImage.all[randomIndex].name + ' has been shown ' + ProductImage.all[randomIndex].timesShown + ' times' + ' and clicked: ' + ProductImage.all[randomIndex].timesEachImageClicked);
    //event for clicking 0/---------------------------------------
  }

  function randomImage1(){
    var randomIndex1 = Math.floor(Math.random() * ProductImage.all.length);
    ProductImage.imgEl1.src = ProductImage.all[randomIndex1].source;
    ProductImage.imgEl1.alt = ProductImage.all[randomIndex1].name;
    ProductImage.all[randomIndex1].timesShown += 1;
    ProductImage.all[randomIndex1].timesEachImageClicked += 1;
    console.log(ProductImage.all[randomIndex1].name + ' has been shown ' + ProductImage.all[randomIndex1].timesShown + ' times' + ' and clicked: ' + ProductImage.all[randomIndex1].timesEachImageClicked);
    //random image for one---------------------------------------
  }

  function randomImage2(){
    var randomIndex2 = Math.floor(Math.random() * ProductImage.all.length);
    ProductImage.imgEl2.src = ProductImage.all[randomIndex2].source;
    ProductImage.imgEl2.alt = ProductImage.all[randomIndex2].name;
    ProductImage.all[randomIndex2].timesShown += 1;
    ProductImage.all[randomIndex2].timesEachImageClicked += 1;
    console.log(ProductImage.all[randomIndex2].name + ' has been shown ' + ProductImage.all[randomIndex2].timesShown + ' times' + ' and clicked: ' + ProductImage.all[randomIndex2].timesEachImageClicked);
    //random images for two-------------------------------
  }
//  timesCycled++;

//end of if else statement for 25


document.getElementById('the_image').addEventListener('click', randomImage);
document.getElementById('the_image1').addEventListener('click', randomImage);
document.getElementById('the_image2').addEventListener('click', randomImage);

document.getElementById('the_image').addEventListener('click', randomImage1);
document.getElementById('the_image1').addEventListener('click', randomImage1);
document.getElementById('the_image2').addEventListener('click', randomImage1);


//
document.getElementById('the_image').addEventListener('click', randomImage2);
document.getElementById('the_image1').addEventListener('click', randomImage2);
document.getElementById('the_image2').addEventListener('click', randomImage2);
//
randomImage();
//
randomImage1();

randomImage2();


//what I would like to use to deal with the clicks/
