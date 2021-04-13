const btn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closebtn = document.querySelector(".close-btn");

btn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closebtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});
