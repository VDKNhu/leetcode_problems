class Bank {
    private balance: number[];

    constructor(balance: number[]) {
        this.balance = balance;
    }

    transfer(account1: number, account2: number, money: number): boolean {
        if (this.isValidAccount(account1) && this.isValidAccount(account2) && this.isValidBalance(account1, money)) {
            this.balance[account1 - 1] -= money;
            this.balance[account2 - 1] += money;
            return true;
        }

        return false;
    }

    deposit(account: number, money: number): boolean {
        if (this.isValidAccount(account)) {
            this.balance[account - 1] += money;
            return true;
        }
        
        return false;
    }

    withdraw(account: number, money: number): boolean {
        if (this.isValidAccount(account) && this.isValidBalance(account, money)) {
            this.balance[account - 1] -= money;
            return true;
        } 
        
        return false;
    }

    private isValidAccount(account: number): boolean {
        return account > 0 && account <= this.balance.length;
    }

    private isValidBalance(account: number, money: number): boolean {
        return this.balance[account - 1] >= money;
    }
}

/**
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */