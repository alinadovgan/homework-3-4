//1
let user = {};
user.name = "Alex";
user.lastname = "Shevcenko";
user.name ="Anna";
let userLastName = user.lastname;
delete user.name;

//2
const myFavouriteSongs = {
    Song1:{
        name: "Shadow",
        singer: "Maceo Plex",
        year: 2018
    },

    Song2:{
        name: "Let it Happen",
        singer: "Tame Impala",
        year: 2018
    },

    Song3:{
        name: "I was made for Lovin You",
        singer: "Kiss",
        year: 1987
    },

    Song4:{
        name: "This girl",
        singer: "Kungs",
        year: 2016
    },

    Song5:{
        name: "Hit Em Up",
        singer: "2Pac",
        year: 2010
    },

    Song6:{
        name: "sunny",
        singer: "Boney M",
        year: 1990
    },

    Song7:{
        name: "Sugar",
        singer: " Robin",
        year: 2014
    },

    Song8:{
        name: "Without me",
        singer: "Eminem",
        year: 2008
    },

    Song9:{
        name: "The Hills",
        singer: "The Weekand",
        year: 2019
    },

    Song10:{
        name: "Godzilla",
        singer: "Eminem",
        year: 2020
    }


};

const myFavouriteSongsYears = [];
for(let key in myFavouriteSongs){
myFavouriteSongsYears.push(myFavouriteSongs[key].year);}

if (myFavouriteSongsYears.includes(2001)){
    console.log("2001");
}

//3
let obj ={q:2,w:{e:3}};
let obj1 = Object.assign({}, obj);
console.log(obj1);

const obj3 = {0: "t", 1: "k", 2:"y"};
console.log(Object.keys(obj3));



