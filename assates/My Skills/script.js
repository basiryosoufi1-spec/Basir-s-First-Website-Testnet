// hidden
let hambergar = document.querySelector(".hambergar")

let mobile_nav_ul = document.querySelector(".mobile_nav_ul")

hambergar.addEventListener("click" , ()=>{
    if(mobile_nav_ul.style.height === "0px" && mobile_nav_ul.style.display === "none"){
        mobile_nav_ul.style.height = "250px"
        mobile_nav_ul.style.display = "flex"
    }else{
        mobile_nav_ul.style.height = "0px"
        mobile_nav_ul.style.display = "none"
    }
})

let skill_parts_WWW = document.querySelector(".webdescontianer")
// skill_parts_WWW.style.height = "400px"
skill_parts_WWW.addEventListener("click" , ()=>{
    if(skill_parts_WWW.style.height === "530px"){
        skill_parts_WWW.style.height = "fit-content"
        document.querySelector(".alert").innerHTML = "Tap agian to change to less read Mode"
    }else{
        skill_parts_WWW.style.height = "530px"
        document.querySelector(".alert").innerHTML = "tap to change red more Mode"
    }
})

let skill_parts_linux = document.querySelector(".about-linux-info")
let linuxalert = document.querySelector(".linuxalert")

skill_parts_linux.addEventListener("click" , ()=>{
    if(skill_parts_linux.style.height === "fit-content"){
        skill_parts_linux.style.height = "200px"
        linuxalert.innerHTML = "tap to read more"        
    }else{
        skill_parts_linux.style.height = "fit-content"
        linuxalert.innerHTML = "tap to less read mode"
    }
})

let about_blockchain_info = document.querySelector(".about-blockchain-info")
let bl_ch_alert = document.querySelector(".bl_ch_alert")

about_blockchain_info.addEventListener("click" , ()=>{
    if(about_blockchain_info.style.height === "fit-content"){
        about_blockchain_info.style.height = "400px"
        bl_ch_alert.innerHTML = "tap to read more"
    }else{
        about_blockchain_info.style.height = "fit-content"
        bl_ch_alert.innerHTML = "tap to read less mode"
    }
})