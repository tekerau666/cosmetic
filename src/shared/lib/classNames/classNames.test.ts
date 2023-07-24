import {classNames} from "./classNames";

describe('classNames', function () {
    test('with only first param', function () {
        expect(classNames('someClass')).toBe('someClass');
    })
    test('with additional class', function () {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
    })
    test('with mods', function () {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames('someClass',
            {hovered: true, scrollable: true},
            ['class1', 'class2']
        )).toBe(expected);
    })
    test('with mods false', function () {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass',
            {hovered: true, scrollable: false},
            ['class1', 'class2']
        )).toBe(expected);
    })
    test('with mods undefined', function () {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames('someClass',
            {hovered: true, scrollable: undefined},
            ['class1', 'class2']
        )).toBe(expected);
    })
});