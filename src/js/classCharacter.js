export default class Character {
  constructor(charName, charType) {
    this.health = 100;
    this.level = 1;
    this.name = charName;
    this.type = charType;
    this.attack = this.initAtrAttack(this.type);
    this.defence = this.initAtrDeffense(this.type);
  }

  initAtrAttack(el) {
    switch (el) {
      case 'Bowman':
        this.attack = 25;
        break;
      case 'Swordsman':
        this.attack = 40;
        break;
      case 'Magician':
        this.attack = 10;
        break;
      case 'Undead':
        this.attack = 25;
        break;
      case 'Zombie':
        this.attack = 40;
        break;
      case 'Daemon':
        this.attack = 10;
        break;
      default:
    }
    return this.attack;
  }

  initAtrDeffense(el) {
    switch (el) {
      case 'Bowman':
        this.defence = 25;
        break;
      case 'Swordsman':
        this.defence = 10;
        break;
      case 'Magician':
        this.defence = 40;
        break;
      case 'Undead':
        this.defence = 25;
        break;
      case 'Zombie':
        this.defence = 10;
        break;
      case 'Daemon':
        this.defence = 40;
        break;
      default:
    }
    return this.defence;
  }

  get init() {
    return this.charInit();
  }

  charInit() {
    if (this.value.length < 2 || this.value.length > 10) {
      throw new Error('Имя должно содержать не менее 2 и не более 10 символов');
    } else if (this.value !== '' || this.type !== '') {
      throw new Error('Введите текстовое значение');
    }
  }
}
