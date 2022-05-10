const args = process.argv.slice(2);

if (args.length) {
  for (let arg of args) {
    if (isNaN(parseInt(arg)) || parseInt(arg) < 0) continue;
    setTimeout(() => {
      console.log(parseInt(arg));
      process.stdout.write('\x07');
    }, parseInt(arg) * 1000);
  }
}
