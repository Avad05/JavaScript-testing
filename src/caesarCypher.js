export function caesarCypher(string, factor){
      let result = '';
      for(let char of string){
      let code = char.charCodeAt(0);

      if(char >= 'a' && char <='z'){
        let shifted = ((code - 97 + factor) % 26) + 97;
        result += String.fromCharCode(shifted);
      }else if( char >= 'A' && char <= 'Z'){
        let shifted = ((code - 65 + factor) % 26) + 65;
        result += String.fromCharCode(shifted);
      }
      else{
        result += char;
      }
    }
    return result;
}