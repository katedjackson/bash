var commands = require('./commands.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var args = data.toString().trim().split(' ');
  var cmd = args[0];
  args.shift();
  var params = args.join(' ');
  commands[cmd](params);
  process.stdout.write('\nprompt > ');
});
