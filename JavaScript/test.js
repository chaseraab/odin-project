const leapYears = function(year) {
    if (year % 4 === 0) {
        console.log("Divisible by 4")
        console.log(year)
        if (!(year % 100 === 0)) {
            console.log("Not divisible by 100")
            console.log(year)
            return true
        } else {
            if (year % 400 === 0) {
                console.log("Divisible by 400")
                return true
            }
        }
    }
    return false
};
leapYears(1900)

console.log(1900 % 100)