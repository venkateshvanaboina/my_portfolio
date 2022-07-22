// // document.getElementById("para").innerHTML =" hello"
// // console.log(x);
// // document.write("hello");

// // document.getElementById("para").innerHTML ="Namastha JAvaScript"

// // var x;
// // var y;
// // x=10;
// // y=23;
// // console.log(x*y);

// // document.write("Hello world")

// // function divisionNumber(x,y){
// //     return x / y;
// // }

// //     let z = divisionNumber(4,2);

// // function myFunction(x,y) {
// //     return x + y;
// //     // console.log("hello");
// // }

// // console.log(myFunction (12,3));
// // ................................................................
// // .............Function Expression.........
// // const myArea = function(x,y) {
// //     return x * y;
// // }
// // console.log(myArea(12,12))
// // ...............................................................

// // local and gloabal varaible

// // ...local varaible
// // var lastname = "Venkatesh";

// // function firstname() {
// //     lastname="vanaboina" //overrided the above value
// //     console.log(lastname);
// // }

// // firstname();



// // let latname = true;

// // function bolle() {
// //     latname=false;  //overrided the above value
// //     console.log(latname);
// // }

// // bolle();

// // console.log(latname);


// // const late = 123;

// // function numbe() {
// //     late= 3212;  //overrided the above value but for const it will show error
// //     console.log(late);
// // }

// // numbe();

// //Global VAraibles

// // function printName() {
// //     let firstname = "Venkatesh"
// //     console.log(firstname);
// // }

// // printName();

// // console.log(firstname);  //outside the function there will be not value assign for these firstname

// // let firname = "Vanbaoina";

// // function priName() {
// //     firname = "Venkatesh"
// //     console.log(firname);
// // }

// // priName();

// // console.log(firname);


// //****************OBJECT******************  (Important topic)


// // var student = {
// //     roll_no: 24,
// //     firstname: 'Venkatesh',
// //     lastname: 'Vanaboina',
// //     class: 10,
// //     section: 4,
// //     isPassed: false,
// //     fullname: function(){
// //         return this.class +' '+ this.firstname +' '+ this.lastname
// //     }
// // }

// // //console.log(student.fullname());
// // //console.log(student['lastname']);
// // console.log(student.firstname +' '+  student.lastname )

// // var lastfirst = "Venkatesh Vanaboina"
// // //automaticall the javascript includes the options for the string object like length etc..................
// // console.log(lastfirst.length);

// //************************************ARRAY***************************** */  (Important topic)
// // let arr =["Ap","ts",'up','er',1,2,4];

// // console.log(arr[4]);

// // let firstName = "Wdbla@Development@Ram@Test"

// // let result = firstName.split("@");

// // console.log(result[1]);


// // var student = {
// //     firstName: 'venkatesh',
// //     lastName: 'vanaboina',
// //     section: 4,
// //     class:9,
// //     ispaseed: true,
// //     fullName: function () {
// //         return this.firstName +' '+ this.lastName;
// //     },
// //     sectionClass: function (){
// //         return this.section +' '+this.class;
// //     }
// // }

// // console.log(student.fullName());
// // console.log(student.sectionClass());

// // function myFunction (a,b){
// //     return a*b;
// // }
// // console.log(myFunction(10,2));


// // function printName(){
// //     console.log("Hello Venky");

// // }
// // printName();


// //...............................operators.......................

// // let x=5;

// // console.log(x =="5");//true or false (== it will compare value)

// // console.log(x != "4");

// // let x =5;
// // console.log(x > 10);
// // console.log(x < 10);
// // console.log(x <= "10");
// // console.log(x >= 10);


// // conditions...........................
// // if(){
// //statements
// // }

// // let x = 10;
// // let y = 5;
// // let z = 1;
// //&& and symbol  .....  || or symbol
// // if(x != y &&  x != z || x<z){
// //     console.log("statement is true ");
// // }
// // else {
// //     console.log("statement is false")
// // }

// // laddeer condition
// // if (x>y) {
// //  } else if (x>y) {

// //     }else if(x<y) {

// //     }else if (x<y) {

// //     }

// //     <!-- (x==4 && x==10) ? console.log("4") : console.log("10") -->

// // for (x=1,x x <= 100,x++){
// //     console.log(101-x)
// // }

// // function countLetter(){
// //    var str = document.getElementById("_string").value;
// //    for(let i=0;i<str.length;i++)
// //     {
// //       var count=0;
// //       for (j=0;j<str.length;j++) {
// //          if(str.charAt(i) == str.charAt(j)){
// //             count++;
// //          }
// //       }
// //       console.log(str.charAt(i)+':'+count);
// //    }
// // }

// //let cars = ['suzuki','mahindra','hyndai','bmw','audi','mercedes']



// // console.log(cars[0] ),
// // console.log(cars[1] ),
// // console.log(cars[2] ),
// // console.log(cars[3] ),
// // console.log(cars[4])
// // let i=5;
// // for (let i=0;i<10;i++) {
// //    console.log(i)
// // }

// // const fruits=['apple','bannana','cherry']
// //    for(x of fruits){
// //       console.log(x)
// //    }

// // const students ={
// //    name:'venkatesh',
// //    domain:'web dev',
// //    age: 23,
// //    experience: true
// // }

// // for (let x in students){
// //    console.log(students[x]);
// // }

// // const numbers =[1,34,54,34,23,3445,45,40];

// // for(let x in numbers){
// //    console.log(numbers[x]);
// // }

// // let language="Venkatesh"

// // for(let x of language) {
// //    console.log(x)
// // }

// // let x=1;

// // do {
// //    console.log("the number is" +' '+x);
// // }while(x<10);

// //small program to count the letter in the string
// // function countLetter(){
// //     let mainText= document.getElementById("_string").value.toLowerCase();
// //     let _char=document.getElementById("_char").value.toLowerCase();
// //     let counter=0;//temporary varaible for counting

// //     for(let x=0; x < mainText.length; x++) {

// //         if(mainText.charAt(x) == _char){

// //            /// counter = counter +1 ;
// //            // counter +=1;
// //            counter ++;
// //         }


// //     }
// //     document.getElementById("result").innerHTML = counter
// // }

// //for in loop
// // let obj =
// // {
// //     name: "venkatesh",
// //     age: 23,
// //     id: 123,
// //     gender: "male"

// // }

// // for (prop in obj) {
// //     console.log(obj);
// // }

// // let marks =["23","45","23"]
// // for (props in marks){
// //     console.log(marks[props]);
// // }
// // for of loop ES 16 feature  .....I t will not work for Objects
// // we can easily read the values directly

// // let marks =["23","45","23",23,34,"venkatesh","venjkate"]
// // for (props of marks){
// //     console.log(props);
// // }
// //compare for,for in.for of

// //while loop its an keyword
// // let x = 5;
// // while (x > 1) {
// //     console.log("venkatesh");
// //     x = 0;//here we have to start
// // }

// //do while loop
// // let x = 0;
// // do {
// //     console.log("venkatesh");
// // } while (x > 1);


// //hoisting var can be hoisted let can not

// // console.log(x);

// // var x=4;


// //********************//arrow functions//
// // function printName(name){//normal function

// // }

// // printName = (name) => { //arrow function new version

// // }

// //Dates
// //console.log(new Date().getSeconds());

// //set it will not allows duplicates
// // let marks = [2,4,7];

// // marks.push(4);
// // marks[5]=4;

// // console.log(marks);
// // //***************set examples */
// // let mySet = new Set(marks);
// // // mySet.add(1);
// // mySet.delete(7);

// // console.log(mySet);

// //maps

// // let myMap = new Map();
// // myMap.set("first",1);
// // myMap.get("first")


// //********************CALL BACKS **************/
// //   there will be three concepts in the CAll backs:
// //   1: Callbacks(SetTimeout,SetTimeInterval)
// //   2: Promises
// //   3: AsyncAwait
// //1:CALLBACKS
// // Settimeout is like a function it will take 2 inputs 1.callback function 2.time
// //**********IT WILL LOAD FOR ONLY ONE TIME */
// // function printName (){
// //     console.log("Venkatesh vanaboina")
// // }
// // function printName2 (){
// //     console.log("Venkatesh")
// // }
// // setTimeout(printName,0); 
// // printName2();

// //setInterval reloading website after 5sec or reloading status after 10sec we have tou se setInterval
// //**********IT WILL LOAD FOR ONLY UNLIMITED TIME */
// // TO STOP THE SETINTERVAL THERE IS AN FUNCTION CALLED "CLEARINTERVAL" 
// // function printName(){
// //     console.log("Set Interval venkatesh")
// // }

// // function printName2() {
// //     console.log("Venkatesh Vanaboina")
// // }
// // function printName3() {
// //     console.log("king")
// // }
// // let x = setInterval(printName2,3000);
// // //clearInterval(x);
// // clearTimeout(x)

// // setInterval(printName,5000);

// //(printName3,1000);  
// // function printName(x){
// //     console.log(x)
// // }
// // setTimeout(printName,2000,"FFFFF");
// //ANNANOYMS SETOUTFUNCTION SYNTAX
// //THIS IS GENERAL FUNCTION
// // setTimeout(function (){
// //     console.log("Venkatesh")
// // }, 3000);
// //THIS IS ARROW FUNCTION
// // setTimeout(() => {
// //     console.log("Vanaboina")
// // },3000);
// // let x=() => {
// //     console.log(true,false);
// // }
// // x();

// //EXAMPLES FOR THE CALLBACKS
// // function stepOne(callback) {
// //     console.log("Ticket Booking");
// //     callback(stepThree,stepfour);
// // }

// // function stepTwo(success,fail) {
// //     console.log("calling API");

// //     setTimeout(() => {
// //         let response = false;
// //         if(response == true){
// //             console.log("API Success");
// //             success();
// //         }else {
// //             console.log("fail");
// //             fail();
// //         }
// //         console.log("API Success");

// //     },5000);
// // }

// // function stepThree() {
// //     console.log("Success");
// //     console.log("print Ticket");
// // }

// // function stepfour (){
// //     console.log("failed");
// //     console.log("TRY AGAIN");

// // }

// // stepOne(stepTwo);
// // step1=() => {
// //     console.log("venkatesh");
// // }
// // step1();

// //CALL AND NEW CONCEPT
// //another concept :CLASS(It will work as blueprint for Object)
// // class Student{
// //     constructor(name,age,gender,pass){
// //         this.name = name;
// //         this.age = age;
// //         this.gender =gender;
// //         this.pass =pass;
// //     }
// //     getFullName() {
// //         return this.name;
// //     }
// // }

// // let student1 = new Student("venkatesh",23,"male",true);

// // console.log(student1.getFullName());

// //2:PROMISES
// // iT WILL HAVE 3 STATES 
// // 1: PENDING
// // 2:SUCCESS OR FULFIL 
// // 3: REJECTED OR FAILURE STATE
// // BY DEFAULT IT WILL START FROM PENDING STATE

// // let promise = new Promise( (resolve, reject) => {
// //     //code
// //     //Async
// //     resolve();
// //     //if it fail we call reject
// //     reject();
// // }); 
// // console.log(promise);

// //EXAMPLE FRO PROMISES
// // let promise = new Promise((resolve,reject) => {
// //     //PENDING STATE
// //     setTimeout(() => {
// //         console.log("success");
// //         resolve("hi");//it will go for then for reject it will go for catch
// //     },5000);
// // })
// // //SYNTAX FOR CALL PROMISES
// // promise.then((res) => {
// // //FULLFILL STATE
// // console.log(res);
// // }).catch(() => {
// // //FAILURE STATE
// // console.log("rejected");
// // });

// //**********************API CALLS
// // let response = fetch('https://api.publicapis.org/entries');

// // response.then((res) => {
// //     res.json().then((res) => {
// //         console.log(res);
// //     }).catch(() => {

// //     })
// // }).catch((err) => {
// //     console.log("fail");
// // })


// //************** API EXAMPLE********
// // let data = {
// //     name:"ram",
// //     age: 23,
// //     bike: {
// //         company:"ktm",
// //         model:2021,
// //         mileage: [
// //             {petrol:"oil",kms:90},
// //             {petrol:"petrol",kms:70},
// //             {petrol:"diesel",kms:100}
// //         ]
// //     }
// // };

// // let millegearray = data.bike.mileage;
// // function maxkms() {
// //     let max=0;
// //     let petrolbunk;
// //     for (millegeitem of millegearray) {
// //         if(millegeitem.kms > max) {
// //             max=millegearray.kms;
// //             petrolbunk=millegeitem.petrol;
// //         }
// //     }
// //     console.log("petrol bunk", petrolbunk);
// // }

// // maxkms();

// //*********second API example***********





// // let resol = fetch('https://api.publicapis.org/entries');

// // resol.then(function (res) {
// //     var response = res.json();
// //     response.then(function (res) {
// //         let dog = [];
// //         let cat = [];
// //         let birds = [];
// //         for (let i = 0; i < res.entries.length; i++) {
// //             if (res.entries[i].API.includes("dog")) {
// //                 dog.push(res.entries[i]);
// //             }
// //             else if (res.entries[i].API.includes("dog")) {
// //                 catArray.push(res.entries[i]);
// //             }
// //             else if (res.entries[i].API.includes("bird")) {
// //                 birdsArray.push(res.entries[i]);
// //             }
// //         }
// //         console.log(dog);
// //         console.log(cat);
// //         console.log(birds);
// //     }).catch(function (error) { console.log(error) });
// // }).catch(function (error) { console.log(error) });

// let resol = fetch('https://api.publicapis.org/entries');

// resol.then(function (res) {
//     var response = res.json();
//     response.then(function (res) {
//         let dog = [];
//         let cat = [];
//         let bird = [];
//         for (let i = 0; i < res.entries.length; i++) {
//             if (res.entries[i].API.includes('Dog')) {
//                 dog.push(res.entries[i]);
//             }
//             else if (res.entries[i].API.includes("cat")) {
//                 cat.push(res.entries[i]);
//             }
//             else if (res.entries[i].API.includes("Bird")) {
//                 bird.push(res.entries[i]);
//             }
//         }


//         console.log(dog);
//         console.log(cat);
//         console.log(bird);
//     }).catch(function (error) { console.log(error) });
// }).catch(function (error) { console.log(error) });

// //




var txt = "Helloo! Good After Noon";
var pattern = /[a-zA-Z][0,]0[2][a-zA-Z]$/;
var pos=txt.search(pattern)
console.log("position" + pos);