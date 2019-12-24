/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  var units = {
    gal: { to: "L", val: 3.78541, initName: "gallons", returnUnit: "liters" },
    L: { to: "gal", val: 1 / 3.78541 },
    lbs: { to: "kg", val: 0.453592 },
    kg: { to: "lbs", val: 1 / 0.453592 },
    mi: { to: "km", val: 1.60934 },
    km: { to: "mi", val: 1 / 1.60934 }
  };
  this.getNum = function(input) {
    var result;
    result = Number(input.trim().substring(0, input.search(/[^1-9\.\/]/)));
    if (result !== result) result = false;
    return result;
  };

  this.getUnit = function(input) {
    var result;
    result = input.trim().substring(input.search(/[^1-9\.\/]/));
    if (!units[result]) result = false;
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;
    result = units[initUnit].to;
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
