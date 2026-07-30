class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const freqMap = {};
        for (let i = 0; i < s1.length; i++) {
            freqMap[s1.charAt(i)] = (freqMap[s1.charAt(i)] || 0) + 1;
        }
        console.log(freqMap);
        let left = 0;
        for (let right = s1.length-1; right < s2.length; right++) {
            console.log(left, right);
            const currentMap = { ...freqMap };
            let cl = left;
            while (cl <= right) {
                if(!currentMap[s2.charAt(cl)]){
                    break;
                }
                currentMap[s2.charAt(cl)]--;
                if (currentMap[s2.charAt(cl)] == 0) {
                    delete currentMap[s2.charAt(cl)];
                }
                cl ++;
            }
            if (Object.keys(currentMap).length == 0) {
                return true;
            }
            left++;
        }
        return false;
    }
}
