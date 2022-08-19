import { Character } from './classCharacter';

export class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
    this.name = name;
    this.type = type;
    this.attack = 40;
    this.defence = 10;
  }
}
