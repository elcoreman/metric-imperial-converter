/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  var units = ["gal", "L", "lbs", "kg", "mi", "km"];
  var u = {
    gal: {to: "L",
         val: }
  }
  this.getNum = function(input) {
    var result;
    result = Number(input.trim().substring(0, input.search(/[^1-9\.\/]/)));
    if (result !== result) result = false;
    return result;
  };

  this.getUnit = function(input) {
    var result;
    result = input.trim().substring(input.search(/[^1-9\.\/]/));
    
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;

    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };
}

module.exports = ConvertHandler;
