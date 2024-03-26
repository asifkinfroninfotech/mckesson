import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menu1', url: '/folder/Menu1', icon: 'mail' },
    { title: 'Menu2', url: '/folder/Menu2', icon: 'paper-plane' },
    { title: 'Menu3', url: '/folder/Menu3', icon: 'heart' }
    
  ];
  
  constructor() {}
}
