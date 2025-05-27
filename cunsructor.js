// function player(name,age,country)

// {
//     this.name=name;
//     this.age=age;
//     this.country=country;
//     this.achivment=function(){
//         console.log("tennis player");

//     }
// }
// let player1=new player("feddarer",52,"swizerland");
// console.log(player1);
// function employee(name,age,dob)
// {
//     this.name=name;
//     this.age=age;
//     this.dob=dob;

// }
// employee.prototype.company="misard"
// var emp1=new employee("venky",25,1998)
// var emp2=new employee("suri",24,1999)
// console.log(emp1);
// console.log(emp2.name);
// console.log(emp1.company);
// console.log(emp2.company);
 

var worker1={
    name:"venky",
    salary:50000,
   
    
}
var worker2={
    name:"suri",
    salary:60000,
}
function calsalarywithBonus(bonus)
    {
        this.salary=this.salary+bonus;
        console.log(`${this.name}s salary is after bonus is ${this.salary}`)


    }
    

//worker.calsalrywithBonus();
calsalarywithBonus.call(worker1,10000);
calsalarywithBonus.apply(worker2,[50000]);


