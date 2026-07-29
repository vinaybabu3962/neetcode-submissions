class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const hashmap = {};
        nums.forEach((num) => hashmap[num] = 1);
        nums.sort((a,b) => b-a);
        const visited = [];
        let currMax = 0;
        for(let num of nums){
            const current = num;
            if(!visited.includes(current)){
                var count = 1;
                while(hashmap[num-1]){
                    count +=1
                    visited.push(num-1);
                    num = num -1;
                }
                if(count > currMax){
                    currMax = count;
                }
            }
            visited.push(current);
        }
        return currMax;
    }
}
