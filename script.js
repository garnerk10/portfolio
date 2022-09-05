//Welcome button
let welcome = document.getElementById("welcome");
let welc_text = document.getElementById("welc_text");
let mainDisplay = document.getElementById("mainDisplay");

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
            mainDisplay.style.opacity = opa;
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
            mainDisplay.style.display = "flex";
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
        if(pos >= 89) {
            clearInterval(t);
            welcome.style.bottom="auto";
            welcome.style.top=0;
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

//left arrow button
let leftArrow = document.getElementById("left_arrow");

const leftRed = () => {
    leftArrow.src ="resources/left_red.png"
};

const leftClear = () => {
    leftArrow.src = "resources/left.png";
};

const leftBlue = () => {
    leftArrow.src = "resources/left_blue.png"
}

leftArrow.addEventListener("mouseover", leftRed);
leftArrow.addEventListener("mouseleave", leftClear);
leftArrow.addEventListener("mousedown", leftBlue);
leftArrow.addEventListener("mouseup", leftRed);

//right arrow button
let rightArrow = document.getElementById("right_arrow");

const rightRed = () => {
    rightArrow.src ="resources/right_red.png"
};

const rightClear = () => {
    rightArrow.src = "resources/right.png";
};

const rightBlue = () => {
    rightArrow.src = "resources/right_blue.png"
}

rightArrow.addEventListener("mouseover", rightRed);
rightArrow.addEventListener("mouseleave", rightClear);
rightArrow.addEventListener("mousedown", rightBlue);
rightArrow.addEventListener("mouseup", rightRed);

//Array containing projects

let projArray = [projClub, projBrewing];

const projClub = {
    title: "Board Game Club",
    image: "resources/game_club_img.png",
    description:  "Project from Codecademy to create a website for a club utilizing HTML and CSS.",
    link: "https://garnerk10.github.io/board-game-club/board-game-club/"
};

const projBrewing = {
    title: "K12 Brewing Company",
    image: "resources/k12_img.png",
    description: "Project from Codecademy creating a website to showcase adaptive web page design",
    link: "https://garnerk10.github.io/K12Brewing/",
};