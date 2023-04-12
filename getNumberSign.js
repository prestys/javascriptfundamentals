function getNumberSign(num) {
    if(num >= 1) {
        return "positive"
    } else if(num <= -1) {
        return "negative"
    } else {
        return "zero"
    }
}

module.exports = getNumberSign;