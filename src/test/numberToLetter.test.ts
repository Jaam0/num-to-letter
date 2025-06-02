import { describe, it } from "node:test";
import assert from "node:assert";
import { convertNumberToLetter } from '../index';


describe("Number to Letter Conversion Tests", () => {

    it("should return an object with the same structure'", () => {
        const expexted = {
            number: 100000.45,
            letter: 'CIEN MIL PESOS DOMINICANOS CON 45/100',
            cents: '45',
            fullDescription: 'CIEN MIL',
            rate: 'CIEN MIL PUNTO  CUARENTA Y CINCO'
        };
        const param = 100000.45;
        const result = convertNumberToLetter(param);
        assert.deepEqual(result, expexted);
    });
    it("should convert 123 to 'ciento veintitrés'", () => {
        assert.equal(convertNumberToLetter(123).fullDescription, "CIENTO VEINTITRES");
    });

    it("should convert 1000 to 'mil'", () => {
        assert.equal(convertNumberToLetter(1000).fullDescription, "MIL");
    });

    it("should convert 0 to 'cero'", () => {
        assert.equal(convertNumberToLetter(0).fullDescription, "CERO");
    });

    
   it("should thwrow an error for Input must be a number or a string representing a number", () => {
        assert.throws(()=> convertNumberToLetter( '#' as any),(error: unknown) => {
            assert.ok(error instanceof Error);
            assert.match(error.message, /Error converting number to letter: Error: Error converting number to letter: TypeError: Cannot read properties of undefined \(reading 'toUpperCase'\)/);
            return true;
        })
   });
});