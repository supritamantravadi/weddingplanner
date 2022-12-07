var numGuests = prompt ("How many guests do you want to have?");
var numTables = prompt ("How many tables do you want?");
var a = ((numGuests / numTables) + 1); 
var b = Math.floor(a);
var c = (numTables - 1);
var d = (numGuests - (b*c));
alert("Your " + numGuests + " guests will be seated as follows: " + c + " tables of " + b + " , and 1 table of " + d + ".");  