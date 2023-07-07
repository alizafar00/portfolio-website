// toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section 
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// scroll sections 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar links 
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
                // sec.classList.replaceadd('show-animate');
            })
            // active section for animation 
            sec.classList.add('show-animate');
        }
        
        // else {
        //     sec.classList.remove('show-animate');
        // }
    })


    // sticky header 
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);


    // remove toggle icon and navbar when click nav bar link {scroll} 
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation footer in scroll 
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

let home = document.getElementById("#home");
let about = document.getElementById("#about");
let education = document.getElementById("#education");
let skills = document.getElementById("#skills");
let contact = document.getElementById("#contact");




console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false
let rem = document.getElementById("game");
let img = document.getElementById("image");




// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X";
}

// Function to check for a win

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2,],
        [3, 4, 5,],
        [6, 7, 8,],
        [0, 3, 6,],
        [1, 4, 7,],
        [2, 5, 8,],
        [0, 4, 8,],
        [2, 4, 6,],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            rem.classList.add('display');
            img.classList.remove("display");
            isgameover = true 
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(boxx =>{
    let boxtext = boxx.querySelector('.boxtext');
    boxx.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for" + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    rem.classList.remove("display");
    img.classList.add('display');
    Array.from(boxtexts).forEach(text => {
        text.innerText = "";
    });
    turn = "X"
    isgameover = false 
    document.getElementsByClassName("info")[0].innerText  =  "Turn for" + turn;

    
  

})