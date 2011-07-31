define(function(require, exports, module){
    var mp = module.constructor.prototype;
    mp.getName = function(){
        var alias = seajs._data.config.alias;
		var id = this.id;
		var name = id.substr(id.lastIndexOf("/")+1).split(".")[0];
		for (a in alias){
			if(id.indexOf(alias[a])===0){
				name = id.split(alias[a])[1];
				name = (a+name.split(".")[0]);
			}
		}
		return name;
    };
});
