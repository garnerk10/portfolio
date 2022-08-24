//Welcome button
let welcome = document.getElementById("welcome");

function expand() {
    let e = setInterval(exp, 5);
    let posx = 10;

    function exp() {
        if(posx >= 100){
            welcome.style.width = "100%";
            clearInterval(e);
        } else {
            posx += 0.5;
            welcome.style.width = posx+'%'
        }
    }
};

welcome.onclick = function(){
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
};


