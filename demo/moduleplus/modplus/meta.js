define(function(require, exports, module){
    var mp = module.constructor.prototype;
    mp.setMeta = function(type, obj){
        var typeList = ["constructor", "static", "instance", "abstract", "interface"];
        this.meta = {};
        if (typeList.join("@").indexOf(type) === -1) {
            throw new Error("Error type value!");
        }
        else {
            this.meta.type = type;
        }
        this.meta.name = this.getName();
        this.meta.id = this.id;
        this.meta.dependencies = this.dependencies;
        obj = obj || Object;
        if (type == "instance") {
            this.meta.constructor = obj;
        }
        else {
            this.meta.superclass = obj.prototype;
        }
    };
});
