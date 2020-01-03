(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    var myparent = {
        MyParent: class {
            constructor() {
            }
        }
    };
    var myparent_1 = myparent.MyParent;

    {
        module.exports.default = class MyClass extends myparent_1 {
            constructor() {
                super();
            }
        };
    }

})));
