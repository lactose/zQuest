(function() {
  function Room(title) {

    this.title = title;
    this.north = null;
    this.south = null;
    this.east = null;
    this.west = null;
    this.items = [];
    this.entities = [];
  }

  Room.prototype.survey = function() {
    var me = this;
    if(me.items.length > 0) {
      var l = me.items.length - 1;
      do {
        me.items[l].describe();
      } while(l--);
      console.log("");
    }
    if(me.north) console.log( me.north.title + " lies to the north.");
    if(me.south) console.log(  me.south.title + " lies to the south.");
    if(me.east) console.log(  me.east.title + " lies to the east.");
    if(me.west) console.log(  me.west.title + " lies to the west.");
  }

  Room.prototype.use = function() {
    var me = this;
    if(me.items.length > 0) {
      var l = me.items.length - 1;
      do {
        me.items[l].use();
      } while(l--);
    }

    

  }


  var createRoom = function(title) {
    return new Room(title);
  }
  exports.createRoom = createRoom;
}).call(this);
