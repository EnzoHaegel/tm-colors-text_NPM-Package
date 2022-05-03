module.export = function getStyleForNChar(text, font_size) {
    color = '#FFF';
    fontWeight = 'normal';
    shadow = 'none';
    fontSize = font_size + 'px';
    res = [];
    possibleHexChars = "0123456789ABCDEF";

    // for char in text
    for (var i = 0; i < text.length; i++) {
        if (i === '$') {
            if (i in possibleHexChars) {
                color = '#' + text[i + 1] + text[i + 2] + text[i + 3];
                i += 3;
            } else if (text[i + 1] === 'i') {
                fontWeight = 'italic';
                i++;
            } else if (text[i + 1] === 'o') {
                fontWeight = 'bold';
                i++;
            } else if (text[i + 1] === 's') {
                shadow = '2px 2px 2px #000';
                i++;
            } else if (text[i + 1] === 'w') {
                fontSize = (font_size + 2) + 'px';
                i++;
            } else if (text[i + 1] === 'm') {
                fontSize = font_size + 'px';
                i++;
            } else if (text[i + 1] === 'n') {
                fontSize = (font_size - 2) + 'px';
                i++;
            } else if (text[i + 1] === 'g') {
                color = '#FFF';
                i++;
            } else if (text[i + 1] === 'z') {
                fontSize = font_size + 'px';
                color = '#FFF';
                i++;
            } else if (text[i + 1] === 'l') {
                i++;
            }
        } else {
            res.push({
                "char": text[i],
                "style": "color: " + color + "; font-size: " + fontSize + "; font-weight: " + fontWeight + "; text-shadow: " + shadow + ";",
                "index": i
            });
        }
    }
    return res;
}
