import { describe, test, expect } from "@jest/globals";
import { suma, restar, operar, multiplicar, dividir, potencia, factorial } from "../../src/app/calculadora";

describe("Bateria de test de calculadora", () => {

    test("Prueba basica", () => {
        expect(1).toBe(1);
    });

    test("Sumar en la calculadora", () => {
        expect(suma(1, 2)).toBe(3);
        expect(suma(5, 5)).toBe(10);
        expect(suma(15, 15)).toBe(30);
        expect(suma(1, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a";
        expect(suma(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => suma(a, b)).toThrowError("No se puede sumar indefinidos");
    });

    test("Restar en la calculadora", () => {
        expect(restar(5, 2)).toBe(3);
        expect(restar(15, 5)).toBe(10);
        expect(restar(45, 15)).toBe(30);
        expect(restar(10, 5)).not.toBe(0);

        let a: any = 1;
        let b: any = "a";
        expect(restar(a, b)).toBeNaN();
        a = 1;
        b = undefined;
        expect(() => restar(a, b)).toThrowError("No se puede restar indefinidos");
    });

    test("Multiplicar en la calculadora", () => {
        expect(multiplicar(2, 3)).toBe(6);

        let a: any = 1;
        let b: any = "a";
        expect(multiplicar(a, b)).toBeNaN();
        a = undefined;
        b = 5;
        expect(() => multiplicar(a, b)).toThrowError("No se puede multiplicar indefinidos");
    });

    test("Dividir en la calculadora", () => {
        expect(dividir(100, 2)).toBe(50);

        let a: any = 10;
        let b: any = "a";
        expect(dividir(a, b)).toBeNaN();
        a = 10;
        b = 0;
        expect(() => dividir(a, b)).toThrowError("No se puede dividir por cero");

        a = undefined;
        b = 5;
        expect(() => dividir(a, b)).toThrowError("No se puede dividir indefinidos");
    });

    test("Potencia en la calculadora", () => {
        expect(potencia(3, 3)).toBe(27);

        let a: any = 2;
        let b: any = "a";
        expect(() => potencia(a, b)).toThrowError("No se puede calcular la potencia con indefinidos");
        a = undefined;
        b = 5;
        expect(() => potencia(a, b)).toThrowError("No se puede calcular la potencia con indefinidos");
    });

    test("Factorial en la calculadora", () => {
        expect(factorial(5)).toBe(120);
        expect(factorial(0)).toBe(1);
        expect(() => factorial(-1)).toThrowError("No se puede calcular el factorial de un número negativo o no numérico");

        let a: any = undefined;
        expect(() => factorial(a)).toThrowError("No se puede calcular el factorial de un indefinido");
    });

    test("Operar en la calculadora", () => {
        expect(operar("suma", 10, 20)).toBe(30);
        expect(operar("resta", 5, 2)).toBe(3);
        expect(operar("multiplicacion", 2, 3)).toBe(6);
        expect(operar("division", 9, 3)).toBe(3);
        expect(operar("potencia", 2, 3)).toBe(8);
        expect(operar("factorial", 5)).toBe(120);

        let a: any = 1;
        let b: any = "a";
        expect(operar("suma", a, b)).toBeNaN();
        a = undefined;
        b = 5;
        expect(() => operar("multiplicacion", a, b)).toThrowError("No se puede multiplicar indefinidos");

        expect(operar(undefined, 10, 20)).not.toBeDefined();
        expect(operar("unknown", 10, 20)).not.toBeDefined();
    });

});