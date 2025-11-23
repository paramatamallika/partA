function sumAll(...number){
    let sum=0;
    for(let num of number){
        sum+=sum;
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4) );// should return 10
