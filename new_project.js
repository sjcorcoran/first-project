console.log("MY favorite candy is made of cheese")
var name = "Bruce";
if (name !="Bruce") {
    console.log("what is your name loser?")
}
else {
    console.log("Hello Bruce"); 
}
var num1 =10;
if(num1 ==20){
    console.log ("num is 20 yo")
}
else{
    console.log("adding 5")
    num1 = num1+5;
}
if (num1 ==15){
    console.log("adding another 5")
    num1= num1+5;
    console.log(num1)
}
else if (num1 ==20){
    console.log("now it is 20 yo");
}
num2 = 10;
if(num2 % 2 ==0) {
    console.log("divisable by 2");
    num2=num2*3;
}
if(num2 % 3 ==0){
    console.log("divisable by 3");
    num2=num2/2;
    console.log(num2);
}
else if(num2 % 5 ==0){
    console.log("Divisable by 5");
    num2=num2*7
}
if(num2 % 7 == 0){
    console.log(" divisable by 7");
    num2=num2-10
}
else{
    console.log("almsost there going nowhere!");
    num2=num2/2
}
console.log(num2);
