// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink // Added comma before RouterLink
  ],
  template: `
    <h1>My App</h1>
    <nav>
      
      <a routerLink="/employes">Employés</a> |
      <a routerLink="/projets">Projets</a> |
      <a routerLink="/taches">Tâches</a> |
      <a routerLink="/ressources">Ressources</a> |
      <a routerLink="/produits">Produits</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {}