let cartArr=JSON.parse(localStorage.getItem("cart"))||[];

let container=document.querySelector("#container");
renderCards(cartArr);

function renderCards(data){
    container.innerHTML = null;
    

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


    let itemprice=document.createElement("h1");
    itemprice.textContent=element[0].price;

    let add=document.createElement("button");
    add.textContent="+";
    add.addEventListener("click",()=>{
        element[1]++;
        itemprice.textContent=element[1]*element[0].price;

        localStorage.setItem("cart",JSON.stringify(cartArr));
        
    })

    let quantity=document.createElement("span");
    quantity.textContent=element[1];

    let subtract=document.createElement("button");
    subtract.textContent="-";
    subtract.addEventListener("click",()=>{
        if(quantity.textContent<=1){
            cartArr.splice(index,1);
            localStorage.setItem("cart",JSON.stringify(cartArr));
        }
        else{ 
            element[1]--;
           
        }

        itemprice.textContent=element[1]*element[0].price;
            localStorage.setItem("cart",JSON.stringify(cartArr));
            quantity.textContent++;

       
    })

   
    card.append(img,title,price1,price2,price3,processor,memory,harddrive,size,color,productline,itemprice,add,quantity,subtract);
    container.append(card);
  });
}


let price=document.querySelector("h1");
cartArr.forEach((el)=>{
     price.textContent=el[0].price*qty;
})


let payments=document.querySelector("#payment-info");
function paymentInfo(data){
    data.forEach((el,i)=>{
        let card1=document.createElement("div");
        let discount=document.createElement("span");
        discount.textContent="fhahfafaf";

        card1.append(discount);
        payments.append(card1);
    })
}

paymentInfo(cartArr);