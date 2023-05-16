function show(selectValue){
    var showResizeDiv = document.getElementById("resizeDiv");
    var showHexDiv = document.getElementById("hexDiv");
    var showOvalDiv = document.getElementById("ovalDiv");
    
    showResizeDiv.classList.remove("showDiv");
    showHexDiv.classList.remove("showDiv");
    showOvalDiv.classList.remove("showDiv");

    if(selectValue === "resize"){
        showResizeDiv.classList.add("showDiv");
    }

    if(selectValue === "hex"){
        showHexDiv.classList.add("showDiv");
    }

    if(selectValue === "oval"){
        showOvalDiv.classList.add("showDiv");
    }
}