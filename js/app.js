'use strict'

var doILikeDogs, doILikeToDance, doILikeToHike, doILikeToLift, doILikeBeer

var truthme = ('Thats True!');
var falseme = ('That\'s False');

doILikeDogs = prompt('I hate fur on my cloths. Do you think I like dogs?').toLowerCase();
    if (doILikeDogs === 'y' || doILikeDogs === 'yes') { 
        alert(truthme + 'I love dogs!') 
        console.log('They think I Like dogs');
    } else {
        alert(falseme + 'I love dogs!');
        console.log('They think I don\'t like dogs');
    }
doILikeToDance = prompt('I got uncomfortable shoes. Do you think I like to dance?').toLowerCase();
    if (doILikeToDance === 'y' || doILikeToDance === 'yes') {
        alert(truthme + ' I cut rugs all day and night! ')
        console.log ('They think I like to dance.')
    } else {
        alert(falseme + ' Dude I dance, ALL NIGHT LONG! ');
        console.log ('They think I don\'t like to dance')
    }
doILikeToHike = prompt('I have a new North Face Jacket. Do you think I like to hike?').toLowerCase();
    if (doILikeToHike === 'y' || doILikeToHike === 'yes') {
        alert(truthme + ' I would climb a lava filled volcano!');
        console.log ('They think I like to hike')
    } else {
        alert(falseme + ' I love hiking');
        console.log ('They think I don\'t like to hike.')
    }
doILikeToLift = prompt('I drink a lot of protein shakes and preworkout!! Do you think I like to Lift?').toLowerCase()
    if (doILikeToLift === 'y' || doILikeToLift === 'yes')  {
        alert(truthme + ' The question is "Do you even lift Bro?" '); 
        console.log ('They think I like to lift') 
    } else {
        alert(falseme + 'I lift all day bro!');
        console.log ('They think I don\'t like to lift')
    }

doILikeBeer = prompt('I just bought a mini-fridge. Do you think I like beer?').toLowerCase()
    if (doILikeBeer === 'y' || doILikeBeer === 'yes') {
        alert(truthme + ' BEER ME! ');
        console.log ('They think I like beer.')
    } else {
        alert(falseme + 'Beer is the nector of the GODS!'); 
        console.log ('They think I don\'t like beer.')
    }