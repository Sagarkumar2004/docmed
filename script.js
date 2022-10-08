console.log("javascript is running");


document.querySelector(".ham").addEventListener("click", ()=>{
    document.querySelector(".nav").classList.toggle("h-nav");
    document.querySelector(".navlist").classList.toggle("v-class");
    
});
document.querySelector(".navlist").addEventListener("click", ()=>{
    document.querySelector(".nav").classList.toggle("h-nav");
    document.querySelector(".navlist").classList.toggle("v-class");
    
})


