const accountId=12345;
console.log(accountId);

// accountId=2345;  cant be changed bcz it is const
console.log(accountId);


let accountEmail="pooja@gmail.com";
var accountPass="1234"
accountCity="Pune"   //this is a bad practice


// to print all in one go use connsole.table
console.table([accountId,accountPass,accountEmail,accountCity]); 

// do not use var while declaring a variable bcz it has scope issues it
// changes the value of same name to different files also

