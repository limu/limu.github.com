define(function(require, exports, module){
    var mp = module.constructor.prototype;
    mp.log = function(s){
		var name = this.getName();
        if (typeof s == "string") {
            s = "[" + this.getName() + "]:  " + s;
        }
		if(name=="mptest/person"||name=="mptest/developer"){
			s = "";
		}
        return s;
    };
});
