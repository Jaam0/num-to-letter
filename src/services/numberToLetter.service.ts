import { ConvertInterface } from "../interfaces/convert.interface";
import { config } from "../config/environment.config";

class NumberToLetter {
    private static readonly UNITS = config.NITS;
    private static readonly TENS = config.TENS;
    private static readonly HUNDREDS = config.HUNDREDS;

    constructor() { }

    public static convert(numberToLetter: string | number): ConvertInterface {
        try {
            const numSpit = numberToLetter.toString().split(".");
            numberToLetter = this.getDecimals(Number(numberToLetter)).original.toString();

            let literal = "";
            let decimalPart;
            numberToLetter = numberToLetter.replace(".", ",");
            if (numberToLetter.indexOf(',') == -1) {
                numberToLetter = numberToLetter + ",00";
            }

            if (`\\d{1,9},\\d{1,2},${numberToLetter}`) {
                const numberArray = numberToLetter.split(",");
                const n = parseInt(numberArray[0]);
                decimalPart = "pesos dominicanos con " + numberArray[1] + "/100";
                numSpit[1] = numSpit[1] === undefined ? "0" : numSpit[1];

                const decimalRatePart = parseInt(numSpit[1]) > 9 ? this.getTems(numSpit[1]) : this.getUnits(numSpit[1])

                if (n === 0) {
                    literal = "cero ";
                }
                else if (n > 999999) {
                    literal = this.getMillions(numberArray[0]);
                } else if (n > 999) {
                    literal = this.getThousands(numberArray[0]);
                } else if (n > 99) {
                    literal = this.getHundreds(numberArray[0]);
                } else if (n > 9) {
                    literal = this.getTems(numberArray[0]);
                } else {
                    literal = this.getUnits(numberArray[0]);
                }

                return {
                    number: Number(numberToLetter.replace(",", ".")),
                    letter: (literal + decimalPart).toUpperCase().trim(),
                    cents: numberArray[1],
                    fullDescription: literal.toUpperCase().trim(),
                    rate: `${literal}${numSpit[1] !== '0' ? `PUNTO  ${decimalRatePart}` : ''}`.trim().toUpperCase(),
                }
            } else {
                return {
                    number: 0,
                    letter: "",
                    cents: "",
                    fullDescription: "",
                    rate: ""
                }
            }
        } catch (error: unknown) {
            throw new Error("Error converting number to letter: " + error);
        }
    }
    private static getUnits(numero: string): string {
        const num = numero.substring(numero.length - 1);
        if (num === '1') {
            return "uno ";
        }
        return this.UNITS[parseInt(num)];
    }
    private static getTems(num: string): string {
        const n = parseInt(num);
        if (n < 10) {
            return this.getUnits(num);
        } else if (n > 19) {
            const u: string = this.getUnits(num);
            if (!u) {
                return this.TENS[parseInt(num.substring(0, 1)) + 8];
            } else {
                const dec: string = this.TENS[parseInt(num.substring(0, 1)) + 8];
                if (dec.includes("veinte")) {
                    return dec.replace("te", "ti").replace("ta", "ti").trim() + u;
                } else {
                    return dec + "y " + u;
                }
            }
        } else {
            return this.TENS[n - 10];
        }
    }
    private static getHundreds(num: string): string {
        const digit = parseInt(num);
        if (digit > 99) {
            if (digit == 100) {
                return " cien ";
            } else {
                return this.HUNDREDS[parseInt(num.substring(0, 1))] + this.getTems(num.substring(1));
            }
        } else {
            return this.getTems(`${digit}`);
        }
    }
    private static getThousands(numero: string): string {
        const c = numero.substring(numero.length - 3);
        const m = numero.substring(0, numero.length - 3);
        let n = "";

        if (parseInt(m) > 0) {
            n = this.getHundreds(m).replace("uno", "un");
            n = "un " === n ? "" : n;
            return n + "mil " + this.getHundreds(c);
        } else {
            return "" + this.getHundreds(c);
        }
    }

    private static getMillions(numero: string): string {
        const miles = numero.substring(numero.length - 6);
        let millon = numero.substring(0, numero.length - 6);
        let n: string = "";
        millon = millon.replace("uno", "un");
        n = this.getHundreds(millon).replace("uno", "un") + ("1" === millon ? "millon " : "millones ");
        return n + this.getThousands(miles);
    }
    private static getDecimals(num: number) {
        const decimal = parseInt(num.toFixed(2).split(".")[1]);
        const value = parseInt(num.toFixed(2).split(".")[0]);

        return {
            value,
            decimal,
            original: Number(`${value}.${decimal}`),
        }
    }
}

export default NumberToLetter;