class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxFromLeft = [];
        let maxFromRight = [];
        let curr = 0;
        for(let i=0;i<height.length;i++){
            if(i==0){
                maxFromLeft.push(0);
                curr = height[i];
                continue;
            }
            maxFromLeft.push(curr);
            if(height[i] > curr){
                curr = height[i];
            }
        }
        for(let i=height.length-1;i>=0;i--){
            if(i==height.length-1){
                maxFromRight[i] = 0;
                curr = height[i];
                continue;
            }
            maxFromRight[i] = curr;
            if(height[i] > curr){
                curr = height[i];
            }
        }
        let maxarea = 0;
        console.log(maxFromLeft);
        console.log(maxFromRight);
        for(let i=0;i<height.length;i++){
            if(maxFromLeft[i] == 0 || maxFromRight[i] ==0){
                continue;
            }
             const breadth = height[i];
             const length = Math.min(maxFromLeft[i] , maxFromRight[i]);
             const area = length - breadth;
             if(area > 0){
                   maxarea += area;
             }
             console.log(i, area);
             
        }
        return maxarea;

    }
}
