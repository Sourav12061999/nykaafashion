let TechProductData=[
    {brand:"Zebronics",img:"./images/img1.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Laptop",Extra:[]},
    {brand:"Zebronics",img:"./images/img2.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Mobile",Extra:[]},
    {brand:"Zebronics",img:"./images/img3.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Head Phones",Extra:[]},
    {brand:"Zebronics",img:"./images/img4.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Speakers",Extra:[]},
    {brand:"Zebronics",img:"./images/img5.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Smart TV",Extra:[]},
    {brand:"Apple",img:"./images/img1.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Laptop",Extra:[]},
    {brand:"Apple",img:"./images/img2.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Mobile",Extra:[]},
    {brand:"Apple",img:"./images/img3.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"LaptopHead Phones",Extra:[]},
    {brand:"Apple",img:"./images/img4.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Speakers",Extra:[]},
    {brand:"Apple",img:"./images/img5.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Smart TV",Extra:[]},
    {brand:"HP",img:"./images/img1.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Laptop",Extra:[]},
    {brand:"HP",img:"./images/img1.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Mobile",Extra:[]},
    {brand:"HP",img:"./images/img1.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Head Phones",Extra:[]},
    {brand:"HP",img:"./images/img1.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Speakers",Extra:[]},
    {brand:"HP",img:"./images/img1.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Smart TV",Extra:[]},
    {brand:"Dell",img:"./images/img1.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Laptop",Extra:[]},
    {brand:"Dell",img:"./images/img1.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Mobile",Extra:[]},
    {brand:"Dell",img:"./images/img1.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Head Phones",Extra:[]},
    {brand:"Dell",img:"./images/img1.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Speakers",Extra:[]},
    {brand:"Dell",img:"./images/img1.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Smart TV",Extra:[]},
    {brand:"Vivo",img:"./images/img1.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Laptop",Extra:[]},
    {brand:"Vivo",img:"./images/img1.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Mobile",Extra:[]},
    {brand:"Vivo",img:"./images/img1.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Head Phones",Extra:[]},
    {brand:"Vivo",img:"./images/img1.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Speakers",Extra:[]},
    {brand:"Vivo",img:"./images/img1.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Smart TV",Extra:[]},
    {brand:"Oppo",img:"./images/img1.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Laptop",Extra:[]},
    {brand:"Oppo",img:"./images/img1.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Mobile",Extra:[]},
    {brand:"Oppo",img:"./images/img1.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Head Phones",Extra:[]},
    {brand:"Oppo",img:"./images/img1.jpg", gender:"Male",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Speakers",Extra:[]},
    {brand:"Oppo",img:"./images/img1.jpg", gender:"Female",price:100,detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi.",catagory:"Smart TV",Extra:[]}
]

let products=document.getElementById("products");
function ShowProducts(data){
    let count=0;
    data.forEach(element => {
        let card= document.createElement("div");
        card.setAttribute("class","card");

        let img=document.createElement("div");
        img.setAttribute("class", "card-img");
        img.style.backgroundImage=`url(https://source.unsplash.com/1600x900/?nature,water)`
        card.appendChild(img);

        let text=document.createElement("div");
        text.setAttribute("class","card-text");
        let h3=document.createElement("h3");
        h3.textContent=element.brand.toUpperCase()+" "+element.catagory;
        text.appendChild(h3);
        let p=document.createElement("p");
        p.textContent=element.detail;
        p.setAttribute("class","card-text-detail")
        text.appendChild(p);
        let p2=document.createElement("p");
        p2.textContent="Price:- $"+element.price;
        p2.setAttribute("class","card-text-price")
        text.appendChild(p2);
        card.appendChild(text);
        products.appendChild(card);
        count++;
    });
    products.style.height=`${count/3*450}px`
}
ShowProducts(TechProductData);
function woman(){
    window.location.href="womanpage/woman.html";
  }
  function men(){
    window.location.href="menpage/men.html";
  }
  function kids(){
    window.location.href="Kidspage/Kids.html";
  }
  function home(){
    window.location.href="Homepage/Home.html";
  }
  function tech(){
    window.location.href="Tech page/Tech.html";
  }
