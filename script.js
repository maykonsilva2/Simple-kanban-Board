/**help */
function log(message){
    console.log('> ' + message);
}

/* app */


 //A funcao querySelectorAll() permite que os seletores CSS sejam usados no JavaScript , .card o ponto faz ele procurar todas as classes.
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone')


/** our cards */

//O método forEach() executará uma função para cada elemento presente em um array.
cards.forEach((card) => {
    // Para cada card será adicionado um evento com um callback(função que será chamada.)
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
})

//Quando o objeto está sendo arrastado
function  dragstart(){
    //log('CARD: start dragging');
    dropzones.forEach((dropzone) => { return dropzone.classList.add('highlight')})
    //this está se referenciando ao primeiro card chamando essa function this = card
    this.classList.add('is-dragging')
}
// Enquanto o elemento está sendo arrastado
function  drag(){
    //log('CARD: is draggind');
}

//Quando o elemento parar de arrastar
function  dragend(){
    //log('CARD: stop draggind');
    dropzones.forEach((dropzone)=>{ return dropzone.classList.remove('highlight')})
    //this = card
    this.classList.remove('is-dragging') 
}

/**place where we will drop cards*/

dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
})

//quando o objeto arrastado entra na zona de drop
function dragenter(){
    log('DROPZONE: enter in zone')
}
//quando o objeto esta em cima do local de drop
function dragover(){
    log('DROPZONE: over')
    //this = dropzone
    this.classList.add('over')

    /** get dragging card */
    const cardBeingDragged = document.querySelector('.is-dragging');// o querySelector vai procurar o objeto com a classe is-dragging e colocarar na variavel e appendChild vai colocar o elemento arrastado como dentro do dropzone.
    //this = dropzone
    this.appendChild(cardBeingDragged);
}
//quando o objeto sai do local de onde ele deveria ser solto
function dragleave(){
    log('DROPZONE: leave')
    //this = dropzone
    this.classList.remove('over')
}
//o objeto foi solto
function drop(){
    log('DROPZONE: dropped')
    /** bug caso o class over css não remova
     * this.classList.remove('over)
     */
    
}
