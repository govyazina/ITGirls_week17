const date = require('./task3');

test('test date', () => {expect(date(new Date(new Date - 1))).toBe('прямо сейчас')});