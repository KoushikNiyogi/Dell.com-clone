let form=document.getElementById("form")
let button=document.getElementById("submit")
let data=JSON.parse(localStorage.getItem("key"))
console.log(data)


button.addEventListener("click",(e)=>{
   
   e.preventDefault()
   let obj={
      
       email:form.email.value,
       password:form.password.value,
   }
   
   console.log(obj)
   if(data==null){  
       alert("Increditial details")
       
   }else{
       let present=false
       data.forEach((element) => {
           if(obj.email===element.email&&obj.password==element.password){
               present=true
           }   
       });
       if(present){
           window.location.assign("index.html")
           }else{
               
               alert("Increditial details")
           }
   }
   

})