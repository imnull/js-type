(function(){

function ostr(val){	return Object.prototype.toString.call(val); }
function tstr(val){	return typeof(val); }

var foo = {
	isString : function(val){ return tstr(val) == 'string'; }
	, isObject : function(val){ return ostr(val) == '[object Object]'; }
	, isArray : function(val){ return ostr(val) == '[object Array]'; }
	, isRegExp : function(val){ return ostr(val) == '[object RegExp]'; }
	, isFunction : function(val){ return tstr(val) == 'function'; }
	, isBoolean : function(val){ return tstr(val) == 'boolean'; }
	, isNumber : function(val){ return tstr(val) == 'number'; }
	, isNull : function(val){ return val === null; }
	, isUndefined : function(val){ return tstr(val) == 'undefined'; }
	, lite : function(val){
		var s = ostr(val);
		if(foo.isUndefined(val)){
			return 'undefined';
		} else if(foo.isNull(val)){
			return 'null';
		} else if(foo.isArray(val)){
			return 'array';
		} else if(foo.isObject(val)){
			return 'object';
		} else if(foo.isRegExp(val)){
			return 'regexp';
		} else if(typeof(val) == 'object') {
			return 'unknown';
		} else {
			return tstr(val);
		}
	}
}



if(foo.isFunction(window.define)){
	window.define(foo);
} else {
	window.jstype = foo;
}

})()