const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\rbeep');
  }
  if (key <= 9 && key >= 1) {
    process.stdout.write(`\rsetting timer for ${key} seconds...\n`);

    setTimeout(() => {
      process.stdout.write('\rbeep');
    }, key * 1000);
  }

  if (key === '\u0003') {
    process.stdout.write('\nThanks for using me, ciao!\n');
    process.exit();
  }
});
