export interface Persona {
    nombre: string;
    edad: number;
    sexo: string;
    documento: any;
}

export const camposPersona: any[] = [
    { parametro: 'nombre', titulo: 'Nombre', mostrar: true },
    { parametro: 'edad', titulo: 'Edad', mostrar: true },
    { parametro: 'sexo', titulo: 'Sexo', mostrar: true },
    { parametro: 'documento', titulo: 'Documento', mostrar: true }
];