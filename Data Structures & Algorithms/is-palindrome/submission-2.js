class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let finalStr='';

        for(let i=0;i<s.length;i++){
            const av = s.charCodeAt(i);
            if( (av >= 65 && av <= 90) ||(av>=48 && av<=57) || (av>=97 && av<=122)){
                finalStr += s.charAt(i).toLowerCase();
            }
        }
        let reverseStr = '';
        for(let i=finalStr.length-1;i>=0;i--){
            reverseStr += finalStr.charAt(i);
        }
        return finalStr === reverseStr;
    }
}
