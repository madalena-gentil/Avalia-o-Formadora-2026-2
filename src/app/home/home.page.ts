import { Component, NgZone } from '@angular/core'; 
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule, 
    RouterModule 
  ],
})
export class HomePage {
  
  constructor() {}

 irParaTela2() {
    console.log("Forçando navegação...");
    window.location.href = '/tela2';
  }
}