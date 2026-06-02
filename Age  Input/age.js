const Ageinp= document.getElementById("Ageinp");
const submit= document.getElementById("submit");
const message= document.getElementById("message");
let age;

submit.onclick= function()
{

  age = Ageinp.value;
  age = Number(age);

  if (age>=18){

    message.textContent= "You Are old enough to vote"
  
  }

  else{

    message.textContent="You are a minor you cannot vote"
  }
}
