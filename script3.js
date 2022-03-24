//1
let arr = ["my", "name", "Alina"];
arr.splice (1,1);
alert (arr); 

let arr1 =["im","16"]
arr.splice(1,0, "sunny" , "day")
alert (arr); //метод splice

let arr2 = ["J", "A", "V", "A"];
alert ( arr2.slice(1,2) ); //(copy from 1 to 2) метод slice;

let arr3 = ["1", "2", "3"]
alert(arr3.concat([3,4]));//метод contact

arr4.array.forEach(element => {[1, 2, 3 ,3 ,4]});// метод forEacch

let arr5 = [0,1,false];
alert(arr5.indexOf(0) );
alert(arr5.indexOf(false));//index.Of поиск в масиве 

let students = [
    {ph: 063, name:"Olya"},
    {ph: 064, name:"Linda"}]
    
let student = students.find(item => item.ph==063);
alert(student.name); //item - элемент, index, array - массив 

let students1 = [
    {ph: 063, name:"Olya"},
    {ph: 064, name:"Linda"}]
    
    let somestudent1 = students.filter(item => item.ph<064);
    alert(somestudent.name); // filter 

let length = ["Alina", "Mia", "Adel"].map(item => item.length);
alert(length); //метод length 

function compareN(x,y){
if (x>y) return 1;
if (x==y) return 0;
if (a<b) return -1;
}
let arr7 = [ 7, 8, 98];
arr7.sort(compareN);
alert(arr7);

let arr8 = [9,8,7,6,5];
arr.reverse();

alert (arr); 

let lastNames = "pavlikov, mikukurenko, vorobev"
let arr9 = lastNames.split(",");

let array = [2,4,6,8];
let result = array.reduce ((sum,current) => sum + current, 0);
alert(result);



//2
let fruits = ["apple", "orange"];
fruits.push("Banana");
fruits.splice(1, 1, "Mango");
shifted = fruits.shift(0);
fruits.unshift ("Pear", "Melon");

//3
let fruit = ['o', 'f', 'a', 'n', 'g' ];
fruit.splice(1,1, "r");
fruit.push("e");
fruit.join("", fruit);






