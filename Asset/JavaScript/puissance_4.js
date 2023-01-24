let round = true;
let scoreOne = 0;
let scoreTwo = 0;
let scoreDraw = 0;
let gameOver = false
let modeCpu = false
let player = "";
let cells = document.querySelectorAll(".cell");
let coinsSound = new Audio ("../son/jeton.mp3")
let victorySound = new Audio ("../son/victoire.mp3")


//*****************************Fonction Jeu**********************************************

function addcoins(elem) {

    if (gameOver == false) {
        for (let i = elem.children.length - 1; i >= 0; i--) {
            if (!elem.children[i].hasAttribute("alreadyPlayed")) {
                elem.children[i].setAttribute("alreadyPlayed", "true");
                elem.children[i].style.background = round ? 'rgb(255, 200, 71)' : 'rgb(221, 10, 10)';
                i = -1
                coinsSound.play()
                round = !round
                win()
                draw()
                if (gameOver == false && modeCpu == true) {
                    
                    waiting()
                    win()
                    draw()
                }
            }
        }
    }
}

//*********************************Fonction Victoire*******************************************


function win() {

    for (let i = 0; i < cells.length; i++) {

        if (cells[i].style.backgroundColor == 'rgb(221, 10, 10)' || cells[i].style.backgroundColor == 'rgb(255, 200, 71)') {

            if (cells[i].classList.contains("vColumn")) {

                if (cells[i].style.background == cells[i + 1].style.background && cells[i].style.background == cells[i + 2].style.background && cells[i].style.background == cells[i + 3].style.background) {
                    cells[i].classList.add('animate__heartBeat') == cells[i + 1].classList.add('animate__heartBeat') == cells[i + 2].classList.add('animate__heartBeat') == cells[i + 3].classList.add('animate__heartBeat')
                    if (cells[i].style.backgroundColor == 'rgb(221, 10, 10)') {

                        scoreOne++
                        document.querySelector("#score1").innerHTML = scoreOne;
                        document.querySelector("#score2").innerHTML = scoreTwo;
                        document.querySelector("#victory").innerText = (`Victoire des rouges`);
                        

                    } else {

                        scoreTwo++
                        document.querySelector("#score2").innerHTML = scoreTwo;
                        document.querySelector("#score1").innerHTML = scoreOne;
                        document.querySelector("#victory").innerText = (`Victoire des jaunes`);
                        
                    }
                    victorySound.play()
                    gameOver = true;
                }
            }

            if (cells[i].classList.contains("vLine")) {

                if (cells[i].style.background == cells[i + 6].style.background && cells[i].style.background == cells[i + 12].style.background && cells[i].style.background == cells[i + 18].style.background) {
                    cells[i].classList.add('animate__heartBeat') == cells[i + 6].classList.add('animate__heartBeat') == cells[i + 12].classList.add('animate__heartBeat') == cells[i + 18].classList.add('animate__heartBeat')
                    if (cells[i].style.backgroundColor == 'rgb(221, 10, 10)') {

                        scoreOne++
                        document.querySelector("#score1").innerHTML = scoreOne
                        document.querySelector("#score2").innerHTML = scoreTwo;
                        document.querySelector("#victory").innerText = (`Victoire des rouges`);
                        
                    } else {

                        scoreTwo++
                        document.querySelector("#score2").innerHTML = scoreTwo;
                        document.querySelector("#score1").innerHTML = scoreOne;
                        document.querySelector("#victory").innerText = (`Victoire des jaunes`);
                        
                    }
                    victorySound.play()
                    gameOver = true;
                }

            }
            if (cells[i].classList.contains("vDiagonalDown")) {

                if (cells[i].style.background == cells[i + 7].style.background && cells[i].style.background == cells[i + 14].style.background && cells[i].style.background == cells[i + 21].style.background) {
                    cells[i].classList.add('animate__heartBeat') == cells[i + 7].classList.add('animate__heartBeat') == cells[i + 14].classList.add('animate__heartBeat') == cells[i + 21].classList.add('animate__heartBeat')
                    if (cells[i].style.backgroundColor == 'rgb(221, 10, 10)') {

                        scoreOne++
                        document.querySelector("#score1").innerHTML = scoreOne
                        document.querySelector("#score2").innerHTML = scoreTwo;
                        document.querySelector("#victory").innerText = (`Victoire des rouges`);
                        

                    } else {

                        scoreTwo++
                        document.querySelector("#score2").innerHTML = scoreTwo;
                        document.querySelector("#score1").innerHTML = scoreOne;
                        document.querySelector("#victory").innerText = (`Victoire des jaunes`);
                        
                    }
                    victorySound.play()
                    gameOver = true;
                }
            }

            if (cells[i].classList.contains("vDiagonalUp")) {

                if (cells[i].style.background == cells[i + 5].style.background && cells[i].style.background == cells[i + 10].style.background && cells[i].style.background == cells[i + 15].style.background) {
                    cells[i].classList.add('animate__heartBeat') == cells[i + 5].classList.add('animate__heartBeat') == cells[i + 10].classList.add('animate__heartBeat') == cells[i + 15].classList.add('animate__heartBeat')
                    if (cells[i].style.backgroundColor == 'rgb(221, 10, 10)') {


                        scoreOne++
                        document.querySelector("#score1").innerHTML = scoreOne
                        document.querySelector("#score2").innerHTML = scoreTwo
                        document.querySelector("#victory").innerText = (`Victoire des rouges`);
                        
                    } else {

                        scoreTwo++
                        document.querySelector("#score2").innerHTML = scoreTwo;
                        document.querySelector("#score1").innerHTML = scoreOne;
                        document.querySelector("#victory").innerText = (`Victoire des jaunes`);
                        
                    }
                    victorySound.play()
                    gameOver = true;
                }
            }
        }
    }
}

//********************Fonction Match Nul*********************************** 

function draw() {
    let count = 0
    if (gameOver == false) {
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].style.backgroundColor != "") {
                count++
            }
        }
        if (count == 42) {
            scoreDraw++
            document.querySelector("#scoreDraw").innerHTML = scoreDraw;
        }
    }

}

//********************Fonction rejouer************************************** 

function replay() {

    son() 
    let cells = document.querySelectorAll(".cell")
    for (let i = 0; i < cells.length; i++) {

        cells[i].style.backgroundColor = ''
        cells[i].removeAttribute("alreadyPlayed")
        cells[i].classList.remove("animate__heartBeat")
    }
    
    round = true
    gameOver = false

}
// *************Fonction mise en attente*****************************/
function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

async function waiting()
{
    // Traitement
    const sec = (Math.floor(Math.random() * 3) + 1) // get number between 1-5
    console.log(`Attend ${sec} seconde`);
    await sleep(sec); //On attend 1 secondes avant d'exécuter la fonction
    random()
}


//********************Fonction CPU*********************************** 

function cpuMode() {
    son() 
    
    modeCpu = !modeCpu

    if (modeCpu == true) {
        document.getElementById("computer").setAttribute("style", "box-shadow:inset 5em 10em rgb(10, 66, 138)")
    } else if (modeCpu == false) {
        document.getElementById("computer").removeAttribute("style", "box-shadow")
    }
    replay()
}

//********************Fonction random*********************************** 

function random() {
    
    player = !round
    let cells = document.querySelectorAll('.cell')
    let cpu = randomNumber(0, 41)
    let elem = cells[cpu].parentNode

    while (true) {
        
        if (elem.children[0].hasAttribute("alreadyPlayed")) {
            cpu = randomNumber(0, 41)
            elem = cells[cpu].parentNode         
        } else {
            break
        }
    }
    
    for (let i = elem.children.length - 1; i >= 0; i--) {
        
        if (!elem.children[i].hasAttribute("alreadyPlayed")) {
            elem.children[i].setAttribute("alreadyPlayed", "true");
            coinsSound.play()
            elem.children[i].style.background = round ? 'rgb(255, 200, 71)' : 'rgb(221, 10, 10)';
            i = -1
            round = !round
            if (gameOver == false && modeCpu == true) {
                
                win()
                draw()
                
            } 
            
        }
    }
    
}


//********************Fonction random number*********************************** 

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//********************Fonction refresh*********************************** 

function restart() {
    son() 
    let refresh = document.getElementById("refresh");
    refresh.addEventListener("click", location.reload(), false);
}

// *************Fonction son*****************************/

let trueSon = new Audio("./son/Rejouer.mp3")




function son() { //Déclaration de la fonction
    let musique = document.querySelector(".audio") //Création de la variable musique = dans le dom selectionne moi l'id audio
    trueSon.play() // Joue moi le son
}

