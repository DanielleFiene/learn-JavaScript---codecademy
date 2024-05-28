let raceNumber = Math.floor(Math.random() * 1000);

let early = false;

let age = 18;

if (age >= 18 && early) {
  raceNumber += 1000;
} 

if (age >= 18 && early) {
  console.log(`Your race will start at 09:30am and you race number will be: ${raceNumber}`);
} else if (age > 18 && !early) {
  console.log(`Your race will start at 11:00am and you race number will be: ${raceNumber}`);
} else if (age < 18) {
  console.log(`Your race will start at 12:30am and you race number will be: ${raceNumber}`);
} else {
  console.log('Please go see the registration desk!');
}