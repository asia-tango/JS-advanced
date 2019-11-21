class Fighter {
  constructor(attributes) {
    this.name = attributes.name;
    this.attack = attributes.attack;
    this.hitpoints = attributes.hitpoints;
    this.totalHitpoints = attributes.hitpoints;
    this.currentHitpoints = attributes.hitpoints;
  }
  getHitpoints() {
    while (this.hitpoints >= 0){
      return this.hitpoints;
    }
    if (this.hitpoints <= 0) {
      return 0;
    }
  }
  setHitpoints(hitpoints) {
    if (this.hitpoints > this.totalHitpoints) {
      this.currentHitpoints = this.totalHitpoints;
    } else {
      this.hitpoints = hitpoints;
    }
  }
  getTotalHitpoints() {
    return this.totalHitpoints;
  }
  setTotalHitpoints(totalHitpoints) {
    this.totalHitpoints = totalHitpoints;
  }
  getAttack() {
    return this.damage;
  }
  setAttack(damage) {
    this.damage = damage;
  }
  fight(enemy) {
    if (enemy.isAlive()) {
      return enemy.hitpoints - this.attack;
    } else {
      return this.gameWon();
    }
  }
  isAlive() {
    return this.hitpoints > 0;
  }
  gameWon(enemy) {
    return enemy.isAlive();
  }
}



class Champion extends Fighter {
  constructor(attributes) {
    super(attributes);
  }
  getHitpoints(enemy) {
    return enemy.hitpoints -= this.attack;
  }
  setHitpoints(enemy) {
    enemy.getHitpoints;
  }
  fight(enemy) {
    if (enemy.isAlive()) {
      enemy.hitpoints -= this.attack;
    } else {
      this.gameWon();
    }
  }
  rest() {
    while (this.hitpoints <= this.totalHitpoints) {
      return this.hitpoints + 5;
    } 
  }
  defence(enemy) {
    return this.hitpoints += enemy.attack;
  }
  gameWon(enemy) {
    if (!enemy.isAlive()) {
      this.attack += 1;
    }
  }
}



class Monster extends Fighter {
  constructor(attributes) {
    super(attributes);
  }
  getHitpoints(enemy) {
    return enemy.hitpoints -= this.attack;
  }

  setHitpoints(enemy) {
    enemy.getHitpoints;
  }
  fight(enemy) {
    if (enemy.isAlive()) {
      enemy.hitpoints -= this.attack;
    } else {
      this.gameWon();
    }
  }
  enrage(enemy) {
    return enemy.hitpoints -= this.attack*2;
  }
  gameWon(enemy) {
    if (!enemy.isAlive()) {
      Math.floor(this.hitpoints *= 0.25);
      Math.floor(this.totalHitpoints *= 0.1);
    }
  }
}

var heracles = new Champion({ name: "Heracles", attack: 10, hitpoints: 50 });
var boar = new Monster({ name: "Erymanthian Boar", attack: 5, hitpoints: 20 });

console.log(boar.name, boar.hitpoints);
console.log(heracles.name, heracles.hitpoints);

heracles.fight(boar);
console.log(boar.hitpoints);
  
boar.fight(heracles);
console.log(heracles.hitpoints);

heracles.defence(boar);
boar.fight(heracles);
console.log(heracles.hitpoints);

boar.fight(heracles);
console.log(heracles.hitpoints);

boar.enrage(heracles);
console.log(heracles.hitpoints);

heracles.fight(boar);
console.log(boar.hitpoints);
console.log(heracles.attack);








