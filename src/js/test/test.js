import { Character } from '../classCharacter';
import { Bowman } from '../classBowman';
import { Daemon } from '../classDaemon';
import { Magician } from '../classMagician';
import { Swordsman } from '../classSwordsman';
import { Unhead } from '../classUndead';
import { Zombie } from '../classZombie';

test('all classes', () => {
  const bowman = new Bowman('test1', 'Bowman1');
  const daemon = new Daemon('test1', 'daemon1');
  const magician = new Magician('test1', 'magician1');
  const swordsman = new Swordsman('test1', 'swordsman1');
  const unhead = new Unhead('test1', 'unhead1');
  const zombie = new Zombie('test1', 'zombie1');
  expect(bowman).toEqual({
    health: 100,
    level: 1,
    name: 'test1',
    type: 'Bowman1',
    attack: 25,
    defence: 25,
  });
  expect(daemon).toEqual({
    health: 100,
    level: 1,
    name: 'test1',
    type: 'daemon1',
    attack: 10,
    defence: 40,
  });
  expect(magician).toEqual({
    health: 100,
    level: 1,
    name: 'test1',
    type: 'magician1',
    attack: 10,
    defence: 40,
  });
  expect(swordsman).toEqual({
    health: 100,
    level: 1,
    name: 'test1',
    type: 'swordsman1',
    attack: 40,
    defence: 10,
  });
  expect(unhead).toEqual({
    health: 100,
    level: 1,
    name: 'test1',
    type: 'unhead1',
    attack: 25,
    defence: 25,
  });
  expect(zombie).toEqual({
    health: 100,
    level: 1,
    name: 'test1',
    type: 'zombie1',
    attack: 40,
    defence: 10,
  });
});

test('clas test', () => {
  expect(() => {
    const swordsman = new Swordsman('A', 'swordsman1');
  }).toThrow('Имя должно содержать от 2 до 10 символов');
  expect(() => {
    const bowman = new Bowman(123, 'Bowman1');
  }).toThrow('Введите текстовое значение');
});

test('test levelUp', () => {
  const magician = new Magician('Иосиф', 'Мagician1');
  expect(() => {
    magician.health = 0;
    magician.levelUp();
  }).toThrow('Нельзя повысить левел умершего');
});

test('damage', () => {
  const bowman = new Bowman('Даниил', 'Bowman1');
  bowman.damage(50);
  expect(bowman).toEqual({
    health: 62.5,
    level: 1,
    name: 'Даниил',
    type: 'Bowman1',
    attack: 25,
    defence: 25,
  });
});
