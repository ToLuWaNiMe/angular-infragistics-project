import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid2',
  templateUrl: './grid2.component.html',
  styleUrl: './grid2.component.css'
})
export class Grid2Component implements OnInit {
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
    { ID: 15, Name: 'Alli Khalid', Age: 25 },
    { ID: 16, Name: 'Jane Smith', Age: 30 },
    { ID: 17, Name: 'Darlton Clark', Age: 26 },
    { ID: 18, Name: 'Jane Smith', Age: 30 },
    { ID: 19, Name: 'Jerry Doe', Age: 15 },
    { ID: 20, Name: 'Jane peterson', Age: 30 },
    { ID: 21, Name: 'Johnson tyler', Age: 25 },
    { ID: 22, Name: 'Perry Tyson', Age: 30 },
    { ID: 23, Name: 'Johnson tyler', Age: 25 },
    { ID: 24, Name: 'Perry Tyson', Age: 30 },
    { ID: 25, Name: 'Johnson tyler', Age: 25 },
    { ID: 26, Name: 'Perry Tyson', Age: 30 },
    { ID: 27, Name: 'Johnson tyler', Age: 25 },
    { ID: 28, Name: 'Perry Tyson', Age: 30 },
    // Add more sample data here
  ];

  constructor() { }

  ngOnInit(): void { }
}
