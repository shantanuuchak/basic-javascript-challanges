// Write a program to decide grade like first division, second division, third division and fail

const getDivision = (score, passingMarks = 35) => {
    if(score < 80 && score > 60) return `First Division`;
    if(score < 60 && score > 45) return `Second Division`;
    if(score < 45 && score > passingMarks) return `Pass`;
    return `❌Congratualtions bro you failed!`;
}

console.log(getDivision(30, 30));