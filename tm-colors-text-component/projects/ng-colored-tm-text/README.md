# Description

It's a package for [`Angular`](https://angular.io/) application, a component in Typescript.
If you want the package in javascript, you can use [`tm-colors-text`](https://www.npmjs.com/package/@icenore/tm-colors-text).

This package print a text with good colors, police and shadow with a trackmania given text.

# Installation

```bash
$ npm i --save ng-colored-tm-text
```

# Usage

## Import

in app.module.ts
```ts
import { NgColoredTmTextModule } from 'ng-colored-tm-text';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgColoredTmTextModule
  ]
```

## Implementation

in your html of any component
```html
<lib-ng-colored-tm-text text="string" fontSize="number"></lib-ng-colored-tm-text>
```
You can't use it without text attribute.
Default fontSize is 18px, put any number but it will be converted to px.

