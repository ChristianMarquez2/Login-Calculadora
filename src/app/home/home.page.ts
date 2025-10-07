import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage {
  usuario: string = '';
  clave: string = ''; // minúscula

  constructor(private router: Router) {}

  iniciarSesion() {
    const usuarioCorrecto = 'admin';
    const contraseñaCorrecta = '1234';

    if (this.usuario === usuarioCorrecto && this.clave === contraseñaCorrecta) {
      this.router.navigateByUrl('/calculadora');
    } else {
      this.router.navigateByUrl('/error');
    }
  }
}
