/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  var units = {
    gal: {
      returnUnit: "L",
      ratio: 3.78541,
      spellOutInitUnit: "gallons"
    },
    L: {
      returnUnit: "gal",
      ratio: 1 / 3.78541,
      spellOutInitUnit: "liters"
    },
    lbs: {
      returnUnit: "kg",
      ratio: 0.453592,
      spellOutInitUnit: "pounds"
    },
    kg: {
      returnUnit: "lbs",
      ratio: 1 / 0.453592,
      spellOutInitUnit: "kilograms"
    },
    mi: {
      returnUnit: "km",
      ratio: 1.60934,
      spellOutInitUnit: "miles"
    },
    km: {
      returnUnit: "mi",
      ratio: 1 / 1.60934,
      spellOutInitUnit: "kilameters"
    }
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
    result = units[initUnit].returnUnit;
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    result = units[unit].spellOutInitUnit;
    return result;
  };

  this.convert = function(initNum, initUnit) {
    /*const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;*/
    var result;
    result = ;
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;

    return result;
  };
}

module.exports = ConvertHandler;
