/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Big-O = O(n^2)
 */
var twoSum = function(nums, target) {
    const len = nums.length;
    for(let i=0; i<len; i++) {
        for(j=i+1; j< len; j++){
            if(nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
    
    return [];
}; 
// cost: 72ms

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Big-O = O(n)
 */
var twoSum1 = function(nums, target) {
    let complementArr = [];
    for(let i=0; i< nums.length-1; i++) {
        const foundIndex = complementArr.findIndex(item => item == nums[i]);
        if(foundIndex !== -1){
            return [foundIndex, i]
        }else {
            complementArr.push(target - nums[i])
        }
    }
} 
// cost: 92ms

twoSum1([2, 7, 11, 15], 9);