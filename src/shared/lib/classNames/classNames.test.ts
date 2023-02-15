import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional classes', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass hovered scrollable';
    expect(classNames(
      'someClass',
      [],
      { hovered: true, scrollable: true },
    )).toBe(expected);
  });

  test('with additional classes and mods', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames(
      'someClass',
      ['class1', 'class2'],
      { hovered: true, scrollable: true },
    )).toBe(expected);
  });

  test('with random mods', () => {
    const expected = 'someClass hovered';
    expect(classNames(
      'someClass',
      [],
      { hovered: true, scrollable: false, focus: undefined },
    )).toBe(expected);
  });
});
