var rand = require('u-rand');

if(global.Symbol) module.exports = function(){ return Symbol(); };
else module.exports = function(){ return rand.unique(); };

module.exports.define = function(obj,su,value){
  Object.defineProperty(obj,su,{
    value: value,
    writable: true,
    configurable: true
  });
};

