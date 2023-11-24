var main = document.querySelector(".main");
var box = document.querySelectorAll(".box");
var box_img = document.querySelector(".box img");
var heading = document.querySelector(".heading");
// var text = document.querySelector(".text");
var cursor = document.querySelector(".cursor");

heading.addEventListener("mouseenter",function(){
    cursor.style.opacity = 1;

})
heading.addEventListener("mousemove",function(a){
    cursor.style.left = a.x +"px";
    cursor.style.top = a.y +"px";

})
heading.addEventListener("mouseleave",function(){
    // cursor.style.left = a.x +"px";
    // cursor.style.top = a.y +"px";
    cursor.style.opacity = 0;

})
// box.addEventListener("mousemove",function(a){
//     box_img.style.left = a.x + "px";
//     box_img.style.top = a.y + "px"

// })
// box.addEventListener("mouseenter",function(a){
//     box_img.style.opacity = 1;

// })
// box.addEventListener("mouseleave",function(a){
//     box_img.style.opacity = 0;

// })

box.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        // console.log(val)
        val.childNodes[1].style.opacity = 1;
        // console.log("entered")
        // val.style.backgroundColor = "red"

    })

    val.addEventListener("mouseleave",function(){
        val.childNodes[1].style.opacity = 0;
        // console.log("entered")
        // val.style.backgroundColor = "red"

    })
    val.addEventListener("mousemove",function(a){
        // console.log("leave")
        // val.style.backgroundColor = "black"
        val.childNodes[1].style.left = a.x + "px";
        // val.childNode[1].style.top = a.y + "px"

    })
})