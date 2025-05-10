// src/app/models/tache.model.ts
export interface Tache {
  id?: number; // Rendre l'ID optionnel lors de la création
  description: string;
  etat: string;
  priorite: string;
  deadline: string; // format ISO (yyyy-mm-dd)
  projetId: number;
  responsableId: number;
}
