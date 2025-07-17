import { reverse } from "./reverse.js";

test("This is reversed string test", () =>{
    
    expect(reverse('Hello World')).toBe('dlroW olleH');
});