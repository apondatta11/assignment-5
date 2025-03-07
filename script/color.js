function color() {
    let r = Math.floor(Math.random() * 156) + 100;
    let g = Math.floor(Math.random() * 156) + 100;
    let b = Math.floor(Math.random() * 156) + 100;
    let a = (Math.random() * 0.5 + 0.35).toFixed(2);
    return `rgba(${r},${g},${b},${a})`;
}
document.getElementById("color").addEventListener('click',function(){
    document.body.style.backgroundColor = color();
})