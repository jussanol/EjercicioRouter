export enum RAZATYPE {
    ALIANZA,
    HORDA
}

export class Raza {
    id: number;
    nombre: string;
    description: string;
    urlImage: string;
    tipo: RAZATYPE;

    constructor(id: number, nombre: string, description: string, urlImage: string, tipo: RAZATYPE) {
        this.id = id;
        this.nombre = nombre;
        this.description = description;
        this.urlImage = urlImage;
        this.tipo = tipo;
    }

}