//Welcome button
let welcome = document.getElementById("welcome");
let welc_text = document.getElementById("welc_text")

//Fade welcome button
function fadeWelcome() {
    let fo = setInterval(fadeOut, 10);
    var opa = 1;

    function fadeOut(){
        if(opa <= 0){
            clearInterval(fo);
            fadeIn();
        } else {
            opa -= 0.01;
            welc_text.style.opacity = opa;
        }
    };

    function fadeIn(){
        welc_text.innerHTML = "Kyle Garner's Portfolio";
        welcome.style.cursor = 'default';
        let fi = setInterval(fadeI, 10);
        function fadeI(){
        if(opa >= 1){
            clearInterval(fi);
        } else {
            opa += 0.01;
            welc_text.style.opacity = opa;
        };
        };
    };
};

//Expand welcome button to width of page and become title
function expand() {
    let e = setInterval(exp, 5);
    let posx = 10;

    function exp() {
        if(posx >= 100){
            welcome.style.width = "100%";
            clearInterval(e);
            fadeWelcome();
        } else {
            posx += 0.5;
            welcome.style.width = posx+'%'
        }
    }
};

//Move welcome button to top of page
const welcFunc = () => {
    let t = setInterval(move, 5);
    let pos = 50;

    function move(){
        if(pos >= 90) {
            clearInterval(t);
            expand();
        } else if (pos >= 80){
            pos += 0.05;
            welcome.style.bottom = pos+"%";
        } else if (pos < 80 && pos >= 75){
            pos += 0.2;
            welcome.style.bottom = pos+"%";
        } else if (pos < 75 && pos >=70) {
            pos += 0.3;
            welcome.style.bottom = pos+"%";
        } else {
            pos += 0.5;
            welcome.style.bottom = pos+"%";
        };
    };
    welcome.removeEventListener("click", welcFunc);
};

welcome.addEventListener("click", welcFunc);