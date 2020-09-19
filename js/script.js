const cards =document.querySelectorAll(".card");
var hasFlippedCard=false;
var firstCard,secondCard;
function flipCard(){
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
cards.forEach((card) =>{
    card.addEventListener('click', flipCard);
})
function checkFOrMatch(){
    if(firstCard.dataset.card===secondCard.dataset.card){
        disableCards();
        return;
    }
    unflipCards();
}