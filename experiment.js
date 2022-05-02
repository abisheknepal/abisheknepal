var shapes = document.getElementsByClassName("material-symbols-outlined");
var fMain = document.querySelector(".main");
fMain.addEventListener("mousemove", (e) => {
   var top = e.clientY / 50;
   var right = e.clientX / 100;
   console.log(right);
for (var i = 0; i < shapes.length; i++) {
   if (top < "20") {shapes[i].style.marginTop = top + "px";}
   if (right < "20") {shapes[i].style.marginRight = right + "px";}
}
});