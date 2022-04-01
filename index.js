// import { TaxiRank } from "./factory-function/taxi-function.js";

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
const templateDisplay = document.getElementById("templateDisplay")
const buttons = document.querySelector(".buttons")
const errorMessage = document.querySelector(".errorMessage")
// const addNewDestination = document.querySelector(".form-control")
const newDestinationName = document.getElementById("newDestination")
const newQueueLength = document.getElementById("newQueue")

const addBtn = document.getElementById("addBtn")

const taxiApp = TaxiRank()

// get a reference to the template script tag
const templateSource = document.querySelector(".templateName").innerHTML;
// compile the template
const userTemplate = Handlebars.compile(templateSource);

//display in template on screen
templateDisplay.innerHTML = userTemplate({ destination: taxiApp.dataSet() })

function add(e) {
  if (e.target.name == "minus") {
    taxiApp.decreaseQueue(e.target.dataset.destination)
  }
  else if (e.target.name == "plus") {
    // console.log(e.target.dataset.destination);
    taxiApp.increaseQueue(e.target.dataset.destination)
  }
  templateDisplay.innerHTML = userTemplate({ destination: taxiApp.dataSet() })

}
templateDisplay.addEventListener('click', add)

function taxiDepart(e){
  if(e.target.name == "depart"){
    console.log(e.target.dataset.destination);
    taxiApp.taxiLeave(e.target.dataset.destination)
  }
  errorMessage.innerHTML = taxiApp.values().error
  templateDisplay.innerHTML = userTemplate({ destination: taxiApp.dataSet() })
}
templateDisplay.addEventListener('click', taxiDepart)

function newDestination(){
  taxiApp.addDestination(newDestinationName.value, newQueueLength.value)

  errorMessage.innerHTML = taxiApp.values().error
  templateDisplay.innerHTML = userTemplate({ destination: taxiApp.dataSet() })
}
addBtn.addEventListener('click', newDestination)



function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause Animation";
  } else {
    video.pause();
    btn.innerHTML = "Play Animation";
  }
}




