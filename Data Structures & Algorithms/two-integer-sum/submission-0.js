class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const dictMap = {};
        for(let i=0;i<nums.length;i++ ){
            let num= nums[i]
            if(dictMap[target-num] !== undefined){
                return [dictMap[target-num], i];
            }else{
                dictMap[num] = i;
            }
        }
    }
}
