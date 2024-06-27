import { NegocioErro } from "../error/NegocioErro";

export class NumeroConta {
    private _numero: string;

    public constructor(numero: string){
        this.validar(numero);
        this._numero = numero;
    }

    private validar(numero: string): void{
        if(!this.temSeisDigitos(numero)){
            throw new NegocioErro("número de conta inválida");
        }
    }

    private temSeisDigitos(numero: string): boolean{
        const regexp: RegExp = /^\d{6}$/;
        return regexp.test(numero);
    }

    public get numero(): string {
        return this._numero;
    }
}