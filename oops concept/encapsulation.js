class person{
    constructor(name,age,salary)
    {
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    getname()
    {
        console.log(`${this.name} hi every one`);
    }
    getage()
    {
        console.log(`my age is ${this.age}  :`);

    }
    getsalary()
    {
        console.log(`my ${this.salry} is:`)
    }
}
let candidate=new person("venkatesh",26,90000);
candidate.getname();
candidate.getage();
