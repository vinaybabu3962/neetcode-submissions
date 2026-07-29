class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    containsDuplicate(arr){
        const hashMap = {};
        for(let val of arr){
            if(hashMap[val] && val!='.'){
                return true;
            }
            if(val!='.'){
                hashMap[val] = 1;
            }
        }
        return false;
    }
    columnArray(arr, i) {
        return arr.map(row => row[i]);
    }

    isValidSudoku(board) {
        for(let row of board){
            if(this.containsDuplicate(row)){
                return false;
            }
        }
        for(let i=0;i<9;i++){
            if(this.containsDuplicate(this.columnArray(board, i))){
                return false;
            }
        }
        for(let i=0;i<9;i = i + 3){
            for(let j=0; j<9; j = j + 3){
                const tempArray = [];
                for(let row=i; row<i+3; row++){
                    for(let col=j; col<j+3; col++){
                        tempArray.push(board[row][col]);
                    }
                }
                if(this.containsDuplicate(tempArray)){
                    return false;
                }
            }
        }

        return true;
    }
}