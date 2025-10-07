import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss']
})
export class ErrorPage {
  constructor(private router: Router) {}

  volver() {
    this.router.navigateByUrl('/'); // redirige al home
  }
}
