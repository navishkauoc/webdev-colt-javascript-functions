function isEven(num){
    if(num % 2 == 0){
        return true;
    } else{
        return false;
    }
}

function factorial(num1){
    var x = 1;
    if(num1 == 0){
        return 1;
    } else{
        while(num1 > 0){
            x *= num1;
            num1 -= 1;
        }
        return x;
    }
}