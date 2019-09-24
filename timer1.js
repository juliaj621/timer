let arguments = process.argv.slice(2);
let newArgs = arguments.filter((item => item > 0));

const sortNumbers = (arg) => {
  for (let i = 0; i < arg.length; i++) {
    setTimeout(function () {
      console.log(arg[i] + ' seconds');
      process.stdout.write('\x07');
    }, arg[i] * 1000);
  }
};
sortNumbers(newArgs);