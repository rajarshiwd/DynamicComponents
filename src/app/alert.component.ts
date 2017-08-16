import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'alert-root',
  template: `
  
  <h1 >Alert {{type}}</h1>
  <p>{{value}}Level</p>
  
  `,
 
})
export class AlertComponent {
  @Input() type:any;
  @Input()value:number;
  @Output() output = new EventEmitter();
}
