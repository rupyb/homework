var counting = counting || {};
const chaim = counting.getNewCounter();
for (let index = 0; index < 10; index++) {
    chaim.addToCounter();
}
console.log(chaim);
const moish = counting.utils();
const yankel = counting.utils();
for (let index = 0; index < 5; index++) {
    moish.addToCounter();
}
for (let index = 0; index < 15; index++) {
    yankel.addToCounter();
}

console.log(yankel);
console.log(moish);
