// function isEven(num){
//     if(num % 2 == 0){
//         return true;
//     } else{
//         return false;
//     }
// }

function isEven(num){
    return num % 2 === 0;
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

function kebabToSnake(str){
    var val = str.indexOf("-");
    var snake;
    if(val > 0){
        snake = str.replace(/-/g,"_");
        return snake;
    } else{
        return str;
    }
}