function sumPairs(arr, target) {
  let res = [];
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let k = i + 1; k < arr.length; k++) {
      if(arr[i] + arr[k] === target) {
       res.push([arr[i], arr[k]]);
      }
    }
  }
  if(res.length === 0) {
    return('unable to find pairs');
  }
  return res;
};

console.log(sumPairs([1,2,3,4,5], 9));
console.log(sumPairs([1,2,3,4,5], 7));
console.log(sumPairs([3, 1, 5, 8, 2], 27));
