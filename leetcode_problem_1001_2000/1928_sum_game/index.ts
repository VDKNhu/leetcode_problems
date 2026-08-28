function sumGame(num: string): boolean {
    const len = num.length;
    let questionMarksInFirstHalf = 0, sumDigitsInFirstHalf = 0;
    let questionMarksInSecondHalf = 0, sumDigitsInSecondHalf = 0;

    for(let i = 0; i < len >> 1; i++) {
        if(num[i] === "?") {
            questionMarksInFirstHalf++;
        } else {
            sumDigitsInFirstHalf += num[i].charCodeAt(0) - '0'.charCodeAt(0);
        }
    }

    for(let i = len >> 1; i < len; i++) {
        if(num[i] === "?") {
            questionMarksInSecondHalf++;
        } else {
            sumDigitsInSecondHalf += num[i].charCodeAt(0) - '0'.charCodeAt(0);
        }
    }

    const totalQuestionMarks = questionMarksInFirstHalf + questionMarksInSecondHalf;
    const sumDifference = sumDigitsInFirstHalf - sumDigitsInSecondHalf;
    const questionMarksDifference = questionMarksInSecondHalf - questionMarksInFirstHalf;
    return totalQuestionMarks % 2 === 1 || 2 * sumDifference !== 9 * questionMarksDifference;
};