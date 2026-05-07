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
// console.log(`"${ans}"`);

// Problem 3: 

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// console.log(checkType("Hello"));
// console.log(checkType(42));

// Problem 4: 
const user = { id: 1, name: "John Doe", age: 21 };

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// console.log(getProperty(user, "age"));

// Problem 5: 

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return {
    ...book,
    isRead: true,
  };
};

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// console.log(toggleReadStatus(myBook))

// Problem 6: 

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());

// Problem 7: 

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return Array.from(new Set(arr1.filter(item => arr2.includes(item))));
};

let res = getIntersection([1, 2,2, 3, 4, 5], [3,2,2, 4, 5, 6, 7])
console.log(res);