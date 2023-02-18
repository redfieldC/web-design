let a,b;
a=2;
b=3;

let op;
op="multiply"

var func;

function multiply(a,b){
    alert(a*b);
}

function add(a,b){
    alert(a+b);
}

if(op=="multiply"){
    func = multiply;
}



else{
    func = add;
}



func(12,34);