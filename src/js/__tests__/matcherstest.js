import { sortCharactersByHealth } from '../matchers.js';

describe('sortCharactersByHealth', () => {
  test('should sort characters by health descending', () => {
    const characters = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sortedCharacters = sortCharactersByHealth(characters);

    const expected = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];

    expect(sortedCharacters).toEqual(expected);
  });
});