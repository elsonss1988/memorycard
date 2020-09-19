const cards =document.querySelectorAll(".card");
var hasFlippedCard=false;
var firstCard,secondCard;
var lockBoard=false;

//virar os Cards

function flipCard(){
    if(lockBoard) return;
    if(this === firstCard) return;

    //this.classList.toggle('flip');
    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard=true
        firstCard=this;
        return;
    }
    secondCard=this;
    hasFlippedCard=false;
    checkFOrMatch();
}
//monitora o clique
cards.forEach((card) =>{
    card.addEventListener('click', flipCard);
})
//checa os matches das cartas
function checkFOrMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}
//manter cartas viradas no match
function disableCards(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
    resetBoard();
}
//vira as cartas se não houver match
function unflipCards(){
    lockBoard=true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        //lockBoard=false;
        resetBoard();
    },1500);
}

function resetBoard(){
    [hasFlippedCard,lockBoard]=[false,false];
    [firstCard,secondCard]=[null,null];
}