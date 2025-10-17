import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Report } from './report/report';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Report],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('delivery-note');
  isVisible = false;

  createpdf(){
    this.isVisible = true
    console.log( ' this.isVisible ',this.isVisible )
  }

  exportAsPDF(){}
}
