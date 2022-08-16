import Character from '../classCharacter';

test('clas test', () => {
  expect(() => {
    const magician = new Character('A', 'M');
  }).toThrow('Имя должно содержать не менее 2 и не более 10 символов');
  expect(() => {
    const bowman = new Character(123, 'Magician1');
  }).toThrow('Введите текстовое значение');
});


test('test levelUp', () => {
  const magician = new Character('Иосиф', 'Мagician')
  expect(() => {
    magician.health = 0;
    magician.levelUp;
  }).toThrow('Нельзя повысить левел умершего');
});