
// const hamburger = document.getElementById("hamburger");

// hamburger.addEventListener("click",function(){
//     console.log("Hello");
//    const nav_items = document.getElementById("nav_items");
//    nav_items.classList.toggle("show_nav_items");  
// })

// const crossCategoriesIcon = document.getElementById("crossCategoriesIcon");

// crossCategoriesIcon.addEventListener("click",function(){
//     console.log("Hello");
//    const nav_items = document.getElementById("nav_items");
//    nav_items.classList.toggle("show_nav_items");  
// })


// const products = document.getElementById("products");

// products.addEventListener("click",function(){
//     if (window.innerWidth <= 992) { 
//     let productCategoriesContainer = document.getElementById("productCategoriesContainer");
//     let dropDowon_icon = document.getElementById("dropDowon-icon");
//     console.log("productCategoriesContainer.style.display: ",productCategoriesContainer.style);

//     if( productCategoriesContainer.style.display == "block" ){
//      console.log("no");
//      productCategoriesContainer.style.display = "none"; 
//      dropDowon_icon.style.transform = "rotate(-90deg)"; 
//     }
//     else{
//         console.log("yes");
//         productCategoriesContainer.style.display = "block";
//         dropDowon_icon.style.transform = "rotate(0deg)"; 
//     }
// } 
// }) 

// const nav_items = document.getElementById("nav_items");
// nav_items.addEventListener("click", function (event) { 
//     let products = document.getElementById("products"); 
//     let productCategoriesContainer = document.getElementById("productCategoriesContainer");
//     let dropDowon_icon = document.getElementById("dropDowon-icon");
//     if (!products.contains(event.target)) { 
//         productCategoriesContainer.style.display = "none";
//         dropDowon_icon.style.transform = "rotate(-90deg)";
//     }
// }); 



let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},50)

})


// testimonialSection
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true, 
//     },
//   });



const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu-inner");
const menuArrow = menu.querySelector(".menu-arrow");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay-2");

// Navbar Menu Toggle Function
function toggleMenu() {
   menu.classList.toggle("is-active");
   overlay.classList.toggle("is-active");
}

// Show Mobile Submenu Function
function showSubMenu(children) {
   subMenu = children.querySelector(".submenu");
   subMenu.classList.add("is-active");
   subMenu.style.animation = "slideLeft 0.35s ease forwards";
   const menuTitle = children.querySelector("i").parentNode.childNodes[0]
      .textContent;
   menu.querySelector(".menu-title").textContent = menuTitle;
   menu.querySelector(".menu-header").classList.add("is-active");
}

// Hide Mobile Submenu Function
function hideSubMenu() {
   subMenu.style.animation = "slideRight 0.35s ease forwards";
   setTimeout(() => {
      subMenu.classList.remove("is-active");
   }, 300);

   menu.querySelector(".menu-title").textContent = "";
   menu.querySelector(".menu-header").classList.remove("is-active");
}

// Toggle Mobile Submenu Function
function toggleSubMenu(e) {
   if (!menu.classList.contains("is-active")) {
      return;
   }
   if (e.target.closest(".menu-dropdown")) {
      const children = e.target.closest(".menu-dropdown");
      showSubMenu(children);
   }
}

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth >= 992) {
      if (menu.classList.contains("is-active")) {
         toggleMenu();
      }
   }
});

// Dark and Light Mode with localStorage
(function () {
   let darkMode = localStorage.getItem("darkMode");
   const darkSwitch = document.getElementById("switch");

   // Enable and Disable Darkmode
   const enableDarkMode = () => {
      document.body.classList.add("darkmode");
      localStorage.setItem("darkMode", "enabled");
   };

   const disableDarkMode = () => {
      document.body.classList.remove("darkmode");
      localStorage.setItem("darkMode", null);
   };

   // User Already Enable Darkmode
   if (darkMode === "enabled") {
      enableDarkMode();
   }

   // User Clicks the Darkmode Toggle
   darkSwitch.addEventListener("click", () => {
      darkMode = localStorage.getItem("darkMode");
      if (darkMode !== "enabled") {
         enableDarkMode();
      } else {
         disableDarkMode();
      }
   });
})();

// Initialize All Event Listes
burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuArrow.addEventListener("click", hideSubMenu);
menuInner.addEventListener("click", toggleSubMenu);




