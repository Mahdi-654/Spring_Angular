import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tache } from '../../app/models/tache.model'; // Vous devez définir ce modèle Tache.

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private apiUrl = 'http://localhost:8080/api/taches'; // L'URL de votre API backend.

  constructor(private http: HttpClient) { }

  // Créer une tâche
  createTache(tache: Tache): Observable<Tache> {
    return this.http.post<Tache>(`${this.apiUrl}`, tache);
  }

  // Obtenir toutes les tâches
  getAllTaches(): Observable<Tache[]> {
    return this.http.get<Tache[]>(this.apiUrl);
  }

  // Obtenir une tâche par ID
  getTacheById(id: number): Observable<Tache> {
    return this.http.get<Tache>(`${this.apiUrl}/${id}`);
  }

  // Mettre à jour une tâche
  updateTache(id: number, tache: Tache): Observable<Tache> {
    return this.http.put<Tache>(`${this.apiUrl}/${id}`, tache);
  }

  // Supprimer une tâche
  deleteTache(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Obtenir les tâches par projet
  getTachesByProjet(projetId: number): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${this.apiUrl}/projet/${projetId}`);
  }

  // Obtenir les tâches par employé (ancien responsable)
  getTachesByEmploye(employeId: number): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${this.apiUrl}/employe/${employeId}`);
  }

  // Obtenir les tâches par état
  getTachesByEtat(etat: string): Observable<Tache[]> {
    return this.http.get<Tache[]>(`${this.apiUrl}/etat/${etat}`);
  }
}
