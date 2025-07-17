import  calculator  from "./calculator";

test('Arithmetic operations', () =>{
    expect(calculator.add(4, 2)).toBe(6);
    expect(calculator.sub(4, 2)).toBe(2);
    expect(calculator.mul(4, 2)).toBe(8);
    expect(calculator.div(4, 2)).toBe(2);
})