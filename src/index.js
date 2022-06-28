//DOM ELEMENTS 
let main = document.getElementById('main')
let body = document.getElementsByTagName('body')
let activityBox = document.getElementById('activity')
let ul = document.createElement('ul')
var arr =[]



//FUNCTIONS

//RANDOMIZATION
function getRandom(min,max){
  let step1=max-min+1;
  let step2= Math.random()*step1;
  let result =Math.floor(step2)+min;
  return result
}


//FETCH ITEM FUNCTION fetches object from API
//This fetch gives us one object each time we call it, so we add that object to an array given as the argument.
//The category is the filter used for the activity, it'll only fetch an activity with the category given as the argument.
let fetchItem = function (arr, category){
  fetch(`http://www.boredapi.com/api/activity?type=${category}`)
  .then (res=>res.json())
  .then(function(obj){
    var arr = []
    arr.push(obj.activity)
    addToDOM(arr)
  })
}

//MAKE ARRAY FUNCTION appends activity onto DOM 
//Initiated when enter button clicked
function makeArray (category){
  for (let i =0; i<=5; i++){
    fetchItem(arr,category)
  }
  document.getElementById('activity').append(ul)
}



function addToDOM(arr){
  let index= getRandom(0, arr.length-1)
  ul.innerText=arr[index]
}

  

//SUBMIT FUNCTION ON 'PICK SOMETHING' ENTER BUTTON
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

  //EVENT LISTENER, SUBMITTING PICK SOMETHING (SUBMIT)
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


