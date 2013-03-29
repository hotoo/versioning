/**
 * Version Number
 * @author 闲耘 <hotoo.cn@gmail.com>
 *
 * @usage
 *    var version = new Versioning("1.2.3")
 *    version > 1
 *    version.eq(1)
 */

define(function(require, exports, module){

  // Semantic Versioning Delimiter.
  var delimiter = ".";

  var Version = function(version){
    this._version = String(version);
  };

  Version.compare = function(v1, v2){
    v1 = String(v1);
    v2 = String(v2);
    if(v1 === v2){return true;}
    var v1s = v1.split(delimiter);
    var v2s = v2.split(delimiter);
    var len = Math.min(v1s.length, v2s.length);
    for(var i=0; i<len; i++){
      if(v1s[i] > v2s[i]){return 1;}
      if(v1s[i] < v2s[i]){return -1;}
    }
    return 0;
  };

  /**
   * @param {String} v1.
   * @param {String} v2.
   * @return {Boolean} true if v1 equals v2.
   *
   *    Version.eq("6.1", "6"); // true.
   *    Version.eq("6.1.2", "6.1"); // true.
   */
  Version.eq = function(v1, v2){
    return Version.compare(v1, v2) === 0;
  };

  /**
   * @param {String} v1.
   * @param {String} v2.
   * @return {Boolean} return true
   */
  Version.gt = function(v1, v2){
    return Version.compare(v1, v2) > 0;
  };

  Version.gte = function(v1, v2){
    return Version.compare(v1, v2) >= 0;
  };

  Version.lt = function(v1, v2){
    return Version.compare(v1, v2) < 0;
  };

  Version.lt = function(v1, v2){
    return Version.compare(v1, v2) <= 0;
  };

  Version.prototype = {
    // new Version("6.1").eq(6); // true.
    // new Version("6.1.2").eq("6.1"); // true.
    eq: function(version){
      Version.eq(this._version, version);
    },

    gt: function(version){
      Version.gt(this._version, version);
    },

    gte: function(version){
      Version.gte(this._version, version);
    },

    lt: function(version){
      Version.lt(this._version, version);
    },

    lte: function(version){
      Version.lte(this._version, version);
    },

    valueOf: function(){
      return parseFloat(this._version.split(".").slice(2).join("."), 10);
    }
  };


  module.exports = Version;
});
