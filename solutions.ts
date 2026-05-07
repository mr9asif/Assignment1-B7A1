// Problem 1: 

const filterEvenNumbers=(nums:number[]):number[]=>{
      const result: number[] = [];
    for(const n of nums){
        if(n % 2 == 0){
         result.push(n);
        }
    }

    return result
   
}
//  const ans = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// console.log(ans)

// Problem 2 :

const reverseString=(name:string):string=>{
    let arr:string[] = [];
    for(const s of name){
        arr.push(s);
    }

    arr.reverse();
    
     return arr.join('');
}

const ans= reverseString("typescript");
console.log(`"${ans}"`);