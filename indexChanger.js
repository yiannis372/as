function changePalette1(){
    document.getElementById("sidebarp").style.backgroundColor = "";
    document.getElementById("sidebarp").style.color = "";
    document.getElementById("sidebarp").style.borderColor = "";
    document.getElementById("widget").style.backgroundColor = "";
    document.body.style.backgroundColor = "";
    document.getElementById("section1").style.color = "";
    document.getElementById("section2").style.color = "";
    document.getElementById("nav1").style.color = "";
    document.getElementById("nav2").style.color = "";
    document.getElementById("text1").style.color = "";
}

function changePalette2(){
    document.getElementById("sidebarp").style.backgroundColor = "rgb(82, 0, 163)";
    document.getElementById("sidebarp").style.color = "rgb(0,255,191)";
    document.getElementById("sidebarp").style.borderColor = "rgb(82, 0, 163)";
    document.getElementById("widget").style.backgroundColor = "rgb(82, 0, 163)";
    document.body.style.backgroundColor = "rgb(255, 174, 200)";
    document.getElementById("section1").style.color = "rgb(155, 0, 108)";
    document.getElementById("section2").style.color = "rgb(155, 0, 108)";
    document.getElementById("nav1").style.color = "rgb(155, 0, 108)";
    document.getElementById("nav2").style.color = "rgb(155, 0, 108)";
    document.getElementById("text1").style.color = "rgb(155, 0, 108)";
}

function changePalette3(){
    document.getElementById("sidebarp").style.backgroundColor = "rgb(30, 255, 0)";
    document.getElementById("sidebarp").style.color = "black"
    document.getElementById("sidebarp").style.borderColor = "rgb(82, 0, 163)";
    document.getElementById("widget").style.backgroundColor = "rgb(30, 255, 0)";
    document.body.style.backgroundColor = "rgb(0, 31, 153)";
    document.getElementById("section1").style.color = "rgb(0, 255, 251)";
    document.getElementById("section2").style.color = "rgb(0, 255, 251)";
    document.getElementById("nav1").style.color = "rgb(0, 255, 251)";
    document.getElementById("nav2").style.color = "rgb(0, 255, 251)";
    document.getElementById("text1").style.color = "rgb(0, 255, 251)";
    document.getElementById("contactinfo").style.color = "black";
}

const colorButton1 = document.getElementById("palette1")
const colorButton2 = document.getElementById("palette2")
const colorButton3 = document.getElementById("palette3")

colorButton1.addEventListener("click", changePalette1);
colorButton2.addEventListener("click", changePalette2);
colorButton3.addEventListener("click", changePalette3);




