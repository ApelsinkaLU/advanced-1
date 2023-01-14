import sortingByProps from '../orderByProps';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('testing standart work function orderByProps', () => {
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(result).toEqual(sortingByProps(obj, ['name', 'level']));
});

test('testing work function orderByProps with emty array', () => {
  const result = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(result).toEqual(sortingByProps(obj, []));
});

test('testing standart work function orderByProps', () => {
  const object = {
    health: 10,
    defence: 40,
    name: 'мечник',
    attack: 80,
    level: 2,
  };
  const result = [
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
  ];
  expect(result).toEqual(sortingByProps(object, ['name', 'health']));
});
