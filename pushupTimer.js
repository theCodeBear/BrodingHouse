
// takes the time to put on the clock in seconds
function timer(time) {
  var clock = formatTime(time);
  if (time < 0) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("--------------------------------\n");
    // Do the action at the end of each countdown:
    broUps(setNum++);
    return;
  }
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(clock);
  setTimeout(timer, 1000, --time);
}


function formatTime(time) {
  var secs = (time%60 > 9) ? (time%60) : "0"+(time%60);
  return Math.floor(time/60) + ":" + secs;
}



function broUps(setNum) {
  var bros = ['Bobby', 'Richard', 'Other Ryan', 'Phillip', 'Taylor', 'Original Ryan', 'Todd', 'Sandeep'];
  // var whichBro = Math.floor(Math.random() * bros.length);
  var pushups;
  console.log("Set " + setNum + ":\n");
  bros.forEach(function(e) {
    pushups = pushupNumber(e);
    console.log(e + ": " + pushups);
  });
  console.log(""); // print a blank line for spacing purposes
  //  console.log(bros[whichBro] + ": " + pushups);
}


function pushupNumber(bros) {
  var min, differential, max;
  switch (bros) {
    case 'Bobby':
      min = 20;
    max = 40;
    break;
    case 'Taylor':
      min = 20;
    max = 45;
    break;
    case 'Richard':
      min = 20;
    max = 50;
    break;
    case 'Original Ryan':
      min = 20;
    max = 40;
    break;
    case 'Phillip':
      min = 20;
    max = 50;
    break;
    case 'Todd':
      min = 20;
    max = 35;
    break;
    case 'Other Ryan':
      min = 15;
    max = 25;
    break;
    case 'Sandeep':
      min = 10;
    max = 20;
    break;
    default:
      break;
  }
  differential = max - min;
  return Math.floor(Math.random() * differential) + min;
}



function main() {
  var setNum = 1;
  var restInMinutes = 10;
  var minutes = function(mins) { return mins * 60 * 1000; }
  var intervalDisplayInMilli = (minutes(restInMinutes)+2000);
  //console.log(intervalDisplayInMilli);
  console.log("\n");
  broUps(setNum++);
  timer(minutes(restInMinutes)/1000);
  setInterval(timer, intervalDisplayInMilli, minutes(restInMinutes)/1000);
}

main();
