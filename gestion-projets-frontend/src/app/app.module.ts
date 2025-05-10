import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Modules Angular nécessaires
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Composants standalone à importer (pas déclarer)
import { EmployeListComponent } from './modules/employes/employe-list/employe-list.component';
import { ProjetListComponent } from './modules/projets/projet-list/projet-list.component';
import { TacheListComponent } from './modules/taches/tache-list/tache-list.component';
import { RessourceListComponent } from './modules/ressources/ressource-list/ressource-list.component';
import { ProduitListComponent } from './modules/produits/produit-list/produit-list.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    // ✅ Composants standalone à importer
    EmployeListComponent,
    ProjetListComponent,
    TacheListComponent,
    
    RessourceListComponent,
    ProduitListComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
