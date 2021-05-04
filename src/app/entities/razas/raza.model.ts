export enum RAZATYPE {
    ALIANZA,
    HORDA
}

export class Raza {
    id: number;
    nombre: string;
    descripcion: string;
    urlImagen: string;
    razaAlianza: boolean;

    constructor(id: number, nombre: string, descripcion: string, urlImagen: string, razaAlianza: boolean) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
        this.razaAlianza = razaAlianza;
    }

}