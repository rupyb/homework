function bankAccount() {
    return {
        name: name,
        balance: 0,
        setName: function (name) {
            this.name = name;

        },
        setBalance: function (amount) {
            this.balance += amount;

        },
        addInterestToBalance: function (account, sum) {
            let binder = addInterest.bind(account);
            binder(sum);
        },
        anotheradd: function (account, sum) {
            let binder = add.bind(account);
            binder(sum);
        }
    };
}
//a reg function
function addInterest(amount) {
    this.balance += amount;
    console.log('using addInterest function ', this.balance);
}
//trying with expression 
let add = function (amount) {
    this.balance += amount;
    console.log('using add function ', this.balance);
};
let johnsAccount = bankAccount();
console.log('johns balance : ',johnsAccount.balance);
johnsAccount.setBalance(100);
johnsAccount.setName('john');
console.log('johns balance : ',johnsAccount.balance);
console.log('johns name : ',johnsAccount.name);
johnsAccount.addInterestToBalance(johnsAccount, 50);
console.log('johns balance : ',johnsAccount.balance);

let bobsAccount = bankAccount();
bobsAccount.setBalance(1500);
bobsAccount.setName('bob');
console.log('johns balance : ',johnsAccount.balance);
console.log('bobs balance : ',bobsAccount.balance);
bobsAccount.addInterestToBalance(bobsAccount, 50);
console.log('bobs balance : ',bobsAccount.balance);
bobsAccount.anotheradd(bobsAccount, 50);
console.log('bobs balance : ',bobsAccount.balance);






