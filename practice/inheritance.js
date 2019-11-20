class Charmander {
  constructor (props) {
    this.height = props.height;
    this.weight = props.weight;
  }
  getType() {
   this.type = 'Fire';
   return this.type;
  }
  getSpecie(specie) {
    this.specie = 'Lizard Pocemon';
    return this.specie;
  }
  getHeight() {
    return this.height;
  }
  canWalk() {
    return true;
  }
  canFly() {
    return false;
  }
} 

class Charmeleon extends Charmander {
  constructor(props) {
    super(props);
  }
  getSpecie(specie) {
    this.specie = 'Flame Pocemon';
    return this.specie;
  }
}

class Charizard extends Charmeleon {
  constructor(props) {
    super(props);
  }
  canFly() {
    return true;
  }
}

let embury = new Charmander({height:1, weight:15});
console.log(embury);
let mercury = new Charmeleon({height:2, weight:45});
console.log(mercury);
let morderbrand = new Charizard({height:10, weight:200});
console.log(morderbrand);

console.log(embury.getType());
console.log(embury.getType() === mercury.getType());
console.log(mercury.getType() === morderbrand.getType());

console.log(embury.getSpecie());
console.log(mercury.getSpecie());
console.log(morderbrand.getSpecie() === mercury.getSpecie());

console.log(embury.getHeight());
console.log(morderbrand.canWalk());

console.log(embury.canFly()); 
console.log(embury.canFly() === mercury.canFly());
console.log(morderbrand.canFly());