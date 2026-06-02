
const roll= document.getElementById("roll");
const display = document.getElementById("display")
const max=6;
const min=1;
let Random;
const message= document.getElementById("message")

roll.onclick= function(){
Random=Math.floor(Math.random()*max)+min;
display.textContent=Random;

if (Random===6)
{
  console.log("You Enter");
  message.textContent='You Are In'
}

else{

  console.log("You are out");
  message.textContent='You are out'
}

}

