function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const fruits = ["images/apple.jpg",
    "images/banana.jpg",
    "images/kiwi.jpg",
    "images/orange.jpg",
    "images/papaya.jpg",
    "images/berry.jpg",
    "images/melon.jpg",
    "images/quince.jpg",
    "images/apple.jpg",
    "images/banana.jpg",
    "images/kiwi.jpg",
    "images/orange.jpg",
    "images/papaya.jpg",
    "images/berry.jpg",
    "images/melon.jpg",
    "images/quince.jpg"];

var shuf = shuffleArray(fruits);
console.log(shuf);

var count = 0;
document.getElementById("turns").innerHTML = count;

for (var i=0; i<shuf.length; i++){
    // console.log(i);
    let box = document.createElement('div');
    let tileImage = document.createElement('img');
    tileImage.src = shuf[i];
    tileImage.className = 'tile';
    box.className = 'box';


    box.onclick = function() {
        this.classList.add('boxOpen');
        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length > 1) {

                count++;
                document.getElementById("turns").innerHTML = count;

                if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
                    
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                    if(document.querySelectorAll('.boxMatch').length == shuf.length) {
                        alert(`Win - You made it in ${count} turns`);
                    }
                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                }
            }
        }, 500)
    }

    box.appendChild(tileImage);
    document.querySelector('.game').appendChild(box);
}

