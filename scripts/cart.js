let cartArr=JSON.parse(localStorage.getItem("cart"))||[];

let container=document.querySelector("#container");
renderCards(cartArr);

let Total=document.getElementById("saving").textContent;




function renderCards(data){
    container.innerHTML = null;

    let totalSavings=data.reduce(function(acc,item){
      let q=item[1];
      let p=+item[0].price;
      let discPrice=+item[0].strikeoffprize;
      let tot=q*(discPrice-p);
      acc+=tot;
      return acc;
    },0)

    let t=document.getElementById("saving");
    t.textContent=totalSavings;

    let items=document.getElementById("items");

    items.textContent=data.length;

    let totalOrder=document.getElementById("orderValue");
    let totalValue=data.reduce((acc,item)=>{
      let q1=item[1];
      let p1=+item[0].price;
      let tot1=p1*q1;
      acc+=tot1;
      return acc;
    },0)
    console.log(totalValue);
    totalOrder.textContent=totalValue;


    var currentDate = new Date();
    var threeDaysLater = new Date(currentDate.getTime() + 3*24*60*60*1000).toLocaleDateString();
    let date=document.getElementById("date");
    date.textContent= threeDaysLater;


    let coupon=document.getElementById("coupon");
    let couponbtn=document.getElementById("couponbtn");
    couponbtn.addEventListener("click",function(){
      if(coupon.value==="republic"){
        totalOrder.textContent=totalValue-0.2*totalValue;
      }
      
        // totalOrder.textContent=totalValue-0.2*totalValue;
    })
    
     

    // let totalCost=JSON.parse(localStorage.getItem("total"))||[];
    // totalCost.push(totalValue);
    // eventlistener on clicking the checkout button
    let checkout=document.getElementById("checkout");
    checkout.addEventListener("click",()=>{
         localStorage.setItem("total",totalValue);
         window.location.assign("address.html");
    })
   


    data.forEach((element,index) =>{

      
      let discount = (+element[0].strikeoffprize)-(+element[0].price);
      let percentage = (((element[0].strikeoffprize - +element[0].price)/+element[0].strikeoffprize)*100).toFixed(0);
  
      let card = document.createElement("div");
      card.setAttribute("class","product_card");
      let img= document.createElement("img");
      img.setAttribute("src",element[0].image1);
      let title = document.createElement("h2");
      title.textContent = element[0].name;
      let price1 = document.createElement("p");
      price1.innerHTML = `Online Price <span>₹${element[0].strikeoffprize}</span>`
      let price2 = document.createElement("p");
      price2.innerHTML =`<span><b>₹${element[0].price}</b></span> Save <span style="color:green">₹${discount}(${percentage}%)</span>`;
      let price3 = document.createElement("p");
      price3.textContent = "Price inclusive of GST. Free Delivery."
      let processor = document.createElement("div");
      processor.innerHTML = `<i class="fa-solid fa-microchip"></i> <span>11th Gen Intel® Core™ i3-1115G4</span>`
      let memory = document.createElement("div");
      memory.innerHTML = `<i class="fa-solid fa-ruler-horizontal"></i> <span>${element[0].ram}, DDR4, 2666 MHz</span>`
      let harddrive = document.createElement("div");
      harddrive.innerHTML = `<i class="fa-solid fa-hard-drive"></i> <span>${element[0].rom}, M.2, PCIe NVMe, SSD</span>`
      let size = document.createElement("div");
      size.innerHTML = `<i class="fa-solid fa-display"></i> <span>${element[0].screensize}-inch. display Full HD (1920X1080)</span>`
    let color = document.createElement("p");
    color.textContent = "Colour : "+element[0].color;
    let productline = document.createElement("p");
    productline.textContent = "Productline : "+element[0].productline;


    // let itemprice=document.createElement("h1");
    // itemprice.textContent=element[0].price;


    let add=document.createElement("button");
    add.textContent="+";
    add.addEventListener("click",()=>{
        element[1]++;
        quantity.textContent++;
        // .textContent=element[1]*element[0].price;
        t.textContent=element[1]*(element[0].strikeoffprize-element[0].price);

        items.textContent=data.length+element[1];

        // total value of items
        totalOrder.textContent=element[1]*element[0].price;

        localStorage.setItem("cart",JSON.stringify(cartArr));
        // window.location.reload();
    })

    let quantity=document.createElement("span");
    quantity.textContent=element[1];
    

    let subtract=document.createElement("button");
    subtract.textContent="-";
    subtract.addEventListener("click",()=>{
        if(quantity.textContent==1){
          cartArr.splice(index,1);
          localStorage.setItem("cart",JSON.stringify(cartArr));
          window.location.reload();
         }
        else{
        element[1]--;
        quantity.textContent--;
        items.textContent=element[1];
        t.textContent=element[1]*(element[0].strikeoffprize-element[0].price);

        // for total cart items value
        totalOrder.textContent=element[1]*element[0].price;

        // itemprice.textContent=element[1]*element[0].price;
        localStorage.setItem("cart",JSON.stringify(cartArr));
        // window.location.reload();
        }
    })



   
    card.append(img,title,price1,price2,price3,processor,memory,harddrive,size,color,productline,add,quantity,subtract);
    container.append(card);
  });
}





// let payments=document.querySelector("#payment-info");
// function paymentInfo(data){
//     data.forEach((el,i)=>{

//         JSON.parse(localStorage.getItem("cart"));
//         let card1=document.createElement("div");
//         let discount=document.createElement("span");
        
//         discount.textContent="₹"+el[1]*(el[0].strikeoffprize-el[0].price) +" Total savings";

//         let item=document.createElement("p");
//         item.textContent="items "+ "₹ " + el[0].price;

//         let orderValue=document.createElement("p");
//         orderValue.textContent="Total Order Value "+  "₹ " +el[0].price;

//         let p=document.createElement("p");
//         p.textContent="Above prices include Tax and Shipping";

//         let arrive=document.createElement("p");
//         arrive.textContent="Arrives by "+ Date();

//         let checkout=document.createElement("button");
//         checkout.textContent="Checkout";
//         checkout.style="width:250px;background-color:green";

//         checkout.addEventListener("click",()=>{
            
//         })

//         let continued=document.createElement("button");
//         continued.textContent="Continue Shopping"
//         continued.style="color:blue;width:250px;margin-top:10px";

//         card1.style="border:1px solid black"





//         card1.append(discount,item,orderValue,p,arrive,checkout, continued);
//         payments.append(card1);
//     })
// }

// paymentInfo(cartArr);