console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    console.log(`Your name is: ${name.slice(0, -1)}`);
  }
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
