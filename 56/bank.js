

function bankAccount() {
    return {
        name: 'name',
        balance: 0,
        setName(name) {
            this.name = name;
        },
        setBalance(amount) {
            this.balance = amount;
        },
        addInterestToBalance(account, sum) {
            const binder = addInterest.bind(account);
            binder(sum);
        },
        anotheradd(account, sum) {
            const binder = add.bind(account);
            binder(sum);
        },
    };
}
// a reg function
function addInterest(amount) {
    this.balance += amount;
    console.log('using addInterest function ', this.balance);
}
// trying with expression
let add = function (amount) {
    this.balance += amount;
    console.log('using add function ', this.balance);
};
const johnsAccount = bankAccount();
console.log('johns balance : ', johnsAccount.balance);
johnsAccount.setBalance(100);
console.log('johns balance : ', johnsAccount.balance);
johnsAccount.setBalance(50);
johnsAccount.setName('john');
console.log('johns balance : ', johnsAccount.balance);
console.log('johns name : ', johnsAccount.name);
johnsAccount.addInterestToBalance(johnsAccount, 50);
console.log('johns balance : ', johnsAccount.balance);

const bobsAccount = bankAccount();
bobsAccount.setBalance(1500);
bobsAccount.setName('bob');
console.log('johns balance : ', johnsAccount.balance);
console.log('bobs balance : ', bobsAccount.balance);
bobsAccount.addInterestToBalance(bobsAccount, 50);
console.log('bobs balance : ', bobsAccount.balance);
bobsAccount.anotheradd(bobsAccount, 50);
console.log('bobs balance : ', bobsAccount.balance);

johnsAccount.setBalance(100);
console.log(johnsAccount.balance);
