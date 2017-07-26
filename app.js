'use strict';
//the array I want saved is product.clickArray




function ProductImage(number) {
  this.name = number;
  this.source = 'images/' + this.name + '.jpg';
  this.amountOfShows = 0;
  this.timesClicked = 0;
  ProductImage.all.push(this);
}

ProductImage.totalClicks = 0;//counts clicks

ProductImage.all = []; //array for my images

ProductImage.allNames = ['bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];//pushed into array

var clickArray = [];//array for chart
ProductImage.namesChartArray = []; //array for ch


var previouslyShown = [];

for(var i = 0; i < ProductImage.allNames.length; i++){
  new ProductImage(ProductImage.allNames[i]); //creates new object with images from all names array and will be moved into an else of
  //an if statement that relates to your local storage

}
ProductImage.leftImage = document.getElementById('left');
ProductImage.centerImage = document.getElementById('center');
ProductImage.rightImage = document.getElementById('right');
ProductImage.container = document.getElementById('imageContainer');


function makeRandomNumber(){
  return Math.floor(Math.random() * ProductImage.all.length);
}

function displayImages() {

  console.log(previouslyShown, 'previouslyShown images');

  var numbers = [];
  numbers[0] = makeRandomNumber();
  numbers[1] = makeRandomNumber();
  while(numbers[0] === numbers [1]){
    numbers[1] = makeRandomNumber();
    console.log('dup found');
  }
  numbers[2] = makeRandomNumber();
  while(numbers[2] === numbers [1] || numbers[2] === numbers[0]){
    numbers[2] = makeRandomNumber();
    console.log('dup found');
  }
  ProductImage.leftImage.src = ProductImage.all[numbers[0]].source; //source of the array element, includes file path
  ProductImage.centerImage.src = ProductImage.all[numbers[1]].source;
  ProductImage.rightImage.src = ProductImage.all[numbers[2]].source;
  ProductImage.leftImage.alt = ProductImage.all[numbers[0]].name;//just shows the name
  ProductImage.centerImage.alt = ProductImage.all[numbers[1]].name;
  ProductImage.rightImage.alt = ProductImage.all[numbers[2]].name;
  ProductImage.all[numbers[0]].amountOfShows += 1;
  ProductImage.all[numbers[1]].amountOfShows += 1;
  ProductImage.all[numbers[2]].amountOfShows += 1;
  previouslyShown = numbers;


}


function showList(){
  var ulEl = document.getElementById('thelist');
  for(var i = 0; i < ProductImage.all.length; i++)
  {
    var liEl = document.createElement('li');
    liEl.textContent = ProductImage.all[i].name + ' was shown ' + ProductImage.all[i].amountOfShows + ' times was clicked ' + ProductImage.all[i].timesClicked + ' times';
    ulEl.appendChild(liEl);

  }


}

//pushNamesAndClicks();
function handleClick(e){

  if(e.target.id === 'imageContainer'){
    return alert('you missed! click the image please!'); //return will kick us out of function
  }

  ProductImage.totalClicks += 1;
  //clickArray.push();
  console.log(ProductImage.totalClicks);
  for(var i = 0; i < ProductImage.all.length; i ++)
  {
    if(e.target.alt === ProductImage.all[i].name){
      ProductImage.all[i].timesClicked += 1;
      clickArray[i] = ProductImage.all[i].timesClicked;
    }
  }
  if(ProductImage.totalClicks === 25){
    ProductImage.container.removeEventListener('click', handleClick);
    //set source attributes to zero //this is where I will put the local storage send
    localStorage.setItem('clickArray', JSON.stringify(clickArray));
    localStorage.clickArray = JSON.stringify(clickArray);//local storage
    return showList();
  }
  console.log(e.target.alt);
  displayImages();
}

displayImages();



ProductImage.container.addEventListener('click', handleClick);

//what I would like to use to deal with the clicks/

function createChart () {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ProductImage.allNames,//push names of images
      datasets: [{
        label: '# of Clicks',
        data:  clickArray,//clickArray,//push times clicked
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}

document.getElementById('chartButton').addEventListener('click', createChart);
console.log(JSON.parse(localStorage.getItem(clickArray)));
