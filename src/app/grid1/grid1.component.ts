import { Component , OnInit} from '@angular/core';
import { IgxGridModule } from 'igniteui-angular';

@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  styleUrl: './grid1.component.css'
})
export class Grid1Component implements OnInit {
  public data: Array<{ ID: number, Name: string, Age: number }> = [
    { ID: 1, Name: 'Alli Khalid', Age: 25 },
    { ID: 2, Name: 'Jane Smith', Age: 30 },
    { ID: 3, Name: 'Darlton Clark', Age: 26 },
    { ID: 4, Name: 'Jane Smith', Age: 30 },
    { ID: 5, Name: 'Jerry Doe', Age: 15 },
    { ID: 6, Name: 'Jane peterson', Age: 30 },
    { ID: 7, Name: 'Johnson tyler', Age: 25 },
    { ID: 8, Name: 'Perry Tyson', Age: 30 },
    { ID: 9, Name: 'Johnson tyler', Age: 25 },
    { ID: 10, Name: 'Perry Tyson', Age: 30 },
    { ID: 11, Name: 'Johnson tyler', Age: 25 },
    { ID: 12, Name: 'Perry Tyson', Age: 30 },
    { ID: 13, Name: 'Johnson tyler', Age: 25 },
    { ID: 14, Name: 'Perry Tyson', Age: 30 },
    // Add more sample data here
  ];

  constructor() { }

  ngOnInit(): void { }
}
