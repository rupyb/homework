
var myApp = myApp || {};
myApp.utils = (function (module) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    module.getNamedDay = number => days[number - 1];
    module.getNumDay = (day) => {
        day = day[0].toUpperCase() + day.slice(1);
        return days.indexOf(day) + 1;
    };
    return module;
}(myApp.utils || {}));

// this is just practice
var myApp2 = myApp2 || {};
myApp2 = {
    utils: {
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        getNamedDay: number => myApp2.utils.days[number - 1],
        getNumDay: (day) => {
            day = day[0].toUpperCase() + day.slice(1);
            return myApp2.utils.days.indexOf(day) + 1;
        },
    },
};

console.log(myApp2.utils.getNamedDay(7));
console.log(myApp2.utils.getNumDay('Monday'));
