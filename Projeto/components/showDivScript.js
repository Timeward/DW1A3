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
        
        const hexInput = document.getElementById("sideLength")
        const hexOutput = document.querySelector("#hexResult")
        var hexAreaValue = 0
        hexOutput.value = hexAreaValue.toFixed(3)

        hexInput.addEventListener("keyup", (hexEvent)=>{
            
            hexAreaValue = (3*Math.pow(hexEvent.target.value, 2)*Math.sqrt(3))/2

            hexOutput.value = hexAreaValue.toFixed(3)
        })
    }

    if(selectValue === "oval"){
        showOvalDiv.classList.add("showDiv");
    }
}