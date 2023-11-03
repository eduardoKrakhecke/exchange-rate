import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class ExpansionPanelComponent {
  @Input() titulo: string;
  isExpanded: boolean = false;

  togglePanel() {
    this.isExpanded = !this.isExpanded;
  }
}
