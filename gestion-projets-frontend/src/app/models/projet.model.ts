export interface Projet {
  id?: number;
  nom: string;
  dateDebut: string; // ou LocalDate si vous utilisez une lib de conversion
  dateFin: string;
  budget: number;
  statut: string;
  taches?: Tache[];
  ressources?: Ressource[];
}

export interface Tache {
  id?: number;
  description: string;
  // autres propriétés...
}

export interface Ressource {
  id?: number;
  nom: string;
  // autres propriétés...
}