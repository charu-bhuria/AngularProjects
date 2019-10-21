import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: '<h1>HELLO</h1>',
  
})
export class ExampleComponent {
  title = 'this is test';


constructor(){
  console.log('1212constuctor12211221........')
}
}