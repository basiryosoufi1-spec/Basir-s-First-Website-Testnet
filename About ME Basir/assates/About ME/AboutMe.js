let myeducationalpart = document.querySelector(".myeducationalpart")
let mycrierpart = document.querySelector(".mycrierpart");
let mypersonal = document.querySelector(".mypersonal");

myeducationalpart.addEventListener("click" , ()=>{
    if(myeducationalpart.style.height === "fit-content"){
        myeducationalpart.style.height = "400px"
        document.querySelector(".ttrm_educa").innerHTML = "tab to read more"
    }else{
        myeducationalpart.style.height = "fit-content"
        document.querySelector(".ttrm_educa").innerHTML = "Tab, change To less read mode"
    }
})
 
mycrierpart.addEventListener("click" , ()=>{
    if(mycrierpart.style.height === "fit-content"){
        mycrierpart.style.height = "400px"
        document.querySelector(".ttrm_mycri").innerHTML = "tab to read more"
    }else{
        mycrierpart.style.height = "fit-content"
        document.querySelector(".ttrm_mycri").innerHTML = "tab, change to less read mode"
    }
})

mypersonal.addEventListener("click" , ()=>{
    if(mypersonal.style.height === "fit-content"){
        mypersonal.style.height = "400px"
        document.querySelector(".ttrm_mypers").innerHTML = "tab to read more"
    }else{
        mypersonal.style.height = "fit-content"
        document.querySelector(".ttrm_mypers").innerHTML = "tab, change to less read mode"
    }
})
