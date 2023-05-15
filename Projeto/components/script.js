function show(selectValue){
    var showResizeDiv = document.getElementById("resizeDiv");
    showResizeDiv.classList.remove("showDiv");
    if(selectValue === "resize"){
        showResizeDiv.classList.add("showDiv");
    }
}