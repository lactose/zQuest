(function() {

  function Entity(name, options) {
    this.name = name;
    if(options.desc) this.desc = options.desc;
    if(options.message) this.message = options.message;
    if(options.hp) this.hp = options.hp;
  }

  Entity.prototype.talk = function() {
    if(this.message) { 
      console.log(this.message); 
      return;
    }
    console.log(this.name + " doesn't seem to want to talk.");
  }

  Entity.prototype.describe = function() {
    if(this.desc) {
      console.log(this.desc);
      return;
    }
  }

  function createEntity(name, options) {
    return new Entity(name, options);
  }

  exports.createEntity = createEntity;

}).call(this);
