//Welcome button
let welcome = document.getElementById("welcome");

welcome.onclick = function(){
    let t = setInterval(move, 5);
    let pos = 350;

    function move(){
        if(pos >= 650) {
            clearInterval(t);
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
            pos += 10;
            welcome.style.bottom = pos+"px";
        };
    };
};


