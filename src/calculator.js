const calculator = {
    add: function(a, b){
        return a + b;
    },     
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b;
    },
    div: function(a, b){
        if(b === 0){
            return 'Divisor cannot be zero';
        }else{
            return a / b;
        }
    }
}

export default calculator;