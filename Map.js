(function() {
  function Map(title) {
    this.title = title;
  }

  Map.prototype.init = function(roomArray) {
    var that = this;
    roomArray = Array.prototype.slice.call(arguments);

    this.start = roomArray[0];
    this.loc = roomArray[0];

  };

  Map.prototype.move = function(direction) {
    var me = this;
    
    if(me.loc[direction]) {
      me.loc = me.loc[direction];
      console.log("You've entered " + me.loc.title);
      return;
    } 
    console.log("There's nothing in that direction.");
  }

  var createMap = function(title) {

    return new Map(title);

  }

  exports.createMap = createMap;
}).call(this);
