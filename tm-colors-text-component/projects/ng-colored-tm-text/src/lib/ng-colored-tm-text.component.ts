import { Component, Input, OnInit } from '@angular/core';
import { TmColorsText } from '@icenore/ng-tm-colors-text';

@Component({
  selector: 'lib-ng-colored-tm-text',
  template: `
  <div class="formatted-text">
    <div *ngFor="let i of returnArrayOfInt(countDifferentsCharsInText(text))" class="letter">
        <span [style]="getStyleIndex(text, i)">{{ getCharIndex(text, i) }}</span>
    </div>
  </div>
  `,
  styles: [`
  .formatted-text {
      color: #fff;
      font-size: 1.2rem;
      display: flex;

      .letter {
          display: flex;
      }
  }`]
})
export class NgColoredTmTextComponent implements OnInit {
  @Input() text: string | undefined;

  @Input() fontSize: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public countDifferentsCharsInText(text: string | undefined) {
    return TmColorsText(text!, this.fontSize || 18).length || 0;
  }

  public returnArrayOfInt(number: number) {
    return Array.from(Array(number).keys());
  }

  public getStyleIndex(text: string | undefined, index: number): string {
    return TmColorsText(text!, this.fontSize || 18)[index].style || "";
  }

  public getCharIndex(text: string | undefined, index: number): string {
    return TmColorsText(text!, this.fontSize || 18)[index].char || "";
  }
}
