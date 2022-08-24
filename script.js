//Welcome button
let welcome = document.getElementById("welcome");

function expand() {
    let e = setInterval(exp, 5);
    let posx = 10;

    function exp() {
        if(posx >= 100){
            welcome.style.width = "100%";
            welcome.style.paddingLeft = '';
            welcome.style.paddingRight = '';
            clearInterval(e);
        } else {
            posx += 0.5;
            welcome.style.width = posx+'%'
        }
    }
};

welcome.onclick = function(){
    let t = setInterval(move, 5);
    let pos = 350;

    function move(){
        if(pos >= 650) {
            clearInterval(t);
            expand();
        } else if (pos >= 550){
            pos += 1;
            welcome.style.bottom = pos+"px";
        } else if (pos < 550 && pos >= 500){
            pos += 2;
            welcome.style.bottom = pos+"px";
        } else if (pos < 500 && pos >=450) {
            pos += 3;
            welcome.style.bottom = pos+"px";
        } else {
            pos += 5;
            welcome.style.bottom = pos+"px";
        };
    };
};


