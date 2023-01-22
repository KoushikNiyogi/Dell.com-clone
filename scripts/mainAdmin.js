
let table=document.getElementById("table")
let data=JSON.parse(localStorage.getItem("order"))
console.log(data)
for(let i=0;i<data.length;i++){
  data[i].forEach((element,index) => {
  if(index%2==0){
    // name ,price,produceline,catagary
    let tr=document.createElement("tr")
    tr.setAttribute("id",index)
  let name=document.createElement("td")
  name.innerText=element.name
  let price=document.createElement("td")
  price.innerText=element.price
  let productline=document.createElement("td")
  productline.innerText=element.productline
  let category=document.createElement("td")
  category.innerText=element.category
  tr.append(name,price,productline,category)
  table.append(tr)
  }else{
    // quantity
    let tr=document.getElementById("0")
    let quantiy=document.createElement("td")
    quantiy.innerText=element
    tr.append(quantiy)
  table.append(tr)
  }
});
}