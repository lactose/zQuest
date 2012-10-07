(function() {

  function Item(title, desc) {
    this.name = title;
    this.desc = desc;
    this.has = false;
  }

  Item.prototype.describe = function() {
    console.log("You see a " + this.desc);
  }

  function createItem(title, desc) {
    return new Item(title, desc);
  }

  exports.createItem = createItem;

}).call(this);
