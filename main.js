i =Math.floor(Math.random()*100)+ 1;
//generate number between 1 and 100

var num = i%2;//gets the modulus and stores the result in j
if (i==0)//checks to see if modulus is equal to zero
	console.log(" is even");
else
	console.log(" Odd");


 for(count=1;count <= 10;count++) 
 {
 	let num = prompt("please enter a number now:");
 
 if (num>1)
 	console.log("Number is higher, make another guess");
 else if (num<1)
 	console.log("Number is Lower,try again");
 else if (num==1)
 	console.log("Great you win")
else
	console.log("Sorry You lose")
}

