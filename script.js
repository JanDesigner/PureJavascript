//
/* var name='John';
var lastName="Batino"
var age=26
var fullage=true;
console.log(name + " " + lastName);
console.log(age);
console.log(fullage);
*/

// var name="John";
// var age="19";
// console.log(name + age);

// var job,isMarried;

// console.log(job);
// job="teacher";
// isMarried=false;

// console.log(name + ' is a  ' + age + " years old "  + job + " is married? " + isMarried);

// var lastName = prompt("what is your lastName");
// alert("Your name is "+ lastName);

// var now=2018;
// var birthYear= now-25;
// birthYear=now-25*2;

// console.log(birthYear)

// var ageJohn=30;
// var ageMark=30;

// ageJohn=ageMark=3+5*4-6;

// console.log(ageJohn);
// console.log(ageMark);

// ageJohn++;
// ageMark *=2;

// ageMark= ageMark*2;
// console.log(ageJohn);
// console.log(ageMark);

// var name='John';
// var age=26;
// var isMarried='no';

// if(isMarried === 'no'){
//     console.log(name+" is married");
// } else {
//     console.log(name+" Hopefully married soon");
// }

// var age = 31;
// if ( age < 20 ){
//     console.log("John is a teenager");
// }else if( age > 20 && age < 30 ){
//     console.log("John is a man")
// }

// else {
//     console.log("John is a Older");
// }


// var job = 'driverasdasd';
    
//     switch (job) {
//         case 'teacher':
//             console.log("John teaches kids.");
//             break;
//         case 'driver':
//             console.log("John drive car.");
//             break;
//         case 'cop':
//             console.log("John is a cop");
//             break;
//         default:
//             console.log("Undefined Job");
//             break;
//     }



// var player1 = "john";
// var playerHeight=200;
// var playerAge=18;
// var player1Score = playerHeight + (playerAge * 5) ;

// var player2 = "Patrick";
// var player2Height = 200;
// var player2Age = 18;
// var player2Score= player2Height + ( player2Age * 5 );

// var player3 = "Batino";
// var player3Height = 200;
// var player3Age = 18;
// var player3Score = player3Height + ( player3Age * 5 );


// if ( player1Score > player2Score && player1Score > player3Score ){
//     console.log( player1 + " Win the game with the score of: " + player1Score);
// } else if ( player2Score > player3Score  ){
//     console.log( player2 + " is the winner with the score of: " + player2Score);
// } else if ( player2Score === player1Score && player2Score === player3Score ) { 
//     console.log("Its a draw  " + player1 + " , " + player3 + " and " + player2 + " have the same Score of: " + player1Score);
// } else {
//     console.log( player3 + " win the game with the score of: " + player3Score);
// }

///////////////////////////
    // function // 



    // function calculateAge(yearOfBirth){
    //     var age = 2018 - yearOfBirth;
    //     return age;
    // }

    // var myAge = calculateAge(1993);
    // console.log(myAge);

    // function yearsInRetirement( name , year ){
    //     var age = calculateAge(year);
    //     var retirement = 65 - age;

    //         if ( retirement >= 0 ){
    //             console.log( name + " is retiring in the " + retirement + " year");
    //         } else {
    //             console.log( name + " is already retired" );
    //         }
        
            
    // }

    // yearsInRetirement( "John" , 1993 );


    // var array1 = ["john","batino"];
    // console.log(array1);
    // array1.push("bayrante");
    // console.log(array1);
    // array1.unshift("Mr.");
    // console.log(array1);
    // array1.pop(); // remove last element
    // array1.shift(); //remove beginner 
    // console.log(array1);
    // console.log(array1.indexOf("batino"));

    // if (array1.indexOf("batino") === -1 ){
    //     console.log("John is batino");
    // }


    // object 


    // var  john = {

    //         name: 'John',
    //         lastName: "Batino",
    //         yearOfBirth: 1993,
    //         job: "Teacher",
    //         isMarried: false,
    //         family: [ 'Jane' , 'Mark' , 'Bob' ],
    //         calculateAge : function(yearOfBirth){
    //                 return 2016 - this.yearOfBirth;
    //         }
    // };

    // console.log(john.family[2]);
    // console.log(john.calculateAge(1993));
    // console.log(john.calculateAge());

    // console.log(john);
    // console.log(john.lastName);

    // var xys = "job";
    // console.log(john[xys]);

    // var jane = new Object();

    // jane.name = "Jane";
    // jane.lastName = "Bay";
    // jane.isMarried = false;

    // console.log(jane); 



    // var names = [ 'John' , 'Batino' ];

    // for( var i = 0 ; i < name.length; i++) {
    //     console.log(names[i]);
    // }

  
    
    var yearArray = [2010 , 1991 , 1992 , 1993];
    var emptyArray = [];

    for ( i = 0; i < yearArray.length; i++){
        emptyArray[i] = 2018 - yearArray[i];
    }

    console.log(emptyArray);
    
    for ( i = 0; i < emptyArray.length; i++ ){
        if(emptyArray[i] >= 18){
            console.log("this person is in full age")
        } else {
            console.log("This person is not in full Age");
        }
    }
