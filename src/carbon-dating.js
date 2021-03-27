const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  let result;
  const k = 0.693 /  HALF_LIFE_PERIOD;
  if (
    sampleActivity &&
    MODERN_ACTIVITY > sampleActivity &&
    typeof sampleActivity === "string" &&
    sampleActivity > 0

) 
    {
    result = Math.log(MODERN_ACTIVITY/sampleActivity) / k;
    return result > 0 ? Math.ceil(result) : false;
    }
else return false

};
