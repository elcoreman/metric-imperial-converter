function ConvertHandler() {
  var units = {
    gal: {
      returnUnit: "l",
      ratio: 3.78541,
      spellOutInitUnit: "gallons"
    },
    l: {
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
    result = input.trim().match(/^[0-9\.\/]+/)[0];
    result = result.split("/");
    result = result[0] / (result[1] || 1);
    result = Number(result);
    if (result !== result) result = false;
    return result;
  };

  this.getUnit = function(input) {
    var result;
    result = input
      .trim()
      .substring(input.search(/[^1-9\.\/]/))
      .toLowerCase();
    if (!units[result]) result = false;
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    var result;
    result = units[initUnit] ? units[initUnit].returnUnit : false;
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    result = units[unit] ? units[unit].spellOutInitUnit : false;
    return result;
  };

  this.convert = function(initNum, initUnit) {
    if (initNum === false || initUnit === false) return false;
    var result;
    result = (initNum * units[initUnit].ratio).toFixed(5);
    return result;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    if (
      initNum === false ||
      initUnit === false ||
      returnNum === false ||
      returnUnit === false
    )
      return false;
    var result;
    result = `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
}

module.exports = ConvertHandler;
