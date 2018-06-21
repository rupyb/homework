const dayOfWeek = (function () {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return {
        getNamedDay: function (number) {
            return days[number - 1];
        },
        getNumDay: function (day) {
            day = day[0].toUpperCase() + day.slice(1);
            return days.indexOf(day) + 1;
        }

    };

}());

console.log(dayOfWeek.getNamedDay(7));
console.log(dayOfWeek.getNumDay('monday'));

const interestCalculate = (function () {

    let rate;
    let years;

    return {
        setYears: function (yearsInt) {
            years = yearsInt;
            console.log(years);
        },
        setRate: function (rateInt) {
            rate = rateInt;
            console.log(rate);
        },
        calculateInterest: function (amount) {
            return ((amount * rate) * years);
        }
    };
}());
console.log(interestCalculate);
interestCalculate.setYears(10);
interestCalculate.setRate(.05);
let calc = interestCalculate.calculateInterest(1000);

console.log(calc);

