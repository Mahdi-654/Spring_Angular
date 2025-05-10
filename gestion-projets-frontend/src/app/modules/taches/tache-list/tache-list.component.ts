import { Component, OnInit } from '@angular/core';
import { TacheService } from '../../../services/tache.service';
import { Tache } from '../../../models/tache.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tache-list',
  templateUrl: './tache-list.component.html',
  styleUrls: ['./tache-list.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TacheListComponent implements OnInit {
  taches: Tache[] = [];
  nouvelleTache: Partial<Tache> = {
    description: '',
    etat: 'A_FAIRE',
    priorite: 'MOYENNE',
    deadline: new Date().toISOString().split('T')[0], // format yyyy-MM-dd
    projetId: 0,
    responsableId: 0
  };

  // L'ID de l'employé (vous pouvez le récupérer dynamiquement si nécessaire)
  employeId: number = 2;

  constructor(private tacheService: TacheService) {}

  ngOnInit(): void {
    this.loadTaches();
  }

  loadTaches(): void {
    // Appel pour récupérer les tâches d'un employé spécifique
    this.tacheService.getTachesByEmploye(this.employeId).subscribe({
      next: (data) => {
        this.taches = data;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des tâches:', err);
      }
    });
  }

  ajouterTache(): void {
    // Vérification plus complète des champs obligatoires
    if (
      !this.nouvelleTache.description ||
      !this.nouvelleTache.deadline ||
      this.nouvelleTache.projetId === undefined || 
      this.nouvelleTache.projetId <= 0 ||
      this.nouvelleTache.responsableId === undefined ||
      this.nouvelleTache.responsableId <= 0
    ) {
      console.warn('Veuillez remplir tous les champs obligatoires.');
      return;
    }
  
    // Création de l'objet tâche avec conversion des types si nécessaire
    const tacheAEnvoyer: any = {
      description: this.nouvelleTache.description.trim(),
      etat: this.nouvelleTache.etat || 'A_FAIRE',
      priorite: this.nouvelleTache.priorite || 'MOYENNE',
      deadline: this.nouvelleTache.deadline,
      projetId: Number(this.nouvelleTache.projetId),
      responsableId: Number(this.nouvelleTache.responsableId)
    };
  
    // Ajout de logging pour le débogage
    console.log('Envoi de la tâche au backend:', tacheAEnvoyer);
  
    this.tacheService.createTache(tacheAEnvoyer).subscribe({
      next: (data) => {
        console.log('Réponse du backend:', data);
        this.taches.push(data);
        this.resetForm();
        // Recharger la liste pour être sûr
        this.loadTaches();
      },
      error: (err) => {
        console.error('Erreur complète:', err);
        if (err.error) {
          console.error('Détails de l\'erreur:', err.error);
        }
      }
    });
  }
  
  supprimerTache(id?: number): void {
    if (id) {
      this.tacheService.deleteTache(id).subscribe({
        next: () => this.loadTaches(),
        error: (err) => {
          console.error('Erreur lors de la suppression de la tâche:', err);
        }
      });
    } else {
      console.error('Impossible de supprimer la tâche: ID manquant');
    }
  }

  private resetForm(): void {
    this.nouvelleTache = {
      description: '',
      etat: 'A_FAIRE',
      priorite: 'MOYENNE',
      deadline: new Date().toISOString().split('T')[0],
      projetId: 0,
      responsableId: 0
    };
  }
}
