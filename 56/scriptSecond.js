var myApp = myApp || {};
myApp.utils = (function (module) {
    module.stringCaseInsensitiveEquals = (string1,
        string2) => string1.toUpperCase() === string2.toUpperCase();
    return module;
}(myApp.utils || {}));
