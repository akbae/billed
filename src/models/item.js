export function Item(name, price) {
  this.name = name;
  this.price = parseFloat(price);
}

Item.prototype.update = (name, price) => {
  this.name = update.name;
  this.price = update.price;
}

Item.prototype.equals = (other) => {
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

Item.prototype.toString = () => this.name + ': $' + this.price;
