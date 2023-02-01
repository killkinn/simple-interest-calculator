
function interest() {
    let p = document.getElementsByClassName("a")[0].value;
    let r = document.getElementsByClassName("b")[0].value;
    let t = document.getElementsByClassName("c")[0].value;
    let a = p * r * t / 100;
    console.log(p * r * t / 100)
    alert(a)



}
document.getElementsByClassName("btn")[0].addEventListener("click", interest)








