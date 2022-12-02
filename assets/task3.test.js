const date = require('./task3');


test('test date', () => {expect(date(new Date(new Date - 1))).toBe('прямо сейчас')});
test('test date2', () => {expect(date(new Date(new Date - 30 * 1000))).toBe('30 сек. назад')});
test('test date3', () => {expect(date(new Date(new Date - 5 * 60 * 1000))).toBe('5 мин. назад')});
test('test date4', () => {expect(date(new Date(new Date - 86400* 4 * 1000))).toMatch(/^\d{1,2}\.\d{1,2}\.\d{1,2} \d{1,2}:\d{1,2}$/)})