var readline = require("readline")
  , rl = readline.createInterface(process.stdin, process.stdout);

(function() {

  function Game(map) {
    this.map = map;
    this.items = [];
  }

  Game.prototype.start = function() {
    var me = this;
    var map = this.map;
    me.message = "";

    console.log("Welcome to ZQUEST.");
    console.log("You are in " + map.title);
    rl.setPrompt('ZQUEST> ');
    rl.prompt();

    rl.on('line', function(line) {
      me.message = ""
      switch(line.trim()) {
        case 'n':
          map.move('north');
          break;
        case 's':
          map.move('south');
          break;
        case 'e':
          map.move('east');
          break;
        case 'w':
          map.move('west');
          break;
        case 'u':
          map.loc.use();
          break;
        case 't':
          map.loc.talk();
          break;
        case 'l':
          map.loc.survey();
          break;
        case 'help':
          me.message = "ZQUEST commands: \n";
          me.message += "   n:    go north\n";
          me.message += "   s:    go south\n";
          me.message += "   e:    go east\n";
          me.message += "   w:    go west\n";
          me.message += "   l:    look around you\n";
          me.message += "   u:    use an item\n";
          me.message += "   t:    talk to somebody\n";
          me.message += "   a:    attack\n";
          me.message += "   q:    quit\n";
          break;
        case 'q':
          rl.close();
        default:
          me.message = "Didn't understand your request!";
          break;
      }
      if(me.message.length > 0) console.log(me.message);
      rl.prompt();
    }).on('close', function() {
      console.log("Have fun in the real world...\n");
      process.exit(0);
    });

  };

  var createGame = function(map) {
    return new Game(map);
  }
  exports.createGame = createGame;
}).call(this);
