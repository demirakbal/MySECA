const checkbox = document.getElementsByClassName("checkbox");

let x;
for(x = 0;x<checkbox.length;x++){
    checkbox[x].addEventListener('click', toggle)
}

var a = 1;
function toggle(){
    for(var y = 0; y < checkbox.length; y++)
    if(a == 1){
        checkbox[y].classList.add("open");
        return a=0;
    }
    else{
        checkbox[y].classList.remove("open");
        return a=1;
    }
}
