
'use strict';

var doILikeDogs, doILikeToDance, doILikeToHike, doILikeToLift, doILikeBeer;

var truthme = ('Thats True!');
var falseme = ('That\'s False');

doILikeDogs = prompt('I hate fur on my cloths. Do you think I like dogs?').toLowerCase();
if (doILikeDogs === 'y' || doILikeDogs === 'yes') {
  alert(truthme + 'I love dogs!');
  console.log('They think I Like dogs');
} else {
  alert(falseme + 'I love dogs!');
  console.log('They think I don\'t like dogs');
}
doILikeToDance = prompt('I got uncomfortable shoes. Do you think I like to dance?').toLowerCase();
if (doILikeToDance === 'y' || doILikeToDance === 'yes') {
  alert(truthme + ' I cut rugs all day and night! ');
  console.log ('They think I like to dance.');
} else {
  alert(falseme + ' Dude I dance, ALL NIGHT LONG! ');
  console.log ('They think I don\'t like to dance');
}
doILikeToHike = prompt('I have a new North Face Jacket. Do you think I like to hike?').toLowerCase();
if (doILikeToHike === 'y' || doILikeToHike === 'yes') {
  alert(truthme + ' I would climb a lava filled volcano!');
  console.log ('They think I like to hike');
} else {
  alert(falseme + ' I love hiking');
  console.log ('They think I don\'t like to hike.');
}
doILikeToLift = prompt('I drink a lot of protein shakes and preworkout!! Do you think I like to Lift?').toLowerCase();
if (doILikeToLift === 'y' || doILikeToLift === 'yes') {
  alert(truthme + ' The question is "Do you even lift Bro?" ');
  console.log ('They think I like to lift'); 
} else {
  alert(falseme + 'I lift all day bro!');
  console.log ('They think I don\'t like to lift');
}

doILikeBeer = prompt('I just bought a mini-fridge. Do you think I like beer?').toLowerCase();
if (doILikeBeer === 'y' || doILikeBeer === 'yes') {
  alert(truthme + ' BEER ME! ');
  console.log ('They think I like beer.');
} else {
  alert(falseme + 'Beer is the nector of the GODS!');
  console.log ('They think I don\'t like beer.');
}

var guess = 0;

while (guess < 4) {
  var guessStates = parseInt(prompt('So I since you know I like to hike, which I do with my dog. I bet you can not guess how many states I have been to.'));

  console.log(guess);
  guess++;

  if (guessStates === 25) {
    alert('Wow. What are you a freaking psychic or something');
    console.log('They know how many states I\'ve been too');
    break;

  } else if (guessStates > 25 ) {
    alert('Nope too high! Try Again!');
    console.log('They guessed too many states');
      
  } else if (guessStates < 25 ) {
    alert('Nope too low. Try Again!');
    console.log('They guessed too few states');
  
  } else {
    alert('That\'s not a valid answer');
    console.log('They did not give a valid response');
    console.log(guessStates);
  }
}

var guessTwo = 0;

while (guessTwo < 6) {
  var statesLived = prompt('I\'ve lived in 4 states though. Can you guess just 1 of them?').toLowerCase();
  console.log (guessTwo);
  guessTwo++;

  if (statesLived === 'california' || statesLived === 'texas' ) {
    alert('VERY GOOD!! I have lived there');
    console.log('They guessed Cali or Texas');
    break;

  } else if (statesLived === 'washington') {
    alert('Duh, I\'m here now. Try Again though');
    console.log('They guessed Washington');

  } else {
    alert('Nope! Try again');
    console.log(statesLived);
  }
}

