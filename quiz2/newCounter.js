var counting = counting || {};
counting.getNewCounter = function () {
    return counting.utils();
};
const plus = counting.getNewCounter();
plus.addToCounter();
console.log('break');
console.log(plus);
