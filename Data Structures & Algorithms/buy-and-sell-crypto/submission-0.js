class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        const maxFromRight = [];
        let currmax = 0;
        for(let i=prices.length -1 ; i>=0;i--){
            maxFromRight[i] = currmax;
            if(prices[i] > currmax ){
                currmax = prices[i];
            }
        }
        let finalmax = 0;
        for(let i=0;i<prices.length;i++){
            if(maxFromRight[i] < prices[i]){
                continue;
            }
            finalmax = Math.max(finalmax,maxFromRight[i]-prices[i] );
        }
        return finalmax;
    }
}
