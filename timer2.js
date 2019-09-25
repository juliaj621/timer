const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

const action = (key) => {
  // control C to exit + output "Thanks for using me, ciao!"
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
  // if user presses b, beep right away
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  // if user presses 1-9, output "setting timer for x seconds..." and beep after that number of seconds
  for (let i of numbers)
    if (key === i) {
      console.log(`setting timer for ${i} seconds...`)
      setTimeout(function () {
        process.stdout.write('\x07');
      }, i * 1000);
    }
}

stdin.on('data', action);
