export function reverse(string){

    const straight = string.split('');
    const reverse = straight.reverse();
    const Reversed = reverse.join('');

    return Reversed;
}