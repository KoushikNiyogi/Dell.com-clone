let URL=``
data=[1,2,3]
check(data)
function check(data){
    data.forEach(ele => {
        let row=document.createElement('tr')
        let l1=document.createElement('td')
        l1.innerText=ele.id;
        let l2=document.createElement('td')
        l2.innerText=ele.name;
        let l3=document.createElement('td')
        l3.innerText=ele.price;
        let l4=document.createElement('td')
        l4.innerText=ele.q
        let l6=document.createElement('td')
        l6.innerText=ele.total
        let l7=document.createElement('td')
        l7.innerText=ele.buyer
        let l8=document.createElement('td')
        l8.innerText="Payment Details"
        let l9=document.createElement('td')
        l9.innerText=new Date();
        let l=document.createElement('td')
        l.innerHTML=`  <input type="checkbox">`
        row.append(l1,l2,l3,l4,l6,l7,l8,l9,l)
        document.querySelector("tbody").append(row)
    });
}