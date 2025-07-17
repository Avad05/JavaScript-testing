import  { capitalize } from "./capitalize.js";

test('Hello World', () =>{
    expect(capitalize('hello world')).toBe('Hello world');
});