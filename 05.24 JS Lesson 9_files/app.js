/*
<h3>Массивт санамсаргүй №10 утга дүүргээд хамгийн их болон хамгийн бага утгын байрыг сольж хэвлэ.</h3>
*/


/*
let arr = []; 

for(i = 0; i<10; i++){
    let too = Math.floor(Math.random()*100);
    arr.push(too);
    console.log(too);
    console.log('№' + i + ' index дахь санамсаргүй утга нь: ' + arr[i]);

}

console.log(arr);

// Массивын элементийн хамгийн бага болон тэр тооны индекс олно.

let minToo = 100;
let minTooIndex = -1;

for( i=0; i<arr.length; i++) {
    if(arr[i]< minToo) {
        minToo = arr[i];
        minTooIndex = i;
    }
    // console.log(arr[i]);
}

// console.log(minToo);

console.log('Хамгийн бага тоо бол: ' + minToo + ' , түүний индекс нь ' + minTooIndex);

// Массивын элементийн хамгийн ИХ болон тэр тооны индекс олно.


let maxToo = 0;
let maxTooIndex = -1;

for( i=0; i<arr.length; i++) {
    if(arr[i] > maxToo) {
        maxToo = arr[i];
        maxTooIndex = i;
    }
    // console.log(arr[i]);
}

// console.log(minToo);

console.log('Хамгийн ИХ тоо бол: ' + maxToo + ' , түүний индекс нь ' + maxTooIndex);


// Массивын элементийн ИХ болон бага тооны индексийн байрыг солино.

 let minTooTurSave = arr[minTooIndex];
arr[minTooIndex] = arr[maxTooIndex];
arr[maxTooIndex] = minTooTurSave;

for(i=0; i< arr.length; i++) {
    console.log(arr[i]);
}

*/

/*
const nums = [1,1,2,1,1];
const nums1 = [1,4,5,1,2,3,3,4,4,5,1];
let k = 1;

for(let i=1; i < nums.length; i++) {
   
        if(nums[i] === nums[i-k]) {
            k++;
            nums[i] = "_";
            continue;
        }
    
  k = 1;
}

console.log(nums);
*/

nums1 = [1,2,2,1]; 
nums2 = [2,2];
output: [2,2]

let results = []; 

for( i=0; i< nums1.length-1; i++) {
    if(nums1[i+1]=== nums1[i]) {
        
        results.push(nums1[i]);
    }
    return results;

}

console.log(nums1);



