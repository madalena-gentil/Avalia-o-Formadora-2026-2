import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-tela2',
  templateUrl: './tela2.page.html',
  styleUrls: ['./tela2.page.scss'],
  standalone: true,
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule, 
    RouterLink 
  ]
})
export class Tela2Page implements OnInit {

  r: number = 0;
  g: number = 0;
  b: number = 0;

  readonly AZUL_AVATAR: string = '#3880ff';
  readonly COR_CEREJA: string = '#7b002c';

  corDoBotao1: string = this.AZUL_AVATAR;
  corFundoCard: string = '#1a1a1a'; 

  constructor() {}

  ngOnInit() {

  }

  cliqueBotao1() {
    this.corDoBotao1 = this.COR_CEREJA;
  }

  cliqueBotao2() {
    this.corFundoCard = '#7c6565';
  }
}