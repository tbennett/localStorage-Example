const btn = document.getElementById('btn1');
btn.addEventListener('click', clickCounter);


function clickCounter(e) {
  // check property and set value accordingly
  if (typeof Storage !== "undefined") {
    let count = localStorage.getItem('clickcount');
    if (count) {
      localStorage.setItem('clickcount', Number(count) + 1);
    } else {
      localStorage.setItem('clickcount', 1);
    }
    
    // render results to the DOM
    document.getElementById("result").innerHTML =
      `You have clicked the button ${localStorage.getItem('clickcount')} time(s).`;
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, your browser does not support web storage...";
  }
}