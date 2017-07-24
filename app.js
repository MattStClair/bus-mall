'use strict';

function Image(number) {
  this.name = number;
  this.source = 'images/' + this.name + '.jpg';
  this.timesShown = 0;//counts time an image is shown
  this.timesClicked = 0;
  Image.all.push(this);
}

Image.all = []; //array for my images

Image.allNames = ['bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep'];//pushed into array

for(var i = 0; i < Image.allNames.length; i++){ //loop through the number of image names and create object of new image with
                                                // new image from all names array

  new Image(Image.allNames[i]); //creates new object with images from all names array
}

Image.imgEl = document.getElementById('the_image');//gets element id from image 0 spot
Image.imgEl1 = document.getElementById('the_image1'); //gets element id from image 1 spot
Image.imgEl2 = document.getElementById('the_image2');//gets element id from image 2 spot

function randomImage(){   //add 'e' in again to make if statement work
  // console.log(e.target.alt);
  // if(e.target.alt === 'nine'){ ////this would be where I would stop re occurences, if e.target.alt === e.target.alt then run random again
  //   alert('OMG A BABY GOAT');
  // }
  var randomIndex = Math.floor(Math.random() * Image.all.length);
  Image.imgEl.src = Image.all[randomIndex].source;
  Image.imgEl.alt = Image.all[randomIndex].name; ///changes image0
  Image.all[randomIndex].timesShown += 1;
  Image.all[randomIndex].timesClicked += 1;
  console.log(Image.all[randomIndex].name + ' has been shown ' + Image.all[randomIndex].timesShown + ' times' + ' and clicked: ' + Image.all[randomIndex].timesClicked);
}

function randomImage1(){
  var randomIndex1 = Math.floor(Math.random() * Image.all.length);
  Image.imgEl1.src = Image.all[randomIndex1].source;
  Image.imgEl2.alt = Image.all[randomIndex1].name;

  Image.all[randomIndex1].timesShown += 1;
  Image.all[randomIndex1].timesClicked += 1;
  console.log(Image.all[randomIndex1].name + ' has been shown ' + Image.all[randomIndex1].timesShown + ' times' + ' and clicked: ' + Image.all[randomIndex1].timesClicked);
}



document.getElementById('the_image').addEventListener('click', randomImage);

document.getElementById('the_image2').addEventListener('click', randomImage);


randomImage();

randomImage1();






//what I would like to use to deal with the clicks/
