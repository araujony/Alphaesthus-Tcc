//ABA CURSOS 

//Modal/pop-up
function openPopup() {
    document.getElementById('popup-container').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup-container').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

//Carrossel
function direcao(e, vestibular){
    
    var move = document.querySelector("#" + vestibular);
    if(e == 1 || e == 3){
        //esquerda
       move.scrollLeft -= 200;
       
    } else if(e == 2 || e == 4){
        //direita
        move.scrollLeft += 200;
        }
}
function direcao(e, tec){
    
    var move = document.querySelector("#" + tec);
    if(e == 1 || e == 3){
        //esquerda
       move.scrollLeft -= 200;
       
    } else if(e == 2 || e == 4){
        //direita
        move.scrollLeft += 200;
        }
}
function direcao(e, prof){
    
    var move = document.querySelector("#" + prof);
    if(e == 1 || e == 3){
        //esquerda
       move.scrollLeft -= 200;
       
    } else if(e == 2 || e == 4){
        //direita
        move.scrollLeft += 200;
        }
} 
function direcao(e, bootcamp){
    
    var move = document.querySelector("#" + bootcamp);
    if(e == 1 || e == 3){
        //esquerda
       move.scrollLeft -= 200;
       
    } else if(e == 2 || e == 4){
        //direita
        move.scrollLeft += 200;
        }
}
//ABA SOBRE

//Slide 

//Buscar elementos
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const slides = document.querySelectorAll('.slide');

//configurando o autoplay
const auto = true;
//intervalo de transição
const intervalo = 5000;
//Exibição do intervalo
let temp;
//eventos
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function nextSlide() {
    //localizando a classe atual
    const atual = document.querySelector('.atual');
    //remover a classe atual do elemento selecionado
    atual.classList.remove('atual');
    //verificar se existe um próximo elemento
    if (atual.nextElementSibling){
        atual.nextElementSibling.classList.add('atual');
    } else {
        slides[0].classList.add('atual');
    }
}
function prevSlide() {
    const atual = document.querySelector('.atual');
    atual.classList.remove('atual');
    if (atual.previousElementSibling) {
        atual.previousElementSibling.classList.add('atual');
    } else {
        slides[slides.length-1].classList.add('atual');
    }
}
//controle do autoplay
if (auto) {
    //ativa a função next slide
    temp = setInterval(nextSlide, intervalo);
}