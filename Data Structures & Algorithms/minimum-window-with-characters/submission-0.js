class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";

        const need = {};
        for (let ch of t) {
            need[ch] = (need[ch] || 0) + 1;
        }

        let have = 0;
        const needCount = Object.keys(need).length;

        const window = {};
        let left = 0;

        let minLen = Infinity;
        let res = "";

        for (let right = 0; right < s.length; right++) {
            const ch = s[right];

            window[ch] = (window[ch] || 0) + 1;

            if (need[ch] && window[ch] === need[ch]) {
                have++;
            }

            // Try shrinking
            while (have === needCount) {
                const currLen = right - left + 1;

                if (currLen < minLen) {
                    minLen = currLen;
                    res = s.slice(left, right + 1);
                }

                const leftChar = s[left];
                window[leftChar]--;

                if (need[leftChar] && window[leftChar] < need[leftChar]) {
                    have--;
                }

                left++;
            }
        }

        return res;
    }
}
