const cursor1 = document.querySelector(".cursor-1");
const cursor2 = document.querySelector(".cursor-2");
const header = document.querySelector("header");
const logo = document.querySelector("#logo");
const section = document.querySelector("section");
var handler;

header.addEventListener("mousemove", handler = e => {
    cursor1.setAttribute("style", "top: " + (e.pageY - 8) + "px; left: " + (e.pageX - 8) + "px; display: inline-block;");
});
header.addEventListener("mouseout", e => {
    cursor1.style.display = "none";
});

section.addEventListener("mousemove", e => {
    cursor2.setAttribute("style", "top: " + (e.pageY - 8) + "px; left: " + (e.pageX - 8) + "px; display: inline-block;");
});
section.addEventListener("mouseout", e => {
    cursor2.style.display = "none";
});

logo.addEventListener("mouseover", e => {
    header.removeEventListener("mousemove", handler);
});
logo.addEventListener("mouseout", e => {
    header.addEventListener("mousemove", handler);
});