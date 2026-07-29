class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxarea = 0;
        let i = 0;
        let j = heights.length - 1;

        while(i < j){

            const length = Math.min(heights[i], heights[j]);
            const breadth = j - i;

            const area = length * breadth;

            maxarea = Math.max(area, maxarea);

            if(heights[i] < heights[j]){
                i += 1;
            } else if(heights[i] > heights[j]){
                j-=1;
            } else {
                i +=1;
                j-=1;
            }

        }
        return maxarea;
    }
}
