var   Map = require("./Map")
    , Room = require("./Room")
    , Game = require("./Game")
    , Item = require("./Item")
    , Entity = require("./Entity");

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
  var maiden = Entity.createEntity("Fair maiden", {message: "Hello sir. Beware of the knight in the arena.", desc: "A beautiful lady."}); 

  kitchen.items.push(knife);
  pantry.entities.push(maiden);

  newMap.init(throne, kitchen);

  var game = Game.createGame(newMap);
  game.start();

}).call(this);

