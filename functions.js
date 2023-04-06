function calculateRemainder() {
    let result = document.getElementById("sidebar");
    let clicker = document.getElementById("clicker");
    
}




function close() {
    let result = document.getElementById("sidebar");
    let clicker = document.getElementById("close-button");
    let opener = document.getElementById("open-button");
    result.style.display = "none";
    clicker.style.display = "none";
    opener.style.display = "block";

}

function open() {
    let result = document.getElementById("sidebar");
    let clicker = document.getElementById("close-button");
    let opener = document.getElementById("open-button");
    result.style.display = "block";
    clicker.style.display = "block";
    opener.style.display = "none";
    

}

if("Notification" in window){
    Notification.requestPermission().then(function(permission) {
        if(Notification.permission==="granted"){
            let notification = new Notification("Any bugs? Please refer to my contact information and send an email to report them!");
        }
    });
}

function read() {
    let courseText = document.getElementById("course-text")
    let courseResponse = document.getElementById("course-response");
    if(courseText.value===("CSCI 1120")){
        courseResponse.disabled = false;
        courseResponse.value = "This course introduces students to key web concepts and skills for designing, implementing, and maintaining web content. Topics include introduction to the Web, UI and UX best practices, hypertext markup languages such as HTML, style sheets, client side programming, multimedia foundations, dynamic content and web content organization and maintenance.";
        courseResponse.disabled = true;
    }
    if(courseText.value===("CSCI 1105")){
        courseResponse.disabled = false;
        courseResponse.value = "This course provides a general introduction to computer programming. The main focus is on programming skills and how to apply these skills in solving a variety of problems. Procedural programming concepts are stressed.";
        courseResponse.disabled = true;
    }
    if(courseText.value===("CSCI 1110")){
        courseResponse.disabled = false;
        courseResponse.value = "This course provides a general introduction to computer science and the hardware and software of computers. The main focus is on programming skills and how to apply these skills in solving a variety of problems. Algorithmic concepts, linear data structures are emphasized.";
        courseResponse.disabled = true;
    }
    if(courseText.value===("CSCI 1170")){
        courseResponse.disabled = false;
        courseResponse.value = "This course introduces students to key web concepts and skills for designing, implementing, and maintaining web content. Topics include introduction to the Web, UI and UX best practices, hypertext markup languages such as HTML, style sheets, client side programming, multimedia foundations, dynamic content and web content organization and maintenance.";
        courseResponse.disabled = true;
    }

}



const closeButton = document.getElementById('close-button');
const openButton = document.getElementById("open-button");
const courseSubmit = document.getElementById("course-button");

closeButton.addEventListener("click", close);
openButton.addEventListener("click", open);


courseSubmit.addEventListener("click", read);



//calculatButton.addEventListener("click", calculateRemainder);

