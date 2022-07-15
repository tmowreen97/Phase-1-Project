//DOM ELEMENTS 
let main = document.getElementById('main')
let body = document.getElementsByTagName('body')
let ul = document.createElement('ul')

//FUNCTIONS

//RANDOMIZATION
//Function that produces a random number
function getRandom(min,max){
  let step1=max-min+1;
  let step2= Math.random()*step1;
  //Math.random() gives a decimal number between 0 and 1 (Math.random()= 0.23432)
  let result =Math.floor(step2)+min;
  //Math.floor() gives the nearest whole number (Math.floor(2.4657)=2)
  return result
}

//ADD TO DOM takes in an array as an argument.
//Selects a random element from the array (calling getRandom()) whos value is then assigned to a DOM unordered list element.
function addToDOM(arr){
  let index= getRandom(0, arr.length-1)
  ul.innerText=arr[index]
}

//FETCH ITEM fetches object from API
//The fetch request method returns the activity portion of the object from the API, and is then added to an array that is taken in as an argument.
//*ARRAY ITERATION* Using .filter() and .indexOf() methods a new array is formed by adding elements from the original array, filtering out the duplicates. 
//Calls addToDOM on the new array
let fetchItem = function (arr, category){
  fetch(`http://www.boredapi.com/api/activity?type=${category}`)
  .then (res=>res.json())
  .then(function(obj){
    arr.push(obj.activity)
    const nodupe = arr.filter((value,index)=>{
      return arr.indexOf(value)===index;
    })
    addToDOM(nodupe)})
}

//MAKE ARRAY loops through fetchItem function to create an array of random activities and add that to the DOM
//Initiated when enter button clicked.
//Takes a category as an argument based on user selection.
//Removes hidden attribute on Activity Box, making it visible on the DOM.
function makeArray (category){
  let arr=[]
  for (let i =0; i<=8; i++){
    fetchItem(arr,category)
  }
  let element = document.getElementById('activity')
  let hidden = element.getAttribute('hidden')
  if (hidden) {
    element.removeAttribute("hidden");
  }
  document.getElementById('activity').prepend(ul)

}

//SUBMIT FORM callback function for enter button event listener
//Calls makeArray function using user category selection as argument.
//Adds and removes hidden attribute to 'Add to Liked' button, making it visible on the DOM below the displayed activity
function submitForm(e){
  e.preventDefault()
  makeArray(selected)
  let element = document.getElementById('likeBtn')
  let hidden = element.getAttribute('hidden')
  if (hidden) {
    element.removeAttribute("hidden");
  }
}

//DOMCONTENTLOADED
document.addEventListener('DOMContentLoaded', ()=>{

  //EVENT LISTENER, SUBMITTING CATEGORY SELECTION (SUBMIT)
  document.querySelector('form').addEventListener('submit', submitForm)

  //EVENT LISTENER, ADDING LIKES (CLICK)
  let likeButton= document.getElementById('likeBtn')
  likeButton.addEventListener('click',function(){
    let like = document.createElement('li')
    like.innerText=ul.innerText
    document.getElementById('likeSection').append(like)
    let element = document.getElementById('likeSection')
    let hidden = element.getAttribute('hidden')
    if (hidden) {
      element.removeAttribute("hidden");
    }
  }
  )

  //EVENT LISTENER, RANDOM COLORED HEADING (MOUSEOVER)
  let colors = ["orange", "blue", "yellow", "green", "purple", "magenta", "pink", "red", "white"]
  document.querySelector('h1').addEventListener('mouseover', function(e){
    let index = getRandom(0,colors.length-1) 
    e.target.style.color= colors[index]
  })



  //DOMCONTENT LOADED
  })


