export function analyze(numbers){
    return{
        average: numbers.length === 0 ? 0 : numbers.reduce((acc, num) => acc + num, 0) / numbers.length,
        max: Math.max(...numbers),
        min: Math.min(...numbers),
        length: numbers.length
    };
}