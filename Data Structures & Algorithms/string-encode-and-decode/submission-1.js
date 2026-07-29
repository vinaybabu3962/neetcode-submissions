class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (const str of strs) {
            encoded += str.length + "#" + str;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        const result = [];
        let i = 0;

        while (i < s.length) {
            
            let j = i;
            while (s[j] !== "#") {
                j++;
            }

            
            const length = Number(s.slice(i, j));

            
            j++;

            
            result.push(s.slice(j, j + length));

            
            i = j + length;
        }

        return result;
    }
}
