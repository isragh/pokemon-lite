class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
  }

  learnAttackSkill(attack) {
    return this.skills.push(attack);
  }

  showStatus() {
    return `${this.name} status health:${this.health} magic:${this.magic}`;
  }

  attack(index, pokemon) {
    if (this.magic < this.skills[index].magic) {
      return `not enough magic, cannot launch attack!`;
    } else if (pokemon.health <= 0) {
      return `${pokemon} is already dead!`;
    } else if (this.health <= 0) {
      return `${this.name} is already dead!`;
    } else if (this.magic >= pokemon.health) {
      pokemon.health = pokemon.health - this.skills[index].damage;
      return `${pokemon.name} is killed!`;
    } else {
      this.magic = this.magic - this.skills[index].magic;
      pokemon.health = pokemon.health - this.skills[index].damage;
      return `${this.name} launched skill "${this.skills[index].attack}" successfully! // ${pokemon.name} got ${this.skills[index].damage} damage`;
    }
  }

  getMagic() {
    this.magic = this.magic + 20;
    return `${this.name} got 20 magic back`;
  }
}

class AttackSkill {
  constructor(attack, damage, magic) {
    this.attack = attack;
    this.damage = damage;
    this.magic = magic;
  }
}

//Each Pokemon should start with a certain amount of health and magic. For example, here Pikachu starts with 120 health and 80 magic
let pikachu = new Pokemon("pikachu", 120, 80);
let bulbasaur = new Pokemon("bulbasaur", 95, 105);

//Each Pokemon should start with a certain amount of health and magic. For example, here Pikachu starts with 120 health and 80 magic
let lightning = new AttackSkill("lightning", 40, 30);
let poisonSeed = new AttackSkill("poison seed", 20, 20);

pikachu.learnAttackSkill(lightning);
bulbasaur.learnAttackSkill(poisonSeed);

console.log(pikachu);
console.log(bulbasaur);
console.log("------------------------------");
console.log("------------------------------");

console.log(pikachu.attack(0, bulbasaur));
console.log("------------------------------");

console.log(bulbasaur.attack(0, pikachu));
console.log("------------------------------");

console.log(pikachu.showStatus());
console.log("------------------------------");

console.log(bulbasaur.showStatus());
console.log("------------------------------");

console.log(pikachu.attack(0, bulbasaur));
console.log("------------------------------");

console.log(pikachu.attack(0, bulbasaur));
console.log("------------------------------");

console.log(pikachu.getMagic());
console.log("------------------------------");

console.log(pikachu.attack(0, bulbasaur));
console.log("------------------------------");

console.log(bulbasaur.attack(0, pikachu));
