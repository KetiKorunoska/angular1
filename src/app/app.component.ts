import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CompComponent} from 
import { DRIVERS } from '../dd-data';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'aplikacija';
  PB  = DRIVERS[0];
  JM = DRIVERS[1];
  MM = DRIVERS[2];
 vozaci=DRIVERS;
  onAppView(){
    console.log("Kliknav");
  }
}
