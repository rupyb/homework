var counting = counting || {};
counting.utils = (function () {
    let numOfReturns = 0;
    numOfReturns++;
    return {
        counter: 0,
        addToCounter() {
            this.counter++;
        },
        getNumReturns() {
            return numOfReturns;
        },
    };
});
// counting.utils.addToCounter();
// console.log(counting.utils.counter);
// counting.utils.addToCounter();
// console.log(counting.utils.counter);
const x = counting.utils();
x.addToCounter();
console.log(x);
const y = counting.utils();
y.addToCounter();
console.log(y);
y.addToCounter();
console.log(y);
x.addToCounter();
console.log(x);
