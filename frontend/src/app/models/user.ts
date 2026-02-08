export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: any; // (Opcional) Por si acaso uses dirección luego
    phone?: string; // (Opcional)
    website?: string; // (Opcional)
    
    // --- AGREGA ESTO ---
    company?: {
        name: string;
        catchPhrase?: string;
        bs?: string;
    };
    // -------------------
}
