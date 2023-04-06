
function changePalette2(){
    document.getElementById("sidebarp").style.backgroundColor = "rgb(82, 0, 163)";
    document.getElementById("sidebarp").style.color = "rgb(0,255,191)";
    document.getElementById("sidebarp").style.borderColor = "rgb(0,255,191)";;
    document.getElementById("widget").style.backgroundColor = "rgb(82, 0, 163)";
    document.body.style.backgroundColor = "rgb(255, 174, 200)";
    document.getElementById("section1").style.color = "rgb(155, 0, 108)";
    document.getElementById("text1").style.color = "rgb(155, 0, 108)";
    document.getElementById("contactinfo").style.color = "rgb(0,255,191)";

}

function changePalette3(){
    document.getElementById("sidebarp").style.backgroundColor = "rgb(30, 255, 0)";
    document.getElementById("sidebarp").style.color = "black"
    document.getElementById("sidebarp").style.borderColor = "rgb(233, 131, 131)";
    document.getElementById("widget").style.backgroundColor = "rgb(30, 255, 0)";
    document.getElementById("widget").style.borderColor = "rgb(0,255,191)";
    document.body.style.backgroundColor = "rgb(0, 31, 153)";
    document.getElementById("section1").style.color = "rgb(0, 255, 251)";
    document.getElementById("text1").style.color = "rgb(0, 255, 251)";
    document.getElementById("contactinfo").style.color = "black";

}


const colorButton2 = document.getElementById("palette2")
const colorButton3 = document.getElementById("palette3")


colorButton2.addEventListener("click", changePalette2);
colorButton3.addEventListener("click", changePalette3);




