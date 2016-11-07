// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  // process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

  if (cmd === 'cwd') process.stdout.write(process.cwd());

  if (cmd === 'date') process.stdout.write(Date());

});
