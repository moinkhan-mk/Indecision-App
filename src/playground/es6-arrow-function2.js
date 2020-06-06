// const multiplier = {
//     numbers : [1,2,3,4],
//     multiplyBy:2,
//     twoTable(){
//         return this.numbers.map((numbr) => numbr * this.multiplyBy)
//     }
// }

// console.log(multiplier.twoTable());



//no longer need of argument inside 


// const add = (a,b) => {
//     console.log(arguments);
//     return a + b;
    
// }
// console.log(add(2,2,2));

// const user = {
//     name:'moin',
//     cities:['khi','larkana','saudi arab'],
//     printInfo:function(){
//         const that = this;
//         this.cities.forEach(function(city){
//             console.log(that.name + 'lives in the ' + city);

//         });
//     }
// }
// user.printInfo();

// const user = {
//     name:'moin',
//     cities:['khi','larkana','saudi arab'],
//     printInfo:function(){
//         this.cities.forEach((city) => {
//             console.log(this.name + 'lives in the ' + city);

//         });
//     }
// }
// // user.printInfo();
// const user = {
//     name:'moin',
//     cities:['khi','larkana','saudi arab'],
//     printInfo() {
//        const cityMessage =  this.cities.map((city) => {
//             return this.name + 'lives in the city ' + city;

//         });
//         return cityMessage;
//     }
// }
// console.log(user.printInfo());



// const user = {
//     name:'moin',
//     cities:['khi','larkana','saudi arab'],
//     printInfo() {
//        return  this.cities.map((city) => this.name + ' lives in th city ' + city);
//    }
// }
// console.log(user.printInfo());


let counter = 'counter';

const templateTwo = 
    (
        <div>
            <h1>{counter}</h1>
        </div>
    );

let appRoot = document.getElementById('app');
ReactDOM.render(templateTwo,appRoot);



