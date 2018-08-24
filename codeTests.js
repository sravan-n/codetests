var date, i; 
date = ["01/01/2001", "02/02/2002", "03/03/2002"];
for (i=0; i<date.length; i++) {
    date[i] = date[i].replace (/[/]/g, "-");
    console.log(date[i])
}

var a, b; 
function myFunction (a,b){
    for (i=0; i<b; i++) {
        console.log(a)
    }
}
myFunction ("a",4)

var a = [1,2,3];
var i; 
function double () {
for (i=0; i<a.length; i++) {
a[i]=2*a[i];
}
console.log(a);
}
double (a);