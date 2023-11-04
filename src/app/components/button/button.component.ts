import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Output() buttonClick: EventEmitter<any> = new EventEmitter();
  @Input()  isDisabled: boolean

  emitClickEvent(): void {
    this.buttonClick.emit();
  }

}
