export function User(name) {
  this.name = name;
  this.items = []
}

User.prototype.addItem = (item) => {
  this.items.push(item);
}

User.prototype.editItem = (item, update) => {
  for(var index = 0; index < this.items.length; index++) {
    if (this.items[index].equals(item)) {
      this.items[index].update(update);
      break;
    }
  }
}

User.prototype.removeItem = (item) => {
  for(var index = 0; index < this.items.length; index++) {
    if (this.items[index].equals(item)) {
      this.items.splice(index, 1);
      break;
    }
  }
}

User.prototype.equals = (other) => {
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

User.prototype.toString = () => this.name;
