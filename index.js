/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(time) { 
  let split = time.split(":").map( (val) => parseInt(val))
  if (split[0] < 12) {
    return "Good Morning"
  } else if ((split[0] >= 12 && split[0] < 17) || (split[0] === 17 && split[1] === 0)) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }

}

function displayMessage(message) {
  document.querySelector("#greeting").innerText = message
}