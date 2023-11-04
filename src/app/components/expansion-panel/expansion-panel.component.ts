import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {
  @Input() titulo: string;
  @Output() togglePanelEvent: EventEmitter<any> = new EventEmitter<any>();
  isExpanded: boolean = false;

  togglePanel() {
    this.isExpanded = !this.isExpanded;
  }
}
