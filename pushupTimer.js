function broUps() {
  var bros = ['Bobby', 'Richard', 'Other Ryan', 'Phillip', 'Taylor', 'Original Ryan', 'Todd', 'Sandeep'];
  // var whichBro = Math.floor(Math.random() * bros.length);
  var pushups;
  bros.forEach(function(e) {
    pushups = pushupNumber(e);
    console.log(e + ": " + pushups);
  });
  console.log("\n");
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


broUps();
var minutes = function(mins) { return mins * 60 * 1000; }
setInterval(broUps, minutes(30));
