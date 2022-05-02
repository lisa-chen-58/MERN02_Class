class User {
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance=0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }
    displayBalance() {
        console.log( this.name + " has a balance of " + this.accountBalance)
    }
    transferMoney(otherUser, amount) {
        otherUser.name += amount
        this.name -= amount
    }
}

const lisa = new User("lisa","lisa@email.com");
const saria = new User("Saria","saria@email.com");
const jake = new User("Jake","jake@email.com");

lisa.makeDeposit(1000)
lisa.makeDeposit(2000)
lisa.makeDeposit(3000)
lisa.makeWithdrawal(2000)
saria.makeDeposit(5000)
saria.makeDeposit(1000)
saria.makeWithdrawal(100)
saria.makeWithdrawal(400)
jake.makeDeposit(5000)
jake.makeWithdrawal(300)
jake.makeWithdrawal(200)
jake.makeWithdrawal(100)

lisa.displayBalance();
saria.displayBalance();
saria.transferMoney(lisa, 300)
lisa.displayBalance();
saria.displayBalance();
