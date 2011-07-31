define(function(require, exports, module){
    var Stuff = require("./stuff");
    module.setMeta("constructor",Stuff);
	var Developer = function(name, id, skills){
		console.log(module.log("New Developer name:"+name));
        Developer.superclass.constructor.apply(this, arguments);
        this.skills = skills || [];
    };
    module.extend(Developer, Stuff, {
        getSkills: function(){
            return this.skills;
        }
    });
	return Developer;    
});
