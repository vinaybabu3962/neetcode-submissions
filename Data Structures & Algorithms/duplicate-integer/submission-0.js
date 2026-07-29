class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var numDict = {};
        for(let num of nums){
            if(numDict[num]){
                return true;
            }
            numDict[num] = 1;
        }
        return false;
    }
}
