import { describe, test, expect } from "@jest/globals";
import { esPrimo } from "../../src/app/numeros";

describe("Bateria de test de numeros", () => {
    test("Numero menor que 2 no es primo", () => {
        expect(esPrimo(0)).toBe(false);
        expect(esPrimo(1)).toBe(false);
    });

    test("Numero negativo no es primo", () => {
        expect(esPrimo(-5)).toBe(false);
    });

    test("Numero primo", () => {
        expect(esPrimo(3)).toBe(true);
        expect(esPrimo(13)).toBe(true);
    });

    test("Numero no primo", () => {
        expect(esPrimo(6)).toBe(false);
        expect(esPrimo(15)).toBe(false);
    });
});
