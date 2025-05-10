// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importations uniquement pour les composants de liste
import { EmployeListComponent } from './modules/employes/employe-list/employe-list.component';
import { ProjetListComponent } from './modules/projets/projet-list/projet-list.component';
import { TacheListComponent } from './modules/taches/tache-list/tache-list.component';
import { RessourceListComponent } from './modules/ressources/ressource-list/ressource-list.component';
import { ProduitListComponent } from './modules/produits/produit-list/produit-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



export const routes: Routes = [
  { path: '', redirectTo: '/user-manager', pathMatch: 'full' }, // Keep only one root redirect
  { path: 'employes', component: EmployeListComponent },
  { path: 'projets', component: ProjetListComponent },
  { path: 'taches', component: TacheListComponent },
  { path: 'ressources', component: RessourceListComponent },
  { path: 'produits', component: ProduitListComponent },
  { path: '**', redirectTo: '/user-manager' } // Move wildcard to the end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,CommonModule,FormsModule]
})
export class AppRoutingModule {}