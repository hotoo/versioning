
var Versioning = function(ver){
  this.value = ver;
};
Versioning.prototype.valueOf = function(){
  var c = 0;
  return String(this.value).replace(/\./g, function(){
    return (c++ === 1) ? '' : '.';
  });
};

var Browser = function(ver){
  this.version = new Versioning(ver);
};

var ie = new Browser("6.0.0");

ie.version
