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
    this.loc = this.loc[direction];
  }

  var createMap = function(title) {

    return new Map(title);

  }

  exports.createMap = createMap;
}).call(this);
