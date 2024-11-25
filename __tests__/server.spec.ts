import app from '../src/server.js';
import request from 'supertest';

describe("Bateria de test de servidor", () => {

    test("Servidor en endpoint /", async () => {
        return await request(app)
            .get('/')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola mundo al usuario Gonzalo Reyes");
            });
    });

    test("Servidor en endpoint /api-key", async () => {
        return await request(app)
            .get('/api-key')
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("la apikey de mi aplicacion es: 123456");
            });
    });

    test("Servidor en endpoint /operar - Suma", async () => {
        return await request(app)
            .get('/operar')
            .query({ operacion: "suma", num1: "5", num2: "3" })
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El resultado de la operacion es: 8");
            });
    });

    test("Servidor en endpoint /operar - Operacion sin segundo numero", async () => {
        return await request(app)
            .get('/operar')
            .query({ operacion: "sqrt", num1: "16" }) 
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("El resultado de la operacion es: undefined");
            });
    });    

    test("Servidor en endpoint /palindromo - Palindromo verdadero", async () => {
        return await request(app)
            .get('/palindromo')
            .query({ frase: "anita lava la tina" })
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, La frase ingresada es palindromo");
            });
    });

    test("Servidor en endpoint /palindromo - Palindromo falso", async () => {
        return await request(app)
            .get('/palindromo')
            .query({ frase: "hola mundo" })
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, La frase ingresada no es palindromo");
            });
    });

    test("Servidor en endpoint /primo - Numero primo", async () => {
        return await request(app)
            .get('/primo')
            .query({ numero: "7" })
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, el numero ingresado es un numero primo");
            });
    });

    test("Servidor en endpoint /primo - Numero no primo", async () => {
        return await request(app)
            .get('/primo')
            .query({ numero: "10" })
            .expect(200)
            .expect("Content-Type", /text/)
            .then(response => {
                expect(response.text).toBe("Hola, el numero ingresado no es un numero primo");
            });
    });
});
