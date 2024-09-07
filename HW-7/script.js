// Task 1
console.log('Task 1');
let arr = [3, 8, 12];
console.log(arr);
arr[1] = 10;
console.log(arr);

// Task 2
console.log('Task 2');
let arr2 = ['I', 'wanna', 'sleep'];
console.log(arr2);
arr2[3] = 'now';
console.log(arr2);

// Task 3
console.log('Task 3');
let arr3 = ['file', 8, 9, Infinity, 77, null];
console.log(arr3);
let sum = 0;

arr3 = arr3.filter((el) => Number.isFinite(el));
for(let i = 0; i < arr3.length;i++){
    sum += arr3[i];
}
console.log(`Sum >>> ${sum}`);

// Task 4
console.log('Task 4');
let arr4 = [6, 8, 13, 9, 10];

for(let i = 0;i < arr4.length;i++){
    console.log(arr4[i]);
}

// Task 5
console.log('Task 5');
let arr5 = ['hahahah', 'Hello', 'Tesla', 'cat', 'JS'];
console.log(arr5);

arr5 = arr5.filter((el) => el.length < 5);
console.log(arr5);

// Task 6
console.log('Task 6');
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr6);
console.log(`Max value >>> ${Math.max(...arr6)}`);

// Task 7
console.log('Task 7');
let arr7 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(arr7);
arr7 = arr7.filter((el) => el % 2 === 0);
console.log(arr7);