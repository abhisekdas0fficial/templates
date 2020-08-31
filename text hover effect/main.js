const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: " + e.pageY + "px; left: " + e.pageX + "px;")
});
document.addEventListener("mouseout", e => {
    cursor.style.display = "none";
});