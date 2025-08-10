function pow(x,y){
    let result = 1;
    for (i = 0; i < y; i ++ ){
        result = result * x
    }
    return result
}
console.log(pow(3,3));