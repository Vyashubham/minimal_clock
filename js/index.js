// Javascript scripts to invoke clock and to show quotes.

// Function to invoke clock
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = h + ":" + m;
  document.title = h + ":" + m;
  setTimeout(startTime, 1000);

  // Code printing hours remaning in the day
  let hours_remain = 24 - today.getHours();
  document.getElementById("hrs_remain").innerHTML =
    Math.abs(hours_remain) + " hours remaning.";
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

// Function to show quotes
function quotes() {
  let quote_zero = "Get to work!";
  let quote_one = "Think, its not illegal yet.";
  let quote_two = "Sleep less";
  let quote_three = "breathe.";
  let quote_four = "be calm.";
  let quote_five = "hurray!";
  let quote_six = "sorry for the mean, awful Accurate things I said.";
  let quote_seven = "Normal's underrated.";
  let random_num = Math.floor(Math.random() * 8);
  // console.log(random_num);

  if (random_num == 0) {
    document.getElementById("text").innerHTML = quote_zero;
  } else if (random_num == 1) {
    document.getElementById("text").innerHTML = quote_one;
  } else if (random_num == 2) {
    document.getElementById("text").innerHTML = quote_two;
  } else if (random_num == 3) {
    document.getElementById("text").innerHTML = quote_three;
  } else if (random_num == 4) {
    document.getElementById("text").innerHTML = quote_four;
  } else if (random_num == 5) {
    document.getElementById("text").innerHTML = quote_five;
  } else if (random_num == 6) {
    document.getElementById("text").innerHTML = quote_six;
  } else if (random_num == 7) {
    document.getElementById("text").innerHTML = quote_seven;
  }
}
