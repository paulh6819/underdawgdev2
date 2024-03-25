const practiceNums = [3,3,3,4,4,5,5,5,5,5,4,4,4,4]
function majorityElement(nums: number[]): number {

while(true){
    
    let randomIndex = Math.floor((Math.random() * nums.length))
    const splitNums = nums.join("").split(nums[randomIndex].toString())
    if(splitNums.length > nums.length/2){
        return nums[randomIndex]
    }
 }
};


console.log(majorityElement(practiceNums))