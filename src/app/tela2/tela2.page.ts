import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tela2',
  templateUrl: './tela2.page.html',
  styleUrls: ['./tela2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Tela2Page {
  r: number = 0;
  g: number = 0;
  b: number = 0;
  corBotao: string = '#3880ff';
  corFundo: string = '#ffffff';

  mudarCorBotao() {
    this.corBotao = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  mudarCorFundo() {
    this.corFundo = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}