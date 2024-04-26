function smallestMissingPositiveInteger(nums) {
    const positiveIntegers = nums.filter(num => num > 0).sort((a, b) => a - b);

    if (positiveIntegers.length === 0 || positiveIntegers[0] > 1) {
      return 1;
    }
    let missing = 1;
    for (const num of positiveIntegers) {
      if (num === missing) {
        missing++;
      }
      else if (num > missing) {
        return missing;
      }
    }
  
    return positiveIntegers.length + 1;
  }
  const nums = [3, 4, -1, 1];
  console.log(smallestMissingPositiveInteger(nums));
  
  const nums2 = [1, 2, 0];
  console.log(smallestMissingPositiveInteger(nums2));
  
  const nums3 = [-1, -3, 4, 2];
  console.log(smallestMissingPositiveInteger(nums3)); 