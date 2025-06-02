# NumberToLetter English Version

A TypeScript utility library that converts numbers to their written Spanish representation. Perfect for generating invoices, checks, or any document that requires numbers to be written out in words.

## Features

- ✅ Convert numbers to Spanish text representation
- ✅ Support for decimal numbers
- ✅ Currency formatting (Dominican Pesos)
- ✅ Rate conversion with decimal points
- ✅ TypeScript support with full type definitions
- ✅ Comprehensive error handling
- ✅ Unit tested

## Installation

```bash
npm install number-to-letter
```

## Usage

```typescript
import { convertNumberToLetter } from 'number-to-letter';

// Basic number conversion
const result = convertNumberToLetter(123.45);
console.log(result);
// Output:
// {
//   number: 123.45,
//   letter: 'CIENTO VEINTITRES PESOS DOMINICANOS CON 45/100',
//   cents: '45',
//   fullDescription: 'CIENTO VEINTITRES',
//   rate: 'CIENTO VEINTITRES PUNTO CUARENTA Y CINCO'
// }
```

## API Reference

### `convertNumberToLetter(number: string | number): ConvertInterface`

Converts a number to its Spanish text representation.

**Parameters:**
- `numberToLetter`: The number to convert (can be string or number)

**Returns:**
- `ConvertInterface` object with the following properties:
  - `number`: The original number
  - `letter`: Full text with currency format
  - `cents`: The decimal part as string
  - `fullDescription`: Number in words without currency
  - `rate`: Number with decimal point pronunciation

## Examples

```typescript
// Whole numbers
convertNumberToLetter(1000);
// { fullDescription: 'MIL', ... }

convertNumberToLetter(0);
// { fullDescription: 'CERO', ... }

// Decimal numbers
convertNumberToLetter(100000.45);
// { 
//   fullDescription: 'CIEN MIL',
//   rate: 'CIEN MIL PUNTO CUARENTA Y CINCO',
//   ... 
// }
```

## Supported Range

- Numbers from 0 to 999,999,999
- Up to 2 decimal places
- Currency format in Dominican Pesos

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build project
npm run build
```

## Testing

The project includes comprehensive unit tests covering various number ranges and edge cases.

```bash
npm test
```

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.



# NumberToLetter Versión Español

Una biblioteca en TypeScript que convierte números a su representación escrita en español. Perfecta para generar facturas, cheques o cualquier documento que requiera que los números estén escritos en palabras.

## Características

- ✅ Convierte números a texto en español  
- ✅ Soporte para números decimales  
- ✅ Formato de moneda (Pesos Dominicanos)  
- ✅ Conversión de tasas con puntos decimales  
- ✅ Soporte para TypeScript con definiciones de tipos completas  
- ✅ Manejo de errores robusto  
- ✅ Pruebas unitarias incluidas  

## Instalación

```bash
npm install number-to-letter
```

```typescript
import { convertNumberToLetter } from 'number-to-letter';

// Conversión básica
const result = convertNumberToLetter(123.45);
console.log(result);
// Salida:
// {
//   number: 123.45,
//   letter: 'CIENTO VEINTITRÉS PESOS DOMINICANOS CON 45/100',
//   cents: '45',
//   fullDescription: 'CIENTO VEINTITRÉS',
//   rate: 'CIENTO VEINTITRÉS PUNTO CUARENTA Y CINCO'
// }
```

## Referencia de la API

convertNumberToLetter(number: string | number): ConvertInterface
Convierte un número a su representación en texto en español.

**Parámetros:**

- numberToLetter: El número a convertir (puede ser cadena o número)

**Retorna:**

- **Un objeto ConvertInterface con las siguientes propiedades:**

- number: El número original

- letter: Texto completo con formato de moneda

- cents: La parte decimal como cadena

- fullDescription: Número en palabras sin moneda

- rate: Número con pronunciación del punto decimal

## Ejemplos
```typescript
// Números enteros
convertNumberToLetter(1000);
// { fullDescription: 'MIL', ... }

convertNumberToLetter(0);
// { fullDescription: 'CERO', ... }

// Números decimales
convertNumberToLetter(100000.45);
// { 
//   fullDescription: 'CIEN MIL',
//   rate: 'CIEN MIL PUNTO CUARENTA Y CINCO',
//   ... 
// }

```

# Rango Soportado
- Números del 0 al 999,999,999
- Hasta 2 decimales
- Formato de moneda en Pesos Dominicanos

# Desarrollo
```bash
# Instalar dependencias
npm install

# Ejecutar pruebas
npm test

# Compilar el proyecto
npm run build
```
## Pruebas

El proyecto incluye pruebas unitarias completas que cubren diversos rangos numéricos y casos límite.

```bash
npm test
```
# Licencia
Licencia MIT

# Contribuciones

¡Contribuciones bienvenidas! No dudes en enviar un Pull Request.