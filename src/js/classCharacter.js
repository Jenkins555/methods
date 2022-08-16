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

  levelUp(health) {
   if (health !== 0 ) {
     this.level++ ;
    this.attack =this.attack + (this.attack/100 * 20);
    this.defence =this.defence + (this.defence/100 * 20);
    this.health = 100;
   } else {
    throw new Error('Нельзя повысить левел умершего');
   }
  }

  damage(points) {
    if (health >= 0) {
    this.health -= points * (1 - defence / 100);
    }
  }
}
