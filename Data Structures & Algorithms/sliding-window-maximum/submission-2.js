class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    insertSorted(arr, value) {
        let left = 0;
        let right = arr.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (arr[mid] > value) {
                // Value should be to the right
                left = mid + 1;
            } else {
                // Value should be at mid or to the left
                right = mid;
            }
        }

        arr.splice(left, 0, value);
        return arr;
    }

    deleteFromDescending(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let index = -1;

        // Binary search for descending order
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                index = mid;
                break;
            }

            if (arr[mid] < target) {
                // Target is on the left
                right = mid - 1;
            } else {
                // Target is on the right
                left = mid + 1;
            }
        }

        if (index === -1) return arr; // Not found

        // Shift elements left
        for (let i = index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }

        arr.pop();

        return arr;
    }

    maxSlidingWindow(nums, k) {
        let maxTillNow = -9999;
        let sorted = [];
        for (let i = 0; i < k; i++) {
            sorted = this.insertSorted(sorted, nums[i]);
        }
        let final = [];
        let left = 0;
        for (let i = k; i < nums.length; i++) {
            final.push(sorted[0]);

            sorted = this.deleteFromDescending(sorted, nums[left++]);

            sorted = this.insertSorted(sorted, nums[i]);


        }
        final.push(sorted[0]);
        return final;
    }
}
