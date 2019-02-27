export class Item {
  constructor(name, price) {
    this.name = name;
    const convert = parseFloat(price);
    this.price = isNaN(convert) ? 0.0 : convert;// Default to 0.0
  }

  equals(other) {
    if(typeof other != typeof this) {
      return false;
    }

    for(var property in this) {
      if(typeof other[property] == 'undefined') {
        return false;
      }
      if(other[property] != this[property]) {
        return false;
      }

      return true;
    }
  }

  toString() {
    return this.name + ': $' + this.price;
  }
}
