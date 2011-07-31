define(function(require, exports, module){
    var Person = require("./person");
    module.setMeta("constructor",Person);
	var Stuff = function(name, id){
        console.log(module.log("New Stuff name:" + name));
        Stuff.superclass.constructor.apply(this, arguments);
        this.id = id;
    };
    module.extend(Stuff, Person, {
        getId: function(){
            return this.id;
        }
    });
	return Stuff;
});
