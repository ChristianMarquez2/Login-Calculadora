import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.services';

type BinOp = '+' | '-' | '*' | '/';
type UniOp = 'sin' | 'cos' | 'tan';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class CalculatorPage {
  num1: string | number = '';
  num2: string | number = '';
  usarGrados = true;               
  resultado: string | null = null;
  error: string = '';

  constructor(private auth: AuthService) {}

  private toNumber(v: string | number): number {
    if (typeof v === 'number') return v;
    const n = parseFloat((v ?? '').toString().replace(',', '.'));
    return isNaN(n) ? NaN : n;
  }

  private toRadians(x: number): number {
    return this.usarGrados ? (x * Math.PI) / 180 : x;
  }

  limpiar() {
    this.num1 = '';
    this.num2 = '';
    this.resultado = null;
    this.error = '';
  }

 
  operarBin(op: BinOp) {
    this.error = '';
    this.resultado = null;

    const a = this.toNumber(this.num1);
    const b = this.toNumber(this.num2);

    if (isNaN(a) || isNaN(b)) {
      this.error = 'Ingresa números válidos en ambos campos.';
      return;
    }

    let r: number;
    switch (op) {
      case '+': r = a + b; break;
      case '-': r = a - b; break;
      case '*': r = a * b; break;
      case '/':
        if (b === 0) {
          this.error = 'No se puede dividir para 0.';
          return;
        }
        r = a / b;
        break;
    }
    this.resultado = String(r);
  }

  
  operarUni(op: UniOp) {
    this.error = '';
    this.resultado = null;

    const a = this.toNumber(this.num1);
    if (isNaN(a)) {
      this.error = 'Ingresa un número válido en "Primer número".';
      return;
    }

    const x = this.toRadians(a);
    let r: number;

    switch (op) {
      case 'sin': r = Math.sin(x); break;
      case 'cos': r = Math.cos(x); break;
      case 'tan':
       
        if (this.usarGrados) {
          const mod = ((a % 180) + 180) % 180; 
          if (Math.abs(mod - 90) < 1e-10) {
            this.error = 'Tan indefinida para ese ángulo (≈90° + k·180°).';
            return;
          }
        }
        r = Math.tan(x);
        break;
    }
    this.resultado = String(r);
  }

  logout() { this.auth.logout(); }
}