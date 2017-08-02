import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: 
  `<navbar></navbar><br>
  <searchbar></searchbar><br>
  <router-outlet>
  </router-outlet>
  <myfooter></myfooter>`,

})
export class AppComponent  {  }
