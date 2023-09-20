//Start Button

const begin = document.getElementById("startbtn")

begin.onclick = start;

//Game loop

let catsSaved = 0

let deadCats = 0

let lives = document.getElementById("lifeCounter")

let counter = document.getElementById("catSaveCounter")

let text = document.getElementById("saveThem")

let winWidth = window.innerWidth;

console.log(winWidth);

function start() {

    const dj = document.getElementById("music");
    dj.play();

    let star = document.getElementById("startbtn");
    star.style.display = "none";

    console.log("test");

    var i = 3000;

    loop(i)

    function loop(i){
        //stops the game if you lost
        
        if (deadCats === 5) {
            
            text.innerHTML = "You lost!!!!! :(";
            dj.pause();
            star.innerHTML = "Restart"
            star.style.display = "block"
            star.onclick = function() {
                document.location.reload(false);
            }
            return;
        
        }
        //actual game loop

        setTimeout(function(){
            
            fall();
            if (i > 500) {
                i = i - 100;
                console.log(i)
                loop(i);
            } else {
                loop(i);
            }

        }, i);
    }

}

//determines the falling of the cats

function fall() {

    let audio = new Audio('https://docs.google.com/uc?export=download&id=1J17_fixDP17Dn-eFW1qcLpD1AqTCsVoc');

    let audio2 = new Audio('https://docs.google.com/uc?export=download&id=1UDZhqHMEX0Skp5qoEqLq8R9JJBSbZjGo');
   
    var pos = getRandomNumber(0, winWidth - 100);
    
    console.log(pos);
    
    var cat = document.createElement("button");
    
    var saved = false

    if (winWidth > 1000) {  
        cat.innerHTML = "<img src=\"assets/gato.png\" style=\"height:130px; width:130px\">";
    } else {
        cat.innerHTML = "<img src=\"assets/gato.png\" style=\"height:250px; width:250px\">";
    }
    
    cat.className = "cats";
    
    cat.style.left = pos +"px";
    
    cat.onclick = function() {
        cat.remove();
        audio2.play();
        catsSaved++;
        console.log(catsSaved)

        if (deadCats < 5) {
            counter.innerHTML = "Cats saved: " + catsSaved;
        }
        
        saved = true
    }
    
    document.body.appendChild(cat);
    //removes dead cats

    setTimeout(function(){
        
        if (saved === false){
            cat.setAttribute("disabled", "true");

            if (winWidth > 1000) {
                cat.innerHTML = "<img src=\"assets/explosion.gif\" style=\"height:130px; width:130px\">";
            } else {
                cat.innerHTML = "<img src=\"assets/explosion.gif\" style=\"height:220px; width:220px\">";
            }

            audio.play();
            deadCats++;
            console.log(deadCats);

            if (deadCats < 6) {
                lives.innerHTML = "Lives: " + (5 - deadCats);
            }

            setTimeout(function(){
                cat.remove();
            }, 2500)

        }
    }, 2000);
}

function getRandomNumber(min, max) {
    
    return Math.random() * (max - min) + min;
      
  }