import { describe, test, expect } from "@jest/globals";
import { esPalindromo } from "../../src/app/palabras";

describe("Bateria de test de palabras", () => {
    test("Frase vacia no es palindromo", () => {
        expect(esPalindromo("")).toBe(false);
        expect(esPalindromo(null as any)).toBe(false);
        expect(esPalindromo(undefined as any)).toBe(false);
    });

    test("Frase palindromo", () => {
        expect(esPalindromo("anita lava la tina")).toBe(true);
    });

    test("Frase no es palindromo", () => {
        expect(esPalindromo("que pasa tranca")).toBe(false);
    });
});
