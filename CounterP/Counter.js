const inc= document.getElementById("inc");
const dec=document.getElementById("dec");
const Counterr=document.getElementById("Counterr");
const reset=document.getElementById("reset");
let count= 0;

inc.onclick= function()
{
count ++;
Counterr. textContent= count;

}

dec.onclick= function()
{

count--;
Counterr.textContent= count;

}

reset.onclick= function()
{

count=0;
Counterr.textContent= count;

}