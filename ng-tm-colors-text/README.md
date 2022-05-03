# Description

It's a package for [`Angular`](https://angular.io/) application, in Typescript.
If you want the package in javascript, you can use [`tm-colors-text`](https://www.npmjs.com/package/@icenore/tm-colors-text).

This package return an array with each char of a text with style to be used in ngFor.

# Installation

```bash
$ npm install --save @icenore/ng-tm-colors-text
```

# Usage

## Import
```ts
import { TmColorsText } from '@icenore/ng-tm-colors-text';
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
