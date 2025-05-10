import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../../../services/projet.service';
import { Projet } from '../../../models/projet.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projet-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.scss']
})
export class ProjetListComponent implements OnInit {

  projets: Projet[] = [];
  projetForm: Projet = { nom: '', dateDebut: '', dateFin: '', budget: 0, statut: '' };
  modeEdition = false;
  projetIdAModifier?: number;

  constructor(private projetService: ProjetService) {}

  ngOnInit(): void {
    this.loadProjets();
  }

  loadProjets(): void {
    this.projetService.getProjets().subscribe({
      next: (data) => this.projets = data,
      error: (err) => console.error('Erreur lors du chargement des projets:', err)
    });
  }

  ajouterProjet(): void {
    this.projetService.creerProjet(this.projetForm).subscribe({
      next: (data) => {
        this.projets.push(data);
        this.resetForm();
      },
      error: (err) => console.error('Erreur lors de la création du projet:', err)
    });
  }

  chargerProjetDansFormulaire(projet: Projet): void {
    this.projetForm = { ...projet };
    this.projetIdAModifier = projet.id;
    this.modeEdition = true;
  }

  modifierProjet(): void {
    if (!this.projetIdAModifier) return;

    this.projetService.updateProjet(this.projetIdAModifier, this.projetForm).subscribe({
      next: () => {
        this.loadProjets();
        this.resetForm();
      },
      error: (err) => console.error('Erreur lors de la modification du projet:', err)
    });
  }

  supprimerProjet(id: number | undefined): void {
    if (id === undefined) return;

    this.projetService.deleteProjet(id).subscribe({
      next: () => this.loadProjets(),
      error: (err) => console.error('Erreur lors de la suppression du projet:', err)
    });
  }

  annulerModification(): void {
    this.resetForm();
  }

  private resetForm(): void {
    this.projetForm = { nom: '', dateDebut: '', dateFin: '', budget: 0, statut: '' };
    this.modeEdition = false;
    this.projetIdAModifier = undefined;
  }
}
