let login=document.querySelector("#login");
login.addEventListener('click',function(){
    let loginArea=document.querySelector(".login-area");
loginArea.classList.add('ex');
    let Area=document.querySelector('.area');
    Area.classList.remove('area');
})

let adddeposit=document.querySelector('.addDeposit');
adddeposit.addEventListener('click',function(){
    let deposit=document.querySelector("#deposit").value;
   let  deposit1=parseInt(deposit);
   let currentdeposit=document.querySelector('.current-deposit').innerHTML;
  let  currentdeposit1=parseInt(currentdeposit);
  let totaldeposit=deposit1+currentdeposit1;
  document.querySelector(".current-deposit").innerHTML=totaldeposit;
  document.querySelector("#deposit").value='';

let currentbalance=document.querySelector('.current-balance').innerHTML;
let currentbalance1=parseInt(currentbalance);
let totalcurrent=currentbalance1+deposit1;
document.querySelector('.current-balance').innerHTML=totalcurrent;
   })

   let addwithdraw=document.querySelector('.addWithdraw');
   addwithdraw.addEventListener('click',function(){
 let currentwithdraw=document.querySelector('#withdraw').value;
 let currentwithdraw1=parseInt(currentwithdraw);
 let withdraw=document.querySelector(".current-withdraw").innerHTML;
 let withdraw1=parseInt(withdraw);
 let totalwithdraw=currentwithdraw1+withdraw1;
 document.querySelector('.current-withdraw').innerHTML=totalwithdraw;
 document.querySelector('#withdraw').value ='';


let currentbalance=document.querySelector('.current-balance').innerHTML;
let currentbalance1=parseInt(currentbalance);
let totalcurrent=currentbalance1-currentwithdraw1;
document.querySelector('.current-balance').innerHTML=totalcurrent;
  })