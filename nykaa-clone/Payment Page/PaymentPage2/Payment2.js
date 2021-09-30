let detailCard=document.getElementById("details-card");
let detailUPI=document.getElementById("details-upi");
let detailGpay=document.getElementById("details-google");
let detailCash=document.getElementById("details-cash");

let payBtn=document.getElementById("payBtn");

let detailCardBtn=document.getElementById("methods1");
detailCardBtn.addEventListener("click",function(){
  detailCard.style.display="block";
  detailUPI.style.display="none";
  detailGpay.style.display="none";
  detailCash.style.display="none";
  payBtn.textContent="Pay Now"
})

let detailUPIBtn=document.getElementById("methods2");
detailUPIBtn.addEventListener("click",function(){
  detailCard.style.display="none";
  detailUPI.style.display="block";
  detailGpay.style.display="none";
  detailCash.style.display="none";
  payBtn.textContent="Pay Now"
})

let detailGpayBtn=document.getElementById("methods3");
detailGpayBtn.addEventListener("click",function(){
  detailCard.style.display="none";
  detailUPI.style.display="none";
  detailGpay.style.display="block";
  detailCash.style.display="none";
  payBtn.textContent="Pay Now"
})

let detailCashBtn=document.getElementById("methods4");
detailCashBtn.addEventListener("click",function(){
  detailCard.style.display="none";
  detailUPI.style.display="none";
  detailGpay.style.display="none";
  detailCash.style.display="block";
  payBtn.textContent="Pay After Delivery In Cash"
})