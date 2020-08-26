const icard = document.querySelector(".icard");
icard.addEventListener("mousemove", e => {
    icard.setAttribute("style", "transform: rotateX("+((e.layerY-150)*10/150)+"deg) rotateY("+((e.layerX-225)*10/225)+"deg);");
});
icard.addEventListener("mouseout", e => {
    icard.setAttribute("style", "transform: rotateX(0deg);");
    icard.setAttribute("style", "transform: rotateY(0deg);");
});