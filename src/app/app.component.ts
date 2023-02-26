/*
================================================================
    Title: app.component.ts
    Author: Carl Logan
    Date: 02/24/2023
    Description: Loan App - Capstone Project.
================================================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  // App title
  constructor() {
    this.title = 'Loan App';
  }
}
