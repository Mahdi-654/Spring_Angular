import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projet } from '../models/projet.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private apiUrl = 'http://localhost:8080/api/projets'; // URL du backend

  constructor(private http: HttpClient) {}

  // 🔄 Récupérer tous les projets
  getProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.apiUrl);
  }

  // ➕ Créer un projet
  creerProjet(projet: Projet): Observable<Projet> {
    return this.http.post<Projet>(this.apiUrl, projet);
  }

  // 🔁 Mettre à jour un projet
  updateProjet(id: number, projet: Projet): Observable<Projet> {
    return this.http.put<Projet>(`${this.apiUrl}/${id}`, projet);
  }

  // ❌ Supprimer un projet
  deleteProjet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // 🔍 Rechercher par statut
  rechercherParStatut(statut: string): Observable<Projet[]> {
    return this.http.get<Projet[]>(`${this.apiUrl}/statut/${statut}`);
  }

  // 📊 Calculer le budget d’un projet
  calculerBudget(id: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/${id}/budget`);
  }

  // 👥 Assigner une ressource à un projet
  assignerRessource(projetId: number, ressourceId: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/${projetId}/ressources/${ressourceId}`, {});
  }
}
