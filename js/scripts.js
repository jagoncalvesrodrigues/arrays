// # Ejercicios

// ## Arrays

// - Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.
const randomarr = array=>array[Math.floor(Math.random()*array.length)];
console.log(randomarr([1,2,3,4,5]));

// - Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.
//   - "La suma de todos los números es:[suma]"
//   - "La media de todos los números es:[media]"
//   - "El mayor es [mayor] y el menor es [menor]"
const operators = array=>{
    const sum = array[0]+array[1]+array[2];
    return `La suma de todos los numeros es ${sum} 
            La media de todos los números es ${sum/3} 
            El mayor es ${Math.max(...array)} y el menor es ${Math.min(...array)}`;
}
console.log(operators([5,8,12]));

// - Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. 
// La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const randomNumber = array =>{
    const number = Math.floor(Math.random()*11);
    const includes = array.includes(number);
    return includes === true ? `El numero es ${number} y la posicion ${array.indexOf(number)}` : `No esta ese numero`;
}
console.log(randomNumber([1,2,3,4,5]));

// - Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const emptyArray = array => {
    const num1 = Math.floor(Math.random()*100);
    const num2 = Math.floor(Math.random()*100);
    const num3 = Math.floor(Math.random()*100);
    array.push(num1,num2,num3);
    return array;
}

console.log(emptyArray([]));

// - Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array 
// ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] 
// La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la 
// letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.

const dniLetter = number =>{
    const letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] ;
    const letter= letters[number%23];
    return (`Su dni es ${number+letter}`);
}
console.log(dniLetter(12345678));

// - Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada 
// palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']

const firstLetter = word =>{
    const first = word.charAt(0).toUpperCase();
    return first;
}
const secondLetter = word =>{
    const second = word.charAt(word.length - 1).toUpperCase();;
    return second;
}
const wordsUppercase = array =>{
    const result = [];
    result.push(firstLetter(array[0]),secondLetter(array[0]),firstLetter(array[1]),secondLetter(array[1]),firstLetter(array[2]),secondLetter(array[2]),)
    return result;
}
console.log(wordsUppercase(['hola', 'adios', 'gato']));

// - Crea una función que reciba un array con 3 números y te diga cuántos números pares tiene ese array.

const threeNumbers = numbers => {
    let pairNumber = 0;
    if (numbers[0] % 2 === 0) {
        pairNumber++;
    }
    if (numbers[1] % 2 === 0) {
        pairNumber++;
    }
    if (numbers[2] % 2 === 0) {
        pairNumber++;
    }
    return (`Hay ${pairNumber} numeros pares`)
}   

console.log(threeNumbers([1,2,3]));

// - Crea una función que reciba un array con 3 números y devuelva un nuevo array con los mismos números pero en orden inverso.

const reverseNumbers = array=>{
    const reverseArray = [array[2], array[1], array[0]];
    return reverseArray;
} 

console.log(reverseNumbers([1,2,3]));

// - Crea una función que reciba un array con 3 palabras y devuelva un nuevo array con las mismas palabras pero en mayúsculas.
const upperCaseWords = array=>{
    const upperCase = [array[0].toUpperCase(), array[1].toUpperCase(), array[2].toUpperCase()];
    return upperCase;
} 

console.log(upperCaseWords(['Juan','Antonio','Rodrigues']));