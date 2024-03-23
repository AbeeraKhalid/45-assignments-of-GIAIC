// Task 2
let personName1: String="Eric";
console.log(`Hello ${personName1},would you like to learn some python today?`);
// Task 3
let myName: string="abeera khalid";


// my name in lower case:
console.log("lowercase:",myName. toLowerCase()); 


// my name in upper case:
console.log("uppercase:",myName.toUpperCase());


// my name in title case:
console.log("title case:",myName.replace(/\b\w/g,c=>c.toUpperCase()));

// Task 4
let authorname: string="Mark Twain";
let quote: string="To Succeed in life, you need 2 things:Ignorance and Confidence.";
console.log(`${authorname} once said,"${quote}" `);

// Task 5
let famous_person: string=" Mark Twain";
let quotes: string=
"GOOD decisions comes from experience.Experience comes from making bad decision.";
let message: string=`${famous_person} once said,"${quotes}"`;
console.log(message); 

// Task 6
let personName: string="\n\tABEERA-M-KHALID\n\t";
console.log("Original:",personName);
console.log("Strippted:",personName.trim());

// TASK 7 AND TASK 8
// ADDITION:
console.log(5+3);

// SUBTRACTION:
console.log(10-2);

// MULTIPLICATION:
console.log(2*4);

// DIVISION:
console.log(16/2);

// Task 9
let favouritNumber: number=2;
console.log(`My favourite No is ${favouritNumber}.`);

// // Task 10
// author name [Abeera Khalid]
// date:19/2/2024

let favouriteNumber: number=2;
console.log(`My favourite No is ${favouriteNumber}.`);

// Task 11 
let names: string[]=["muskan","urooj","hooria","bisma"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[0]);

// TASK 12:
let friendnames : string[]=["muskan","urooj","hooria","bisma"];
let messages : string="Do you like to take one cup of coffee?";

console.log(friendnames[0]+ " " +messages);
console.log(friendnames[1]+ " " +messages);
console.log(friendnames[2]+ " " +messages);
console.log(friendnames[3]+ " " +messages);

// task 13
let transportations: string[] =["Corolla","Swift","Toyota","sport bike","Mehran"];
transportations.map((items)=>console.log(`I would like to own a ${items}`));


// TASK 14
// let guestarray: string[]=["Aroosha","Urooj","Muskan"];
// guestarray.map((items) => (console.log(`Dear ${items}, You are invited to the dinner.`)));

// TASK 15
let guestarray2: string[]=["Abeera","Aroosha","Urooj","Muskan"];

let CannotAttend: string ="Abeera";
// console.log(CannotAttend+"" +"can not attend the dinner.");
let newguest: string="Rukhsar";
guestarray2[guestarray2.indexOf(CannotAttend)]=newguest;
// console.log(guestarray);
guestarray2.map((items) => (console.log(`Dear ${items}, You are invited to the dinner.`)));

// TASK 16:

let guestarray: string[]=["Abeera","Aroosha","Urooj","Muskan"];
// beginning guest
let beginguest: string="Rukhsar";
guestarray.unshift(beginguest);
console.log(guestarray);
// add middle guest 
let middleguest: string="Saniya";
let middleindex= guestarray.length/2
guestarray.splice(middleindex,0,middleguest);
console.log(guestarray);
let endguest="Umair";

guestarray.push(endguest);
console.log(guestarray);
guestarray.map((items)=>(console.log(`Dear ${items},You are invited in my bigger 
table dinner`)));

// TASK 17
let guests: string[]=["Aroosha","Urooj","Muskan","Saniya","Rukhsar"];
// console.log("Due to limited space,only two people can be invited for a dinner.");
// removing guests untill only 2 remains left
//  while (guests.length > 2) {
//      const removedguests =guests.pop();
//      console.log(`Sorry,${removedguests},you are no longer invited for dinner.`);
//  }
// printing invitation to the remaining 2 guests
// let guests: string[]=["Aroosha","Urooj"];
// guests.forEach((guest)=>{
//     console.log(`Dear,${guest},you are still invited to dinner.`);
// });
// removing the last 2 names of the list:
// 
//   guests.pop();
//      guests.pop();
// // //   printing the final lists to inform its empty
//   console.log("final guests list:", guests);

  //   TASK 19
let invitations: string[]=["Saniya","Rukhsar"];
let count_invitations: number =invitations.length;
console.log(`${count_invitations},people will come to the dinner`);

// TASK 18
let placestovisit: string[]=["Pakistan","Palestine","China","Egypt","Saudi Arabia"];
console.log("Original order:", placestovisit);
console.log("Alphabetical order:",[...placestovisit].sort());

console.log("original order after sorting:",placestovisit);

console.log("Reverse Alphabetical order:",[...placestovisit].sort().reverse());

console.log("Original order after reverse sorting:",placestovisit);

placestovisit.reverse();
console.log("reversed order:",placestovisit);

placestovisit.reverse();
console.log("back to the original order:",placestovisit);
console.log("sorted in alphabetical order:",placestovisit);

// TASK 20
let cities: string[]=["Karachi","Lahore","Islamabad","Peshawar","Multan","Quetta"];
console.log("LISTS OF CITIES OF PAKISTAN:",cities);

// TASK 21
let person: {name: string, gender: string,age: number}={name:"Abeera",gender: "female",age:21};
console.log(person);
// TASK 22
const months : string[]=["january","february","march","april","may","june","july",
"august","september","october","november","december"];
// console.log(months[10}); 
console.log(months);


// TASK 23
let car="subaru";
console.log("is car=='subaru',predict True");
console.log(car=='subaru');

console.log("is car!='swift'predict true");
console.log(car!='swift');

console.log("is car.length='6'predict true");
console.log(car.length==6);

console.log("is car!='Subaru',predict True");
console.log(car!='Subaru');

console.log("is car.length!='10'predict true");
console.log(car.length!=10);

console.log("is car=='SUBARU',predict false");
console.log(car=='SUBARU');

console.log("is car.length=='10'predict false");
console.log(car.length==10);

console.log("is car=='swift'predict false");
console.log(car=='swift');

console.log("is car.length>='8'predict false");
console.log(car.length>=8);

console.log("is car!='subaru'predict false");
console.log(car!='subaru');

// TASK 24 part 1
// let Name1: string= "abeera";
// let Name2: string="Abeera-M-Khalid";
// let Name3:string="Abeera-M-Khalid";
// if (Name1!=Name2){
    
//     console.log("Names are not equal")
//     console.log(Name1!=Name2)
// }
// else{
    
//     console.log("Names are equal")
//     console.log(Name1==Name2)
// }
// if (Name2==Name3){
    
//     console.log("Names are equal")
//     console.log(Name2==Name3)
  
// }
// else{
    
//     console.log("Names are not equal")
    
// }
// if (Name2.length==Name3.length){
    
//     console.log("Names are equal")
//     console.log(Name2.length==Name3.length)
  
// }
// else{
    
//     console.log("Names are not equal")
    // } 
// part 2 text using the lower case function
// let Name1: string= "abeera";
// let Name2: string="ABEERA-M-KHALID";
// let Name3:string="abeera";
// console.log(Name1.toLowerCase==Name2.toLowerCase)
// console.log("both names are not in lower case");
// if (Name1!=Name2){
    
//     console.log("both names are not  in lower case");
//     console.log(Name1!=Name2);
  
// }
// else{
    
//     console.log("both names are in lower case");
//     console.log(Name1==Name2)
// }
// if (Name1.length>Name3.length){
    
//     console.log("both names are not  in lower case");
//     console.log(Name1.length>Name3.length);
  
// }
// else{
    
//     console.log("both names are in lower case");
//     console.log(Name1.length>=Name3.length);
// }
// PART 3 NUMERICAL TEST:
let age1=15;
let age2=20;
// if (age1 >= age2){

//     console.log("They are younger");
// }
// else{
//     console.log("They are older");
//     console.log(age1<age2)

// }
// console.log(age1==age2,"both are equal:");
// console.log(age1<=age2,"They are older:");
// PART 4: OR AND || &&
// let applecolor="red";
// let mangocolor="yellow";
// let cherrycolor="purple"
// let bananacolor="yellow";
// if(applecolor == "red" && mangocolor=="yellow")//
// {
//     console.log("apple is red in color and mango is yellow in color");
// }
// if(cherrycolor=="purple" || bananacolor=="red")

// {
//     console.log("the color of cherry is purple and the color of banana is yellow color ")

// }PART 5 ITEMS IN ARRAY
let country:string[]=["pakistan","PALESTINE","SAUDIARABIA","EGYPT","MALAYSIA"]
// if(country.includes("pakistan")){
//     console.log("Pakistan is in the list of country string");
// }
if(!country.includes ("india")){
    console.log("india is not in the list of country string");
}

// TASK 25 
// let alien_color:string="green";
// if(alien_color=="green"){
//     console.log("THe player just earned 5 points");

// }
// part 2
// let alien_color: string="red";

//     if(alien_color=="green"){
//         console.log("the version that fail will have no output");
//     }
    

// TASK 26
    // let alien_color:string="green";
    // if(alien_color=="green"){
    //     console.log("THe player just earned 5 points");
    // }
    // else{
    //     console.log("The player just earned 10 points");

    // }
    // part2
    // let alien_color:string="red";
    // if(alien_color=="green"){
    //     console.log("THe player just earned 5 points for shooting the aliens");
    // }
    // else{
    //     console.log("The player just earned 10 points");

    // }
    // TASK 27:
//     let alien_color:string="green";
// if(alien_color=="green"){
//      console.log("THe player just earned 5 points");
// }
//  let alien_color:string="yellow";
//  if(alien_color=="yellow"){
//      console.log("THe player just earned 10 points");
//  }
let alien_color:string="red";

 
if(alien_color=="red"){
        console.log("THe player just earned 15 points");
       }

   //////  TASK 28:
let age:number=66;
if (age <2){
    console.log("The person is a baby");

}
else if(age < 4){
    console.log("The person is a toddler");

}
else if(age < 13){
    console.log("The person is a kid");

}
else if(age < 20){
    console.log("The person is a teenager");

}
else if(age < 65){
    console.log("The person is an adult");

}
else{
    console.log("The person is an older")
}
// // TASK 29
let favourite_fruits: string[]=["apple","orange","peach"]
if(favourite_fruits.includes("apple")){

    console.log("apple is my favourite fruit");
}
if(favourite_fruits.includes("pineapple")){
    console.log("you really like banana");
}
if(favourite_fruits.includes("orange")){
    console.log("orange is my favourite fruit");
}
if(favourite_fruits.includes("blueberry")){
    console.log("you really like banana");
}
if(favourite_fruits.includes("peach")){
    console.log("peach is my favourite fruit");
}

//    TASK 30
// let users: string[]=["admin","eric","ayesha","hania","umar"]
// for(let user of users){
//     if(user=="admin"){
//         console.log("Hello admin, Would you like to see a status report?");
//     }
//     else{
//         console.log(`Hello ${user} thank you for logging in again`);
//     }
// }
// TASK 31 no users add if test to ex 30 to make sure the list of users is not empty
// 1. if the list is empty, print the msg we need to find some users.2.removeall the
// of the users name from your array and make sure the correct message is printed.

let users: string[]=["admin","eric","ayesha","hania","umar"]
// if(users.length==5){
//          console.log(" We don't need to find more users");
//      }
users=[]
     if(users.length==0){
        console.log(" We need to find more users!");
    }  

// TASK 32
let current_users: string[]=["admin","Eric","Ayesha","hania","Umar"]
let new_users: string[]=["admin","Umama","Ubaid","hania","Usman"]
let current_users_lower: string[]= current_users.map(user => user.toLowerCase());
for (let new_user of new_users ){
    if(current_users_lower.includes(new_user.toLowerCase())){
        console.log(`Sorry${new_user} name is taken `);
    }
    else{
        console.log(`Yes ${new_user}is still available in the list`);
    }

}
// TASK 33
let numbers: number[]=[1,2,3,4,5,6,7,8,9]
for(let number of numbers){
    if(number===1)
    {
        console.log(`${number}st`);

    }
    else if(number===2){
        console.log(`${number}nd`);

    }
    else if(number===3){
        console.log(`${number}rd`);

    }
    // nichay wala aik hi dafa bhi use karsaktay hain else ki statement laga kar
    else if(number===4){
        console.log(`${number}th`);

    }
    else if(number===5){
        console.log(`${number}th`);

    }
    else if(number===6){
        console.log(`${number}th`);

    }
    else if(number===7){
        console.log(`${number}th`);

    }
    else if(number===8){
        console.log(`${number}th`);

    }
    else{
        
            console.log(`${number}th`);
    
        }
    }

    // TASK 34
let myfavourite_pizza:string[]=["veggie pizza","BBQ pizza","fajita",
"chicken malai boti pizza"]
for(let pizza of myfavourite_pizza){
    console.log(` ${pizza}`)

}
console.log("\n");
for(let pizza of myfavourite_pizza){
    console.log(`I really like ${pizza} pizza`)
}
console.log("\n");
console.log("How much you like pizaa?\n");

console.log("I really love all kinds of pizza");

// TASK 35
let animals:string[]=["parrot","cuckoo","humming birds","peacock"]
for(let animal of animals){
    console.log(`${animal}`)
}
console.log("\n");

for(let animal of animals){
    console.log(`${animal} has wings to fly`)
}
console.log("I really love all of these birds!");

// TASK 36
// function make_shirt(size: string, text:string):void{
//     console.log(`you order a ${size} shirt that print ${text}`)

// }
// make_shirt('large','"PAKISTAN ZINDABAD"')
// make_shirt('medium','"I love PAKISTAN"')
// make_shirt('small','"I love PAKISTAN"')


// TASK 37
function make_shirt(size: string='large', text:string='I love Typescript'):void{
  console.log(`you have order a ${size} shirt that say ${text}`)

}
// make_shirt();
// make_shirt('medium')
make_shirt('small','I want to become a successful programmer')


// TASK 38
// function describe_city(city:string,country:string='Pakistan'): void{
//     console.log(`${city} is in ${country}`)

// }
// describe_city('Karachi');
// describe_city('Makkah','SaudiArabia');
// describe_city('Islamabad');
// describe_city('London','UK');
// describe_city('Dubai','UAE');


// TASK 39

function city_country(city:string,country:string): string{
  return(`${city},${country}`)
}
let citycountry1=city_country('Peshawar','Pakistan');
let citycountry2=city_country('Balochistan','Pakistan');
let citycountry3=city_country('Makkah','SaudiArabia');
let citycountry4=city_country('Dubai','UAE');
console.log(citycountry1)
console.log(citycountry2)
console.log(citycountry3)
console.log(citycountry4)


// TASK 40
function make_Album(artist: string, title: string): { artist: string ; title: string}
{
    const dictionaries = {
        artist: artist.charAt(0) .toUpperCase() +artist.slice(1),
        title: title.charAt(0) .toUpperCase() +title.slice(1),
 };
return(dictionaries);
}
let Album= make_Album("umair","light");
console.log(Album)
Album= make_Album("muskan","redwave");
console.log(Album)

Album= make_Album("sana","ultrawave");
console.log(Album)
Album= make_Album("farah","thriller");
console.log(Album)


// TASK 41
// function show_magnicians(magnicians:string[]):void{
//     for(const magnician of magnicians){
//         console.log(magnician.charAt(0).toUpperCase()+magnician.slice(1));

//     }
// }
//     const magnician: string[]=["abeera","wafia","javeria"];
// show_magnicians(magnician)
// TASK 42

// function show_magnicians(magnicians:string[]):void{
//     for(const magnician of magnicians){
//         console.log(magnician.charAt(0).toUpperCase()+magnician.slice(1));

//     }
// }
// function make_great(magnicians:string[]):void{
//     for(let i=0; i < magnicians.length; i++){
//         magnicians[i]= magnicians[i]+ ' The great'
//     }

// }
// const magnicians2:string[]=["abeera","wafia","javeria"];
// make_great(magnicians2)

// show_magnicians(magnicians2)

//TASK 43

function show_magnicians(magnicians:string[]):void{
  for(const magnician of magnicians){
      console.log(magnician.charAt(0).toUpperCase()+magnician.slice(1));

  }
}
function make_great2(magnicians: string[]):string[]{
const greatMagnicians: string[]= [];
for(let i=0; i < magnicians.length; i++){
       greatMagnicians.push(magnicians[i]+ ' The great');
       }
       return greatMagnicians;


}
const magnicians3:string[]=["abeera","wafia","javeria"];
// //////////////
const greatMagnicians2: string[]= make_great2(magnicians3);
show_magnicians(magnicians3);
show_magnicians(greatMagnicians2);


// TASK 44

function sandwich(...items: string[]):void{
  console.log("Sandwiches order");
  for (let i= 0;i < items.length; i++){
      console.log(`- ${items [i]}`)
  }
}
console.log("Enjoy your delicious Sandwich")
sandwich('Chicken','Mayo','Garlic');
sandwich('BBQ','Beef','Egg');
sandwich('BBQChicken','Cheese','Zinger Club');
("\n")
console.log("Thank you!!!");

// TASK 45
type car={
  manufacture:string
  model:string
  model2:string
  [key:string]: any;
}
function CreationOfCar(manufacture:string,model:string,model2:string,optional:Record<string,any>):
car{
  return{
  manufacture,
  model,
  model2,

  ...optional

}
}
const Mycar:car=CreationOfCar("Khalid motors","swift","alto" ,{color:"blue",year:"2024"})
console.log(Mycar)