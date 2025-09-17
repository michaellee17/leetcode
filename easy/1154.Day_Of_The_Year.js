/**
 * @param {string} date
 * @return {number}
 * 2025/9/17 條件判斷 閏年的條件要特別看一下 掌握度80%
 */
var dayOfYear = function(date) {
    let arr = date.split('-')
    let isSpecial = false
    if(arr[0] % 4 === 0 && (arr[0] % 100 !== 0 || arr[0] % 400 === 0)){
      isSpecial = true
    }
    let days = [31,28,31,30,31,30,31,31,30,31,30,31]
    if(isSpecial) days[1] = 29
    let result = 0
    let beforeMonth = parseInt(arr[1]) - 2
    if(beforeMonth >= 0){
        for(let i=0; i<= beforeMonth; i++){
          result += days[i]
        }
    }
    result += parseInt(arr[2])
    return result
};
console.log(`output->date`,dayOfYear("1900-05-02"))