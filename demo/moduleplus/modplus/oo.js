define(function(require, exports, module){
    var mp = module.constructor.prototype;
    var mix = function(r, s, ov, wl){
        if (!s || !r) {
            return r;
        }
        if (ov === undefined) {
            ov = true;
        }
        var i, p, l;
        if (wl && (l = wl.length)) {
            for (i = 0; i < l; i++) {
                p = wl[i];
                if (p in s) {
                    if (ov || !(p in r)) {
                        r[p] = s[p];
                    }
                }
            }
        }
        else {
            for (p in s) {
                if (ov || !(p in r)) {
                    r[p] = s[p];
                }
            }
        }
        return r;
    };
    mp.mix = mix;
    var object = function(o){
		var cn = this.getName().split("/").join("_");
		eval("function " + cn + "(){}" + cn + ".prototype = o;var r = new " + cn + "();");
		return r;
    };
    mp.extend = function(r, s,px, sx){
        if (!s || !r) {
            return r;
        }
        var OP = Object.prototype;
		var sp = s.prototype;
		var rp = object.call(this,sp);
        r.prototype = rp;
        rp.constructor = r;
        r.superclass = sp;
        if (s !== Object && sp.constructor === OP.constructor) {
            sp.constructor = s;
        }
        if (px) {
            mp.mix(rp, px);
        }
        if (sx) {
            mp.mix(r, sx);
        }
		if(!this.meta){
			this.setMeta("constructor");
		}
        return r;
    };
    
});
