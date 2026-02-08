export interface Gasto {
    ruc: string;
    valor: number;
    gasto: string; // Antes era 'tipo', ahora es 'gasto'
    fecha?: string; // Agregamos fecha (opcional por si acaso)
}