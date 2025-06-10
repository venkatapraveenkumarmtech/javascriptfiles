class ATM{
    constructor(balance,minimum,withdraw)
    {
        this.balance=balance;
        this.minimum=minimum;
        this.withdraw= withdraw;
    }
    getamount()
    {
        if((this.balance - this.withdraw)>=this.minimum)
        {
            console.log("withdraw is sucessfull")
        }
        else{
            console.log("your transaction is failed")
        }
    }
}
let trans = new ATM(1000,800)
trans.getamount();
