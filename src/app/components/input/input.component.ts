import { Component,  Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() value: string = '';

  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange(event: any) {
    this.value = event.target.value.toUpperCase();
    this.valueChange.emit(this.value);
  }
}
