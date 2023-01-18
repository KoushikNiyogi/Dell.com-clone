let form=document.getElementById("form")
 let submitButton=document.getElementById("submit")
let reset=document.getElementById("reset")

 let data=JSON.parse(localStorage.getItem("key"))||[] 
 console.log(typeof data.length)

 reset.addEventListener("click",()=>{

 })
 submitButton.addEventListener("click",(e)=>{
    e.preventDefault()
    // create data 
    let obj={
        name:form.Fname.value+" "+form.Lname.value,
        email:form.email.value,
        password:form.password.value,
    }
    console.log(form.Fname.required)
    if(data.length==0){
        data.push(obj)
        localStorage.setItem("key",JSON.stringify(data))
        window.location.assign("index.html")
    }else{
        let present=false
        data.forEach((element) => {
            if(obj.email===element.email){
                console.log(element.email)
                present=true
            }   
        });
        if(present){
                alert("Email is Already Used")
            }else{
                data.push(obj)
                localStorage.setItem("key",JSON.stringify(data))
                window.location.assign("index.html")
            }
    }
    
 })