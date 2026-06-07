// mobile nav part

let mobile_nav = document.querySelector(".mobile_nav")

let hambarger = document.querySelector(".hambarger")

hambarger.addEventListener("click" , ()=>{
    if(mobile_nav.style.height === "0px"){
        mobile_nav.style.height="250px"
        mobile_nav.style.display ="flex"
        // learn hw to select multi element with same className 
    }else{
        mobile_nav.style.height = "0px"
        mobile_nav.style.display = "none"
    }
})

