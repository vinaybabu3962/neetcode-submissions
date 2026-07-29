class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const dictMap = {};
        for(let i of s){
            dictMap[i] = (dictMap[i] || 0) + 1;
        }
        const dictMap2 = {};
        for(let i of t){
            dictMap2[i] = (dictMap2[i] || 0) + 1;
        }
        if(Object.keys(dictMap).length != Object.keys(dictMap2).length){
            return false;
        }
        for(let key of Object.keys(dictMap)){
            if(dictMap[key] !== dictMap2[key]){
                return false;
            }
        }
        return true;
    }
}
