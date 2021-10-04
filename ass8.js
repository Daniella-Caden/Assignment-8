function details(name,age)
{
    console.log(name,age);
}

details("Daniella","20"); 
details("Treasure","18");
details("Michaela","15");
details("Jayden","9");
details("Michael","20");


function first()
{
    second("Daniella");
}
function second(name)
{
    console.log(name);
}

first();



let concat= (a,b) =>{
    let result=a+b;

    return result;
}

let a;
a=9;
let b;
b=8;
console.log(concat(a,b));





for(let i=1;i<=19;i++)
{
    console.log("I love Uganda");
}

