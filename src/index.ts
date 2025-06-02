import NumToLet from './services/numberToLetter.service';


export const convertNumberToLetter = (number: number | string) => {
    try {

        if (typeof number !== 'number' && typeof number !== 'string') {
            throw new Error("Input must be a number or a string representing a number.");
        }
        return NumToLet.convert(number);
    }
    catch (error: unknown) {
        throw new Error("Error converting number to letter: " + error);
    }
}