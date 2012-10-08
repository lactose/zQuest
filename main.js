var   Map = require("./Map")
    , Room = require("./Room")
    , Game = require("./Game")
    , Item = require("./Item");

(function() {

  var DIRECTION = {
    north : 0,
    south : 1,
    east  : 2,
    west  : 3
  };

  var newMap = Map.createMap("Level 1: The Boring Castle")
    , throne = Room.createRoom("Throne room")
    , kitchen = Room.createRoom("Kitchen")
    , pantry = Room.createRoom("Pantry")
    , boiler = Room.createRoom("Boiler room")
    , arena =  Room.createRoom("The arena");

  throne.north = kitchen;
  kitchen.south = throne;
  kitchen.east = pantry;
  pantry.west = kitchen;
  kitchen.west = boiler;
  boiler.east = kitchen;
  kitchen.north = arena;
  arena.south = kitchen;


  var knife = Item.createItem("Knife", "A dull, rusty kitchen knife.", "You now have the knife.");

  kitchen.items.push(knife);

  newMap.init(throne, kitchen);

  var game = Game.createGame(newMap);
  game.start();

}).call(this);

