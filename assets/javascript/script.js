// alert("hello world");
// // console.log("welcome to my web");

// var x = 40;
// console.log(x);
// console.log(x);
// console.log(x);
// console.log(x);
// console.log(x);
// console.log(x);

// let y = 100;
// let u = 50;
// console.log(y);
// console.log(u);

// var person = "mary ";
// console;

// var x = 40;
// console.log(x);
// console.log(x);
// console.log(x);
// console.log(x);
// console.log(x);

// +, -, /,*,**,%

// console.log(5 + 2);
// console.log(8 / 2);
// var num1 = 3;
// var num2 = 2;
// num3 = 10;
// var result = (num1 + num2) / num3;
// console.log(result);
// console.log(num1 + num2 + num3);
// //area of a rectangle
// var length = 20;
// var breath = 12;
// var result = length * breath;
// console.log(result);

//conditionl operations
///>, <, >=,!=, ==, ===

// var num1 = 78;
// num2 = 550;

// if (num1 > num2) {
//   console.log(
//     "resullt: " +
//       num1 +
//       "num1 is greater than num2" +
//       num2 +
//       "and that is the answer"
//   );
// } else {
//   console.log("num2 is greater than num1");
// }

//chat bot
// var message = "Hi";
// var blocked = "yes";

// if (message == "Hi" && blocked == "No") {
//   console.log("How can i help you");
// } else if (message == "Transfers") {
//   console.log("choose bank");
// } else if (message == "UBA") {
//   console.log("you have selected UBA");
// } else if (message == "wema") {
//   console.log("you have selected wema bank");
// } else {
//   console.log("i don't understand");
// }

//login systerm
// var username = "john123";
// var password = "1234";

//logical
// if (username == "john123" && password == "1234") {
//   console.log("you are login in");
// } else {
//   console.log("invalid user name or password");
// }

// if (){
//   if()

//     else()

// }else{
//   if ()

//     else()

// }

//nested
// var username = "john123";
// var password = "1234";

// if (username == "john123") {
//   if (password == "1234") {
//     console.log("you are loged in");
//   } else {
//     console.log("your paswword is incorrect");
//   }
// } else {
//   console.log("username is incorrect");
// }

//arrays
// var names = [
//   "bisi",
//   "ola",
//   ["beans", [50, 10], ["Dog", "cat", ["bird", "fowl"]], "rice"],
// ];
// // console.log(names);

// console.log(names[1]);
// console.log(names[2]);
// names[0] = "john";
// console.log(names);
// names[5] = "ifeanyi";
// console.log(names);

// var resullt = names[1] + names[2];
// console.log(result);

// console.log(names[2][1][1]);
// console.log(names[2][2][2][1]);

// var age = 18;
// var level = 200;
// if (age <= 18) {
//   if (level === 200) {
//     console.log("both are eligible.");
//   } else {
//     console.log("level is not eligible");
//   }
// } else {
//   console.log("age is not eligibile");
// }

// var time = 205;
// var age = 5555;

// if (time <= 205) {
//   if (age === 5555) {
//     console.log("both are welcome");
//   } else {
//     console.log(" age not welcome");
//   }
// } else {
//   console.log("time not welcome");
// }

// var time = 20 - 40;
// var level = 5555;

// if (time <= 20 - 40) {
//   if (level === 5555) {
//     console.log(
//       "welcome to kodys exchange what can we offer you we ar grateful in your request how can we help you   "
//     );
//   } else {
//     console.log("level not permated ");
//   }
// } else {
//   console.log("time not permated");
// }

// //push method
// var userscroes = [12, 11, 4, 5, 4, 10, 7, 8];
// var newscore = 700;
// //push
// // userscroes.push(newscore);
// // userscroes.pop();
// // userscroes.shift();
// // userscroes.unshift(newscore);
// // console.log(userscroes);

// //indexof
// // var element = 11;

// // var elevenPostion = userscroes.indexOf(element);

// // var element = 40;
// // let hasEleven = userScroes.includes(element);
// // console.log(hasEleven);

// // var newArray = userscroes.slice(1, 3);
// // console.log(newArray);
// // console.log(elevenposition);

// // var position = userscroes.indexOf(11);
// // userscroes.splice(position, 1, 100);

// // userscroes.map((element, index) => {
// //   console.log(element, index);
// // });

// let higherScore = userscroes.filter((e) => e >= 10);
// console.log(higherScore);

// //method of an object
// //1 key
// let person = { name: "james", Age: 5, Gender: "male" };
// let gross = { price: 50, nationality: "spain" };
// // var newobjectb = update;
// let keys = Object.values(person);
// console.log(keys);

// 2; // values
// let values = Object.values(person);
// console.log(values);

// //3 Entries

// let entries = Object.entries(person);
// console.log(entries);

// let hasOwnProperty = Object.hasOwnProperty("grade");
// console.log(hasOwnProperty);

// let car = { type: "ford", model: "2024", color: "blue" };
// let updateData = Object.assign({}, person, car);
// console.log(updateData);

// let userData = { name: "paul", gender: "Male", origin: "Usa", age: 3 };
// // let addDrop = (userData.age = 4);
// // console.log(userData);

// // let frozenuserData = Object.freeze(userData);
// // frozenuserData.age = 4;
// // console.log(frozenuserData);

// //seals method and object preventing new method to the adding but allowing excting propeties to be changed

// // let frozenuserData = Object.seal(userData);
// // frozenuserData.age = 4;
// // frozenuserData.country = "spain";
// // console.log(frozenuserData);

// //spread operator is adds and modify objects

// let newFrozenData = {
//   ...userData,
//   address: "ebubu",
//   wallet: "Broke",
// };
// console.log(newFrozenData);

// //range
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// //type of intergal
// const integer = 42;
// const floatingpoint = 3.14;
// console.log(typeof integer);
// console.log(typeof floatingpoint);

// let integer1 = 480;
// let integer2 = 100;

// let resullt = integer1 + integer2;
// // let result = integer1 * integer2;
// console.log(resullt);

//loops
// for (let i = 0; i < 5; i + 2) {
//   console.log("itreation number" + i);
// }

//loops
// let fruits = ["apple", "banana", "orange"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//while loops
// let i = 0;
// while (i < 5) {
//   console.log("itreation number" + 1);
//   i++;
// }

//looping out until a condition is meet

// let sum = 0;
// let number = 10;

// while (number <= 10) {
//   sum += number;
//   number++;
// }
// console.log("sum of number from 1 to 10 is: " + sum);

//do while condition
// let i = 0;
// do {
//   console.log("iteration number" + 1);
//   i++;
// } while (i < 5);

//for in loops
// let ada = { name: "john", age: 30, city: "Ebubu" };
// for (let key in person) {
//   console.log(key + ";" + person[key]);
// }

//for in loops
// let fruits = ["apple", "banana", "orange"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }

///for in irratable
// let text = "hello";
// for (let char of text) {
//   console.log(char);
// }

//break
// for (let i = 0; i < 5; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log(i);
// }

// function add(a, b) {
//   return a + b;
// }
// let sum = add(15, 35);
// console.log(sum);

// const tate = add(5, 7);
// console.log(tate);
// const word = (name, age, state) =>
//   `${name} is ${age} years old and he is from ${state}`;
// const sentence = word("john", 11, "ondo");
// console.log(sentence);

//closure
//validate

// const email = "harvox@gmail.com";
// let validateEmail = (email) => {
//   let emailSplit = email.split("@");
//   console.log(emailSplit);
//   let emailInclude = email.includes("@");
//   console.log(emailInclude);
//   let emailLength = email.emailLength;
//   if (emailSplit.Length < 2) {
//     console.log("invalid email.....................");
//   } else if (emailInclude == false) {
//     console.log("invalid email.....................does not include @");
//   } else console.log("Email validated sucessfullyl");
// };
// validateEmail(email);

///withdraw exprement
// let userData = {
//   name: "victory",
//   Gender: "f",
//   Wallet: "10000",
//   canWithdraw: true,
//   age: 19,
// };
//function to allow withdraw
// let withdrawMoney = (user, amount) => {
//check foor age
//   if (user.age < 18) {
//     console.log("you are underage");
//   } else if (user.canWithdraw == false) {
//     console.log("you dont have access to withdraw");
//   } else if (user.Wallet < amount) {
//     console.log("low wallet balance");
//   } else {
//     let newUserData = { ...user, Wallet: user.wallet - amount };
//     console.log(newUserData);
//   }
// };
// withdrawMoney(userData, 10000);

/// student in a class  new topic
// let students = [
//   { names: "john", age: "20", Gender: "male", Wallet: 10000 },
//   { names: "james", age: "20", Gender: "male", Wallet: 60000 },
//   { names: "ada", age: "20", Gender: "male", Wallet: 20000 },
//   { names: "micheal", age: "50", Gender: "female", Wallet: 50000 },
//   { names: "na you sabi", age: "10", Gender: "female", Wallet: 80000 },
// ];

// let studentBursary = (students, bursary) => {
//   students.map((element) => {
//     console.log(
//       `${element.names} is ${element.age}years old and has a new wallet of ${
//         element.Wallet + parseInt(bursary)
//       }`
//     );
//   });
// };
// studentBursary(students, 2700);

//login
// let studentbd = [
//   {
//     password: "john@hju",
//     usernames: "johnh",
//     age: "20",
//     Gender: "male",
//     Wallet: 10000,
//   },
//   {
//     password: "jameserf",
//     usernames: "james",
//     age: "20",
//     Gender: "male",
//     Wallet: 60000,
//   },
//   {
//     password: "ada1525",
//     usernames: "ada",
//     age: "20",
//     Gender: "male",
//     Wallet: 20000,
//   },
//   {
//     password: "micheal52",
//     usernames: "micheal",
//     age: "50",
//     Gender: "female",
//     Wallet: 50000,
//   },
//   {
//     password: "na you @sabi",
//     usernames: "na you sabi",
//     age: "10",
//     Gender: "female",
//     Wallet: 80000,
//   },
// ];
// let userToLogin = { usernames: "micheal", password: "micheal52" };
// function LoginUser(db, user) {
//   //validating data
//   if (user.usernames.length < 3) {
//     console.log("enter a valid username");
//   } else if (user.password < 1) {
//     console.log("enter a valid password");
//   } else {
//     //check for username
//     let filter = db.filter(
//       (element) =>
//         element.usernames == user.usernames && element.password == user.password
//     );
//     if (filter.length < 1) {
//       console.log("invalid user details");
//     } else {
//       console.log("user logged in sucessfully", filter[0]);
//     }
//   }
// }

// LoginUser(studentbd, userToLogin);

// //project
// let username = "ononugbo";
// let password = 782525566;

// if (username == "ononugbo") {
//   if (password == 782525566) console.log("you have sucessfully loged in ");
//   else {
//     console.log("incorrect usrename");
//   }
// } else {
//   console.log("incorect password");
// }

// console.log("incoorre");

newUser = [];
let user = {
  username: "ifeanyi",
  age: 19,
  gender: "male",
};
let popuLateUsers = () => {
  if (user.username !== "" && user.age !== "" && user.gender !== "") {
    newUser.push(user);
    console.log(newUser);
    console.log("user signed up successfully");
  } else {
    console.log("empty details");
  }
};

popuLateUsers(user, newUser);
