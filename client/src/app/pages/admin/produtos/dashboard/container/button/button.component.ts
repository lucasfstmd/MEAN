import {Component, Input} from '@angular/core';

@Component({
  selector: 'button-custom',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonTxt: string | undefined;
  @Input() buttonIcon: string | undefined;
}
