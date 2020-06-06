class Person{
    constructor(name='anonymous',age=0){
        this.name = name;
        this.age = age;
    }
     getGretting() {
        return `Welcome to ${this.name} and he is ${this.age} years old`

    }
}

class Traveler extends Person{
    constructor(name,age,location){
        super(name,age);
        this.location = location;
    }

    getGretting(){
        let gretting = super.getGretting();
        if(this.location){
            return gretting += ` and he livd in ${this.location}`;
        }else{
            return gretting;
        }
    }
}

const trav = new Traveler('asad',22,'Karachi');

const trav2 = new Traveler('jibu',22);

console.log(trav2.getGretting());
console.log(trav.getGretting());





















// class Student extends Person{
//     constructor(name,age,major){
//         super(name,age);
//         this.major = major;
//     }
//     majorSub(){
//         return !!this.major;
//     }
//     welconme(){
//         return 'Wlcome to Pak';
//     }
//     getGretting(){
//         let description = super.getGretting();
//         if(this.majorSub()){
//             return description += `and its Major is ${this.major} ${this.welconme()}`;

//         }
//     }

// }

// const me = new Student('MOin',22,'COmputer Science ');
// const other = new Student('jibu',25);


// console.log(me.getGretting());
// console.log(other.getGretting());

// console.log(me);
// console.log(other)  ;