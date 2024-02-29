const dropdowns = document.querySelectorAll(".form_item--dropdown");

dropdowns.forEach((dropdown) => {
   const select = document.querySelector(".form_item--select");
   const caret = document.querySelector(".form_item--caret");
   const menu = document.querySelector(".form_item--menu");
   const options = document.querySelectorAll(".form_item--menu li");
   const selected = document.querySelector(".form_item--selected");
   select.addEventListener("click", () => {
      caret.classList.toggle("caret-rotate");
      menu.classList.toggle("menu-open");
   });

   options.forEach((option) => {
      option.addEventListener("click", () => {
         selected.classList.remove("placeholder");
         selected.innerText = option.innerText;
         caret.classList.remove("caret-rotate");
         menu.classList.remove("menu-open");
         options.forEach((option) => option.classList.remove("active"));
         option.classList.add("active");
      });
   });
});
