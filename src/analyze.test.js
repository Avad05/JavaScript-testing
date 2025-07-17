import { analyze } from "./analyze";

let data = [1,8,3,4,2,6];

test('Operation on String', () =>{
    expect(analyze(data).average).toBe(4);
    expect(analyze(data).max).toBe(8);
    expect(analyze(data).min).toBe(1);
    expect(analyze(data).length).toBe(6);
})
