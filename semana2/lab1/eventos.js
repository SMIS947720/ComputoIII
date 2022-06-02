function fFirst(){
    console.log("primera f");
}
function sSecon(){
    setTimeout(() => {
        console.log("segunda f");

    }, 0);
    
}
function tThird(){
    console.log("TERCERA f");
}
fFirst();
sSecon();
tThird();