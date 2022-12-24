console.log("hello");
let nums = [1,2,3,4];
let target = 5;

let nums1 = [2,3,4];
let target1 = 6;

let nums2 = [3,3];
let target2 = 6;

let add2Num = function (nums, target){
    for(i=0;i<nums.length;i++){
        for(j=1;i<nums.length;j++){
            if(nums[i]+nums[j]==target){
                if(i!=j){
                    return [i,j];
                }
            }
        }
    }
}

console.log(add2Num(nums, target));
document.getElementById('twosum').innerHTML = 'Two Sum :  '+ [add2Num(nums, target)]
console.log(add2Num(nums1,target1));
console.log(add2Num(nums2,target2));
