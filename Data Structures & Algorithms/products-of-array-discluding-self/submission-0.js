class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       const valueFromLeft = [];
       for(let i=0;i<nums.length; i++){
           if(i==0){
                valueFromLeft.push(1);
                continue;
           }
           valueFromLeft[i] = valueFromLeft[i-1] *nums[i-1];
       }
        //console.log(valueFromLeft);
       const valueFromRight = [];
       for(let i=nums.length-1;i>=0; i--){
           if(i==nums.length-1){
                valueFromRight[i] = 1;
                continue;
           }
           valueFromRight[i] = valueFromRight[i+1]*nums[i+1];
       }
       // console.log(valueFromRight);
       const finalOutput = [];
       for(let i=0;i<nums.length;i++){
         finalOutput.push( valueFromLeft[i] * valueFromRight[i] )
       }
       return finalOutput;
    }
}
