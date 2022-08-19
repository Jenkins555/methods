export class Character {
  constructor(name, type) {
    this.health = 100;
    this.level = 1;
    this.name = name;
    this.type = type;
    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    } else if (typeof this.name !== 'string' || typeof this.type !== 'string') {
      throw new Error('Введите текстовое значение');
    }
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack += (this.attack / (100 * 20));
      this.defence += (this.defence / (100 * 20));
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
