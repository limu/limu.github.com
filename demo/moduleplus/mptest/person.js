define(function(require, exports, module){
    module.setMeta("constructor");
    var Person = function(name){
        console.log(module.log("New Person name:" + name));
        this.name = name;
    };
    module.extend(Person, Object, {
        getName: function(){
            return this.name;
        }
    });
    return Person;
});
