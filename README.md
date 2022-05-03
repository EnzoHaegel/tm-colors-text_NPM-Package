# Installation
    
```bash
$ npm install --save-dev @icenore/tm-colors-text
```

# Usage

## Import
```js
const tmColorsText = require('@icenore/tm-colors-text')
const style = tmColorsText.getStyleForNChar('$o$FF0Hello $0FFWorld', 18)
```
## Return

This return an array of Object like this:
```json
[{
    "char": "a",
    "style": "color: " + color + "; font-size: " + fontSize + "; font-weight: " + fontWeight + "; text-shadow: " + shadow + ";",
    "index": i
}]
    ```
