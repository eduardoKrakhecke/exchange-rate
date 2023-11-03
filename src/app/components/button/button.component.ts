import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Output() buttonClick: EventEmitter<any> = new EventEmitter();

  emitClickEvent(): void {
    this.buttonClick.emit();
  }

}
