import { caesarCypher } from "./caesarCypher";

test('Caesar Cypher test on string', () =>{
    expect(caesarCypher('Avadhut!', 2)).toBe('Cxcfjwv!');
})