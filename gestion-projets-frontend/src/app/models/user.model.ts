// src/app/user-manager/user.model.ts

export class User {
    email: string; // Email de l'utilisateur
    password: string; // Mot de passe de l'utilisateur
    name: string; // Nom de l'utilisateur
    role: string; // Rôle de l'utilisateur
    username: string; // Nom d'utilisateur (username)
  
    // Constructeur pour initialiser un utilisateur
    constructor(
      email: string = '',
      password: string = '',
      name: string = '',
      role: string = '',
      username: string = ''
    ) {
      this.email = email;
      this.password = password;
      this.name = name;
      this.role = role;
      this.username = username;
    }
  }
  