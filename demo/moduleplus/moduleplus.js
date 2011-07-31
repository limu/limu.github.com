define(function(require, exports, module){
	
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
    var mp = module.constructor.prototype;
    mp.exportConstructor = function(fn, name){
        this.exports = fn;
        this.className = name || "";
    };
    mp.mix = mix;
    mp.extend = function(r, s, cn,px, sx){
		
        if (!s || !r) {
            return r;
        }
        var OP = Object.prototype, O = function(o){
			//function F(){}
			//F.prototype = o;
			//var r = new F();
			//eval("function __"+cn+"__(){}__"+cn+"__.prototype = o;var r = new __"+cn+"__();");
			eval("function "+cn+"(){}"+cn+".prototype = o;var r = new "+cn+"();");
			return r;            
        }, sp = s.prototype, rp = O(sp);
        r.prototype = rp;
        rp.constructor = r;
        r.superclass = s;
        r.superprototye = sp;
        if (s !== Object && sp.constructor === OP.constructor) {
            sp.constructor = s;
        }
        if (px) {
            mix(rp, px);
        }
        if (sx) {
            mix(r, sx);
        }
        return r;
    };
    mp.log = function(s){
		//debugger;
		var info =  "[className:" + this.className + "]" + s + "  @" + this.id;
		if(this.className=="Person"){
			return info;
		}else{
			return info;
		}        
    };
	mp.log = function(s){
		console.log(s);
	};
    return mp;
});
