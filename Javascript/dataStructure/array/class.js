

// class in javascript
// declare class with captial letter.
// call class, it first call the constructor method (and declare any attribute if thier)
// add method in that.
// extends a class with 'extends' keyword to use the methods and attributes declared inside parent class.
//
//

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm  a ${type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }

  play() {
    console.log(`Weeeeee I am a ${type}`)
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Black Magic');
