define(function(require,exports,module){
    var Developer = require("mptest/developer");
	module.setMeta("instance",Developer);
    var dev1 = new Developer("A", 1, ["java", "javascript"]);
	console.log(dev1);
	console.log(seajs._data.memoizedMods);
	return dev1;	
});
