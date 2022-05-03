# Description

It's a package for Javascript WebSites.
If you want the package for angular in typescript, you can use [`ng-tm-colors-text`](https://www.npmjs.com/package/@icenore/ng-tm-colors-text).

This package return an array with each char of a text with style to be used in ngFor.

# Installation
    
```bash
$ npm install --save @icenore/tm-colors-text
```

# Usage

## Import
```js
const tmColorsText = require('@icenore/tm-colors-text')
const style = tmColorsText.TmColorsText('$o$FF0Hello $0FFWorld', 18)
```
## Return

This return an array of Object like this:
```json
[{
    "char": "a",
    "style": "color: #FFF; font-size: 18px; font-weight: normal; text-shadow: none;",
    "index": "0"
}]
```
