(function() {
  function Room(title) {

    this.title = title;
    this.north = null;
    this.south = null;
    this.east = null;
    this.west = null;
  }
  var createRoom = function(title) {
    return new Room(title);
  }
  exports.createRoom = createRoom;
}).call(this);
