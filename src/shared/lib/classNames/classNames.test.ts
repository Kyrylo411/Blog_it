import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('testClass')).toBe('testClass');
    });

    test('with additional class', () => {
        const expected = 'testClass class1 class2';
        expect(classNames('testClass', {}, ['class1', 'class2'])).toBe(expected);
    });

    test('with mods', () => {
        const expected = 'testClass class1 class2 hovered visible';
        expect(classNames('testClass', { hovered: true, visible: true }, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with false mods', () => {
        const expected = 'testClass class1 class2 hovered';
        expect(classNames('testClass', { hovered: true, hidden: false }, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with undefined mods', () => {
        const expected = 'testClass class1 class2 hovered';
        expect(classNames('testClass', { hovered: true, hidden: undefined }, ['class1', 'class2']))
            .toBe(expected);
    });
});
