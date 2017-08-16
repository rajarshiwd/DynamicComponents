
import { Component, ViewChild, ComponentFactoryResolver,ComponentFactory, ViewContainerRef, ComponentRef } from '@angular/core';
import{AlertComponent} from './alert.component';
@Component({
  selector: 'app-root',
  template: `
    <template #alertContainer></template>
    <button (click)="createComponent('success')">Create success alert</button>
    <button (click)="createComponent('danger')">Create danger alert</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @ViewChild("alertContainer", { read: ViewContainerRef }) container;
 componentRef: ComponentRef<any>;
 value:number;
 
  constructor(private resolver: ComponentFactoryResolver) {}
  
  createComponent(type) {

    if(type == "success"){
      this.value=3;
    }
    else{
       this.value=9;
    }
    this.container.clear();
    const factory: ComponentFactory<any>= this.resolver.resolveComponentFactory(AlertComponent);

    this.componentRef = this.container.createComponent(factory);
    
    this.componentRef.instance.type = type;
    this.componentRef.instance.value = this.value;

    this.componentRef.instance.output.subscribe(event => console.log(event));

}
}
