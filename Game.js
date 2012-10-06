var readline = require("readline")
  , rl = readline.createInterface(process.stdin, process.stdout);

(function() {

  function Game(map) {
    this.map = map;
  }

  Game.prototype.start = function() {
    var map = this.map;

    rl.setPrompt('ZQUEST> ');
    rl.prompt();

    rl.on('line', function(line) {
      switch(line.trim()) {
        case 'n':
          map.move('north');
          console.log("You've entered " + map.loc.title);
          break;
        default:
          console.log("Didn't understand your request!");
          break;
      }

      rl.prompt();
    }).on('close', function() {
      console.log("Have fun in the real world...");
      process.exit(0);
    });

  };

  var createGame = function(map) {
    return new Game(map);
  }
  exports.createGame = createGame;
}).call(this);
