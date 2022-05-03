import { TmColorsText } from '../index';

test('TmColorsText', () => {
    expect(TmColorsText('$oa', 12)).toEqual([{
        char: 'a',
        style: 'color: #FFF; font-size: 12px; font-weight: bold; text-shadow: none;',
        index: 2,
    }]);

    expect(TmColorsText('$Oa', 12)).toEqual([{
        char: 'a',
        style: 'color: #FFF; font-size: 12px; font-weight: bold; text-shadow: none;',
        index: 2,
    }]);

    expect(TmColorsText('$0FFa', 12)).toEqual([{
        char: 'a',
        style: 'color: #0FF; font-size: 12px; font-weight: normal; text-shadow: none;',
        index: 4,
    }]);

    expect(TmColorsText('$O$FF0I', 12)).toEqual([{
        char: 'I',
        style: 'color: #FF0; font-size: 12px; font-weight: bold; text-shadow: none;',
        index: 6,
    }]);
});
