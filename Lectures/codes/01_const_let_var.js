const accountId= 1544566//can not be changed 

let accountEmail = "aditya@google.com"//can be changed and has no scope problem

var accountPassword="1245"//can be changed but has scope problem

accountCity="kanpur"

let accountState;

// accountId=2 //not allowed

accountEmail="adii@google.com"
accountPassword="1234"
accountCity="noida"

console.log(accountId);

/*prefer not to use var
because of issue in block scope and functional scope */

console.table([accountEmail, accountId, accountPassword, accountState, accountCity])//prints all variables in tabular form