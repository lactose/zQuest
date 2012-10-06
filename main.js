var   Map = require("./Map")
    , Room = require("./Room")
    , Game = require("./Game");

(function() {

  var DIRECTION = {
    north : 0,
    south : 1,
    east  : 2,
    west  : 3
  };

  var newMap = Map.createMap("The Hall of the Minotaur");
  var throne = Room.createRoom("Throne room.");
  var kitchen = Room.createRoom("Kitchen.");

  throne.north = kitchen;
  kitchen.south = throne;
  newMap.init(throne, kitchen);

  var game = Game.createGame(newMap);
  game.start();

}).call(this);

