console.log("javascript is running");

window.onload = function(){
    document.querySelector("#loading").style.display = "none";
    document.getElementById('main').style.opacity ="1"
  }

document.querySelector(".ham").addEventListener("click", ()=>{
    document.querySelector(".nav").classList.toggle("h-nav");
    document.querySelector(".navlist").classList.toggle("v-class");
    
});
document.querySelector(".navlist").addEventListener("click", ()=>{
    document.querySelector(".nav").classList.toggle("h-nav");
    document.querySelector(".navlist").classList.toggle("v-class");
    
})

