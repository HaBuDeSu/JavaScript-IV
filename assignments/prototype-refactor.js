/*

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// function GameObject(data) {
//   this.createdAt = data.createdAt,
//   this.name = data.name,
//   this.dimensions = data.dimensions
// }
//
// GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game.`;
// };

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

// function CharacterStats (stats) {
//   GameObject.call(this, stats);
//   this.healthPoints = stats.healthPoints
// }
//
// CharacterStats.prototype = Object.create(GameObject.prototype);
//
// CharacterStats.prototype.takeDamage = function () {
//   return `${this.name} took damage.`
// };

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

// function Humanoid (attributes) {
//   CharacterStats.call(this, attributes);
//   this.team = attributes.team,
//   this.weapons = attributes.weapons,
//   this.language = attributes.language
// }
//
// Humanoid.prototype = Object.create(CharacterStats.prototype);
//
// Humanoid.prototype.greet = function () {
//   return `${this.name} offers a greeting in ${this.language}.`
// };

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

  // const mage = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 1,
  //     height: 1,
  //   },
  //   healthPoints: 5,
  //   name: 'Bruce',
  //   team: 'Mage Guild',
  //   weapons: [
  //     'Staff of Shamalama',
  //   ],
  //   language: 'Common Tongue',
  // });
  //
  // const swordsman = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 2,
  //     height: 2,
  //   },
  //   healthPoints: 15,
  //   name: 'Sir Mustachio',
  //   team: 'The Round Table',
  //   weapons: [
  //     'Giant Sword',
  //     'Shield',
  //   ],
  //   language: 'Common Tongue',
  // });
  //
  // const archer = new Humanoid({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 1,
  //     width: 2,
  //     height: 4,
  //   },
  //   healthPoints: 10,
  //   name: 'Lilith',
  //   team: 'Forest Kingdom',
  //   weapons: [
  //     'Bow',
  //     'Dagger',
  //   ],
  //   language: 'Elvish',
  // });
  //
  // console.log(mage.createdAt); // Today's date
  // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  // console.log(swordsman.healthPoints); // 15
  // console.log(mage.name); // Bruce
  // console.log(swordsman.team); // The Round Table
  // console.log(mage.weapons); // Staff of Shamalama
  // console.log(archer.language); // Elvish
  // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  // console.log(mage.takeDamage()); // Bruce took damage.
  // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  // Stretch task:
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  // function Hero(stats) {
  //   Humanoid.call(this, stats);
  // }
  //
  // Hero.prototype = Object.create(Humanoid.prototype);
  //
  // Hero.prototype.punch = function (target) {
  //   target.healthPoints = target.healthPoints - 5;
  //   console.log(`${target.name} took 5 damage.`);
  //   if (target.healthPoints <= 0) {
  //     console.log(target.destroy());
  //   }
  // }
  //
  // function Villain(stats) {
  //   Humanoid.call(this, stats);
  // }
  //
  // Villain.prototype = Object.create(Humanoid.prototype);
  //
  // Villain.prototype.kick = function (target) {
  //   target.healthPoints = target.healthPoints - 35;
  //   console.log(`${target.name} took 35 damage.`);
  //   if (target.healthPoints <= 0) {
  //     console.log(target.destroy());
  //   }
  // }
  //
  // const luffy = new Hero ({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 2,
  //     height: 2,
  //   },
  //   healthPoints: 25,
  //   name: 'Luffy',
  //   team: 'The Strawhats',
  //   weapons: [],
  //   language: 'Japanese',
  // })
  // const sanji = new Villain ({
  //   createdAt: new Date(),
  //   dimensions: {
  //     length: 2,
  //     width: 2,
  //     height: 2,
  //   },
  //   healthPoints: 20,
  //   name: 'Sanji',
  //   team: 'The Strawhats',
  //   weapons: [],
  //   language: 'Japanese',
  // })
  //
  // luffy.punch(sanji);
  // sanji.kick(luffy);


// 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

class GameObject {
  constructor (attributes) {
    this.createdAt = attributes.createdAt,
    this.name = attributes.name,
    this.dimensions = attributes.dimensions
  }
  destroy () {
    return `${this.name} was removed from the game.`;
  }
}

class CharacterStats extends GameObject {
  constructor (stats) {
    super(stats);
    this.healthPoints = stats.healthPoints
  }

  takeDamage () {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor (info) {
    super(info);
    this.team = info.team,
    this.weapons = info.weapons,
    this.language = info.language
  }

  greet () {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
