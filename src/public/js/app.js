const container=document.querySelector(".burger-container");
const navContainer=document.querySelector('.navigationContainer');
const arrow=document.querySelector('.arrow');
// window.addEventListener('click',(e)=>{
//     if(e.target==container){
//         navContainer.classList.add('display-nav-container');
   
//     }
//    else if(e.target!==navContainer || e.target==arrow){
//         navContainer.classList.remove('display-nav-container');
//     }
// })



container.addEventListener("click",()=>{
    navContainer.classList.add('display-nav-container');
});
arrow.addEventListener('click',()=>{
    navContainer.classList.remove('display-nav-container');
})
