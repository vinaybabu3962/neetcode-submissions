class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    
    groupAnagrams(strs) {
        function getAsciiCount(str){
        let c = str.split('').sort().join('');
        return c;
    }
        const anagramMap = {};
        for(let str of strs){
            const anga = getAsciiCount(str);
            if(anagramMap[anga]){
                anagramMap[anga].push(str);
            }else{
                anagramMap[anga] = [str];
            }
        }
        return Object.values(anagramMap);
    }
}
