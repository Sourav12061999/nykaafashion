let detailCard=document.getElementById("details-card");
let detailUPI=document.getElementById("details-upi");
let detailGpay=document.getElementById("details-google");
let detailCash=document.getElementById("details-cash");

let payBtn=document.getElementById("payBtn");

let p=[document.getElementById("p1"),document.getElementById("p2"),
document.getElementById("p3"),document.getElementById("p4"),document.getElementById("p5")]

let data=JSON.parse(localStorage.getItem("nykaa-cart"));
let totalPrice=0;
CartTotal();
payBtn.textContent=`Pay $ ${totalPrice} Now`


let detailCardBtn=document.getElementById("methods1");
detailCardBtn.addEventListener("click",function(){
  detailCard.style.display="block";
  detailUPI.style.display="none";
  detailGpay.style.display="none";
  detailCash.style.display="none";
  payBtn.textContent=`Pay $ ${totalPrice} Now`
})

let detailUPIBtn=document.getElementById("methods2");
detailUPIBtn.addEventListener("click",function(){
  detailCard.style.display="none";
  detailUPI.style.display="block";
  detailGpay.style.display="none";
  detailCash.style.display="none";
  payBtn.textContent=`Pay $ ${totalPrice} Now`;
})

let detailGpayBtn=document.getElementById("methods3");
detailGpayBtn.addEventListener("click",function(){
  detailCard.style.display="none";
  detailUPI.style.display="none";
  detailGpay.style.display="block";
  detailCash.style.display="none";
  payBtn.textContent=`Pay $ ${totalPrice} Now`;
})

let detailCashBtn=document.getElementById("methods4");
detailCashBtn.addEventListener("click",function(){
  detailCard.style.display="none";
  detailUPI.style.display="none";
  detailGpay.style.display="none";
  detailCash.style.display="block";
  payBtn.textContent=`Pay $ ${totalPrice} After Delivery In Cash`
})

function CartTotal(){
  data.forEach(element => {
    totalPrice=totalPrice+Number(element.price);
  });
  p[0].textContent="$ "+totalPrice;
  p[1].textContent="$ "+totalPrice;
  p[2].textContent="$ "+0;
  if(totalPrice>400){
    p[3].textContent="$ "+0
    p[4].textContent="$ "+totalPrice;
  }else{
    p[3].textContent="$ "+50;
    p[4].textContent="$ "+(totalPrice+50);
  }
  
}