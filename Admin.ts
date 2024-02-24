//Excercise1 
//Installation Completted



//Excericse 2
//Personal Message

//let personName: string= "Eric";
//console.log(`Hellow ${personName},would you like to learn some phyton today?`);


//Excerise 3
//Name Cases

//Lower Case

//let personName: string= "Sajid Ali Rajper";
//console.log("lowercase:", personName.toLowerCase());

//Upper Case

//console.log("uppercase:", personName.toUpperCase());

//Title Case
//console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));



//Excerise 4
//Famous Quote
//let quote: string= "A person who never made a mistake never tried any thing new";
//let author: string= "Albert Einstein";
//console.log(`${author} once said, "${quote}"`);


//Excerise 5
//Famous Quote2
//let quote: string= "A person who never made a mistake never tried anythimg new";
//let famous_person: string= "Albert Einstein";
//let message=`${famous_person} once said, ${quote}`;
//console.log(message);


//Excerise 6
//Stripping Names
//let personNamee : string = "\n\t SAJID ALI RAJPER \n\t";
//console.log(personNamee);
//let stripped : string = personNamee.trim();
//console.log(stripped);


//Excerise 7 and 8
//Number Eight
//console.log(5 + 3);
//console.log(4 * 2);
//console.log(11 - 3);
//console.log(16 / 2);


//Excerise 9
//Favorite Number
//let favoriteNumber: number= 5;
//console.log(`my favorite number is ${favoriteNumber}`);


//Excerise 10
//Adding Comment
//excerise 10
//Dated 22-2-2024
//my name is sajid
//this program will run simpe code like hellow world
//console.log(`hellow world simple program`);

//excerise 10
//Dated 22-2-2024
//my name is sajid
//this program will multiplicaion
//console.log(10 * 3);


//Excerise 11
//Names
//let members: string[] =['Ahmed','Babar','Atif','Majid'];
//for(let i=0; i<members.length; i++){
//console.log(members[i]);
//}


//Excerise 12
//Grttings
//let members: string[] =['Ahmed','Babar','Atif','Majid'];
//let message: string ='Today is my birthday::';
//for(let i=0; i<members.length; i++){
//console.log(message + members[i]);
//}


//Excerise 13
//your own array
//let transport: string[]=['Honda civic','Toyota','Rivo','Bus','Bike'];
//for(let i=0; i<transport.length; i++){
 //   console.log('Would you like to own::' + transport[i]);
  //  }


//Excerise 14
//Guist List
//let Guest_list: string[] =['::Awais','::Atif','::Sajid','::Majid'];
//for(let i=0; i<Guest_list.length; i++){
  //  console.log('Respected Sir/Madam' + Guest_list[i] +  '.\n We Invite you on Dinner Tomarrow.\n\n Thankyou')
//}



//Excerise 15
//Changeing Guest list
//let Guest_list: string[] =['::Awais','::Atif','::Sajid','::Majid'];
//for(let i=0; i<Guest_list.length; i++){
  //  console.log('Respected Sir/Madam' + Guest_list[i] +  '.\n We Invite you on Dinner Tomarrow.\n\n Thankyou')
//}
//let not_present: string = 'Sajid';
//let new_guest: string = '::Wassem';
//Guest_list[2] = new_guest;
//for(let i=0; i<Guest_list.length; i++){
  //  console.log('Respected Sir/Madam' + Guest_list[i] +  '.\n We Invite you on Dinner Tomarrow.\n\n Thankyou')
///}
//console.log(`Mr. ${not_present} will not comming Tomarrow dinner`);



//Excerise 16
//More Guest
//let Guest_list: string[] =['::Awais','::Atif','::Sajid','::Majid'];
//let not_present: string = 'Sajid';
//let new_guest: string = '::Wassem';
//Guest_list[2] = new_guest;
//for(let i=0; i<Guest_list.length; i++){
  //  console.log('Respected Sir/Madam' + Guest_list[i] +  '.\n We Invite you on Dinner Tomarrow.\n\n Thankyou')
//}
//console.log(`Mr. ${not_present} will not comming Tomarrow dinner`);
//Guest_list.unshift('::Rizwan','::Faraz','::Amir');
//for(let i=0; i<Guest_list.length; i++){
  //  console.log('Respected Sir/Madam' + Guest_list[i] +  '.\n We Invite you on Dinner Tomarrow.  we found a big table so we decid a invite three more person in dinner\n\n Thankyou')
//}



//Excerise 17
//Shrinking Guest List
//let Guest_list: string[] =['::Awais','::Atif','::Sajid','::Majid'];
//let not_present: string = 'Sajid';
//let new_guest: string = '::Wassem';
//Guest_list[2] = new_guest;
//for(let i=0; i<Guest_list.length; i++){
  //  console.log('Respected Sir/Madam' + Guest_list[i] +  '.\n We Invite you on Dinner Tomarrow.\n\n Thankyou')
//}
//console.log(`Mr. ${not_present} will not comming Tomarrow dinner`);
//Guest_list.unshift('::Rizwan','::Faraz','::Amir');
//for(let i=0; i<Guest_list.length; i++){
  //  console.log('Respected Sir/Madam' + Guest_list[i] +  '.\n We Invite you on Dinner Tomarrow.  we found a big table so we decid a invite three more person in dinner\n\n Thankyou')
//}
//console.log('.\n unfortunately we can not arrange a big table. only two person aloow');
//while(Guest_list.length>2){
//let remove_Guest = Guest_list.pop();
//console.log(`Sorry Sir/Madam.${remove_Guest},you are not invited for dinner`);
//}
//for(let i=0; i<Guest_list.length; i++){
  //    console.log('Respected Sir/Madam' + Guest_list[i] +  '.\n you are still invited on tomarrow dinner Thankyou\n')
//}Guest_list.splice(0,2)
//console.log(Guest_list)


//Excerise 18
//Seeing the world
//let placeToVisist: string[] = ['Pakistan','Japan','China','Tokyo','America'];
//console.log("orginal orger:", placeToVisist);
//console.log("Alphabatical orger:", [...placeToVisist].sort());
//console.log("orginal orger after sorting", placeToVisist);
//console.log("Reverse Alphabatical orger:", [...placeToVisist].sort().reverse());
//console.log("orginal orger after reverse sorting", placeToVisist);
//placeToVisist.sort();
//console.log("Reversed order", placeToVisist);
//placeToVisist.reverse();
//console.log("Back to origional order", placeToVisist);
//placeToVisist.sort();
//console.log("Stored in Alphabatical order", placeToVisist);
//placeToVisist.sort((a ,b) => b.localeCompare(a));
//console.log("Stored in reverse Alphabatical order", placeToVisist);



//Excerise 19
//Dinner Guest
//let invitations: string[] = ['Faraz','Rizwan'];
//let count_invitatons: number = invitations.length;
//console.log(`${count_invitatons} , People will invited in the dinner`);



//Excerise 20
//Thin of somethingin array
//let Country: string[] = ['Pakistan','india','Japan','China','Afghanistan'];
//console.log("List of Country::");
//console.log(Country);


//Excerise 21
//Typescript Object
//let person: {name: string, fname: string, age: number} = {name: "Sajid", fname: "Ghulam Rasool", age: 18};
//console.log(person);



//Excerise 22
//International array
//const days : string [] = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//console.log(days{7});
//console.log(days[6])



//Excerise 23
//Conditional Test
//let car = "subaru";
//console.log("is car == 'subaru'? predict true");

//console.log(car == 'subaru');
//console.log("is car != 'Honda City'? predict true");
//console.log(car !='Honda City');

//console.log("is car == 'Subaru'? predict false");
//console.log(car == 'Subaru');

//console.log("is car == 'SUBARU'? predict false");
//console.log(car == 'SUBARU');

//console.log("is car.length == 6? predict true");
//console.log(car.length == 6);

//console.log("is car.length == 8? predict true");
//console.log(car.length == 8);

//console.log("is 10 > 15 ? predict false");
//console.log(10 > 15);

//console.log("is 25 < 50? predict true");
//console.log(25 > 50);

//console.log("is 2 <= 50? predict true");
//console.log(2 <= 50);

//console.log("is car.length == 8? predict false");
//console.log(car.length == 8);



//Excerise 24
//More Conditional Tests
//let name_1: string= 'Sajid';
//let name_2: string= 'Sajid Ali';
//let name_3: string= 'Sajid Ali Rajper';

//if(name_1 == name_3){
 //   console.log("Name are equal")
//else{
 //   console.log("Name are not equal")
//}

//if(name_1 !== name_2){
  // console.log("Name are equal")
//}

//if(name_1 !== name_3){
    // console.log("Name are equal")
  //}
  

  //let price_1 : number= 50;
  //let price_2 : number= 80;
  
  //if (price_1 == 50){
    //  console.log("Eligible for purchase")
  //}
  
  
  //if(price_1 != 80){
     // console.log("Not eligible for purchase")
  //}
  
  //if(price_1 <= price_2){ //greater
     // console.log("Eleigible")
  //}
  
  //if(price_1 >= price_2){ //less
    //  console.log("Not Eleigible")
  //}
  
  //if(price_1 == 50 && price_2 == 80){ //equal
      // console.log("person is eleigble for purchase")
    //}
  
  
    //if(price_1 == 50 || price_2 != 80){ //And
      // console.log("person is not eleigble for purchase")
    //}
  

    
//Excerise 25
//Alien Colors
//let alien_color : string = "green";

//if (alien_color == "green")
//console.log("I am agree");

//let alien_color : string = "Red";

//if (alien_color == "Blue")
//console.log("no output");


//Excerise 26
//Alien color2
//let alien_color : string = "green";

//if (alien_color == "green"){
//console.log("Player just eraned 5 points for shoting the alien");
//}
//else{
  //  console.log("player just earned 10 points")
//}

//let alien_color : string = "Red";

//if (alien_color == "green"){
//console.log("Player just eraned 5 points for shoting the alien");
//}
//else{
  //  console.log("player just earned 10 points")
//}



//Excerise 27
//Alien color3
//let alien_color : string = "red";

//if (alien_color == "green"){
//console.log("5 points")
//}else if(alien_color=="yellow"){
 //  console.log("10 points")
//}else{
  //  console.log("15 points")
//}


//Excerise 28
//Stages of life
//let age: number= 18;
//if(age < 2){
  //  console.log("you are a boy")
//}else if(age < 4){
  //  console.log("you are a toddler")
//}else if(age < 13){
  //  console.log("you are a Kid")
//}else if(age < 20){
  //  console.log("you are a teenager")
//}else if(age < 65){
   // console.log("you are a adult")
//}else{
 //   console.log("you are a older")
//}


//Excerise 29
//Favourite Fruit
//let favorite_fruits: string[] = ["orange","apple","mango","bannas","berry"];
//if (favorite_fruits.includes("orange")){
  //  console.log("orange")
//}
//if(favorite_fruits.includes("peach")){
  //  console.log("you really like bannas")
//}
//if (favorite_fruits.includes("apple")){
  //  console.log("apple")
//}
//if (favorite_fruits.includes("berry")){
  //  console.log("you really like berry")
//}
//if (favorite_fruits.includes("mango")){
  //  console.log("mango")
//}


//Excerise 30
//Hellow Admin
//let users: string[] = ["majid","Eric","Sajid","Babar","Admin"]
//for(let user of users)
//{if(user === "Admin"){
  //  console.log("Hellow Admin would you like to see a status report?")
//}else{
  //  console.log(`Hellow ${user} thankyou for loging in again`)
//}

//}



//Excerise 31
//NO User
//let users: string[] = ["majid","Eric","Sajid","Babar","Admin"]
//if(users.length === 0){
  //  console.log("we need to find some users!")
//}else{
  //  for(let user of users){
      //  if(user === "Admin"){
       //     console.log("Hellow Admin would you like see a status report?")
    //    }else{
      //      console.log(`Hellow ${user} thankyou for loging in again`)
    //  }
   //}
//}

//users = []
//if(users.length === 0){
  //  console.log("we need to find some new users")
//}


//Excerise 32
//Checking User Names
//let current_users: string[] =["ALi","Awais","Ahmed","Atif"];
//let new_users: string[ ] =["Admin","Eric","Sajid","Babar"];

//let current_users_lower: string[] = current_users.map(user => user.toLowerCase())

//for(let new_user of new_users){
  //  if(current_users_lower.includes (new_user.toLowerCase())){
    //    console.log(`Sorry ${new_user}, that name is taken`)
      //  }else{
        //    console.log(`yes ${new_user}, is still avialble in list`)
    //}
//}



//Excerise 33
//Ordinal Number
//let numbers: number[] = [1,2,3,4,5,6,7,8,9]
//for (let number of numbers){
  //  if(number === 1){
    //    console.log(`${number}st`)//1st
    //} else if(number === 2){
    //console.log(`${number}nd`)//2nd
    //}
    //else if(number === 3){
      //  console.log(`${number}rd`)//3rd
    //}
     //else if(number === 4){
       // console.log(`${number}th`)//4th
   // }
    //else if(number === 5){
      //  console.log(`${number}th`)//5th
    //}
    //else if(number === 6){
      //  console.log(`${number}th`)//6th
    //}
    //else if(number === 7){
      //  console.log(`${number}th`)//7th
    //}
    //else if(number === 8){
      //  console.log(`${number}th`)//8th
    //}
    //else if(number === 9){
      //  console.log(`${number}th`)//9th
    //}
    //}


    //Excerise 34
    //pizza 
    //let favorite_pizza: string[] = ["pepperoni","veg","chiken"]

//for(let pizza of favorite_pizza){
  //  console.log(pizza)
//}
//console.log("\n")

//for(let pizza of favorite_pizza){
  //  console.log(`I really like ${pizza} Pizza`)
//}

//console.log("I really love Pizza!")


//Excerise 35
//Animals
//let animals: string[] = ["cat","dog","lion","monkey"]
//for(let animal of animals){
 //   console.log(animal)
//}
//console.log("\n")

//for(let animal of animals){
 //   console.log(`A ${animal} has a tail`)
//}

//console.log("\n")

//console.log("\n All of these are great pets!, but i like cats more")


//Excerise 36
//T-Shirt
//function makeShirt (size: string, text: string) : void {
  //  console.log(`you order ${size} shirt that says ${text}`)
//}

//makeShirt(`large`,`"I love typescript"`)
//makeShirt(`Medium`,`"I need abig shirt"`)



//Excerise 37
//Large Shirt
//function makeShirt (size: string= "large", text: string= "I love typescript") : void {
  //  console.log(`you order ${size} shirt that says ${text}`)
//}

//makeShirt()
//makeShirt(`medium`)
//makeShirt(`small`,`"i need a big shirt to wear"`)



//Excerise 38
//Cities
//function describecity(city: string, country : string="pakistan"): void{
  //  console.log(`${city} is in ${country}`)
//}

//describecity('Karachi')//Default sentence
//describecity('France','europe')
//describecity('Newyork','America')


//Excerise 39
//City Names
//function citycountry(city: string, country: string): string  {
  //  return `${city}, ${country}`
     
 //}
 
 //let C1 = citycountry(`lahore`,`pakistan`)
 //let C2 = citycountry(`tokyo`,`japan`)
 //let C3 = citycountry(`Newyork`,`USA`)
 
 //console.log(C1)
 //console.log(C2)
 //console.log(C3)

 
 //Excerise 40
 //Album
 //function makealbum (artist: string, tittle: string): {artist: string; tittle: string}; {
  //  const dictionaries = {
   //     artist: artist.charAt(0).toupperCase() + artist.slice(1)
     //   tittle: tittle.charAt(0).toUpperCase() + tittle.slice(1)

    //};
    //return dictionaries;
//}

//let album = makealbum("Ali","light")
//console.log(album)


 //album = makealbum("Sajid","Red Wave")
//console.log(album)


 //album = makealbum("Majid","Rainbow")
//console.log(album)


//Excerise 41
//Magicians
//function show_magicians(show_magicians: string[]): void {

  //  for(const magician of show_magicians){
    //    console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    //}
    //}
    
    //const magician: string []=["babar","sajid","majid"]
    //show_magicians(magician)


    //Excerise 42
    //Great Magicians
    //function make_great(magicians: string[]): void{
      //  for(let i=0 ; i< magicians.length; i++){
       // magicians[i] = magicians[i] + "the great"
        //}
        //}
        
        //const magicians2: string[]= ["Babar ","Sajid ","majid "]
        //make_great(magicians2)
       // console.log(magicians2)



        //Excerise 43
        //Unchanged Magicians
        //function make_great2(magicians: string[]): string[] {
          //  const greatmagicians: string[] = [];
            //for(let i = 0; i < magicians.length; i++){
              // greatmagicians.push(magicians[i] + 'The Great');
            //}
            //return greatmagicians
           //}
            //const magicians3: string[] = ["Babar","Sajid","Majid"];
            //const greatmagicians2: string[] = make_great2(magicians3);
           
            //console.log(magicians3);
            //console.log (greatmagicians2);


            //Excerise 44
            //Sandwiches
            //function sandwich(...items: string[]): void{
              //  console.log("sandwich order:")
                //for(let i=0; i < items.length; i++){
                  //  console.log(`${items[i]}`)
                //}
            //}
            //console.log("Enjoy your sandwich sajid ali")
            
            //sandwich("capcicum","tomato","chiken")
           // sandwich("beef","cheese")
            //sandwich("garlic chiken","mayo sauce")



            //Excerise 45
            //Cars
            //type car {
              //  manufcaturs: string
                //modle: string
                //[key: string]: any;
            //}
            //function Createcar(manufacturs: string, modle: string, optional: Record<string, any>): car {
             //return{
               // manufcaturs,
                //modle,
                //...optional
             //}
            //}
            
            //const mycar: car = Createcar ("Toyota","Corolla", {color:"silver", year: "2024"})
            //console.log(mycar)