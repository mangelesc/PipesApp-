import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'angela';
  public nameUpper: string = 'ANGELA';
  public fullName: string = 'AnGEla CoRDOba';

  public currentDate: Date = new Date();


}
