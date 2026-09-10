let texto=document.getElementById("texto");
let posicion=0;
function mover(){
    posicion+=10;
    texto.style.marginLeft=posicion+"px";
    if(posicion>600){
        posicion=0;
    }    
}
setinterval(mover, 30);
