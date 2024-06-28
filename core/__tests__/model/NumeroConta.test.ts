import { NumeroConta } from "../../src/model/NumeroConta";

describe("Número Conta", () => {
    test("número conta com seis digitos", () => {
        const numeroConta: NumeroConta = new NumeroConta("123456");
        expect(numeroConta.numero).toBe("123456");
        expect(numeroConta.numero.length).toBe(6);
    });

    test("número de conta com cinco digitos", () => {
        expect(() => {new NumeroConta("12345");}).toThrow("número de conta inválida"); 
    });

    test("número de conta com sete digitos", () => {
        expect(() => {new NumeroConta("1234567");}).toThrow("número de conta inválida"); 
    });

    test("número de conta valor que não seja digitos", () => {
        expect(() => {new NumeroConta("abc456");}).toThrow("número de conta inválida"); 
    });
});