(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = global || self, global.foo = factory());
}(this, (function () { 'use strict';

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _class = createCommonjsModule(function (module) {
	{
	    module.exports.default = class MyClass extends MyParent {
	        constructor() {
	            super();
	        }
	    };
	}
	});

	return _class;

})));
