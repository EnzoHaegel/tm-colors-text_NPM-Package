module.export = function TmColorsText(text, __fontSize__) {
    var color = '#FFF';
    var fontWeight = 'normal';
    var shadow = 'none';
    var fontSize = __fontSize__ + 'px';
    var res = [];
    var possibleHexChars = '0123456789ABCDEF';
    // for char in text
    for (var i = 0; i < text.length; i++) {
        if (text[i] === '$') {
            // check if text[i] is in possibleHexChars
            if (possibleHexChars.indexOf(text[i + 1]) !== -1 && possibleHexChars.indexOf(text[i + 2]) !== -1 && possibleHexChars.indexOf(text[i + 3]) !== -1) {
                color = '#' + text[i + 1] + text[i + 2] + text[i + 3];
                i += 3;
            }
            else if (text[i + 1].toLowerCase() === 'i') {
                fontWeight = 'italic';
                i++;
            }
            else if (text[i + 1].toLowerCase() === 'o') {
                fontWeight = 'bold';
                i++;
            }
            else if (text[i + 1].toLowerCase() === 's') {
                shadow = '2px 2px 2px #000';
                i++;
            }
            else if (text[i + 1].toLowerCase() === 'w') {
                fontSize = __fontSize__ + 2 + 'px';
                i++;
            }
            else if (text[i + 1].toLowerCase() === 'm') {
                fontSize = __fontSize__ + 'px';
                i++;
            }
            else if (text[i + 1].toLowerCase() === 'n') {
                fontSize = __fontSize__ - 2 + 'px';
                i++;
            }
            else if (text[i + 1].toLowerCase() === 'g') {
                color = '#FFF';
                i++;
            }
            else if (text[i + 1].toLowerCase() === 'z') {
                fontSize = __fontSize__ + 'px';
                color = '#FFF';
                i++;
            }
            else if (text[i + 1].toLowerCase() === 'l') {
                i++;
            }
        }
        else {
            res.push({
                char: text[i],
                style: 'color: ' +
                    color +
                    '; font-size: ' +
                    fontSize +
                    '; font-weight: ' +
                    fontWeight +
                    '; text-shadow: ' +
                    shadow +
                    ';',
                index: i,
            });
        }
    }
    return res;
}
