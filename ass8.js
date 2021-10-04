function details(name,age)
{
    console.log(name,age);
}

details("Daniella","20"); 
details("Treasure","18");
details("Michaela","15");
details("Jayden","9");
details("Michael","20");

function first(second)
{
    second(name);
}
function second(name)
{
    console.log(name);
}

first(second);
second("Daniella");