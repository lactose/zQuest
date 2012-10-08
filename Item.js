(function() {

  function Item(title, desc, message) {
    this.name = title;
    this.desc = desc;
    this.has = false;
    this.used = false;
    this.message = message;
  }

  Item.prototype.describe = function() {
    console.log("You see a " + this.desc);
  }

  Item.prototype.use = function() {
    var me = this;
    if(me.used === false) { 
      me.used = true;
      console.log(me.message);
    }

  }

  function createItem(title, desc, message) {
    return new Item(title, desc, message);
  }

  exports.createItem = createItem;

}).call(this);
