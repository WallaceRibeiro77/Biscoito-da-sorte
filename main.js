let cookie = document.querySelector(".cookie");
let cookieOpen = document.querySelector(".cookieOpen");
let button = document.querySelector(".btnReset");

let title = document.querySelector("h1");
let text = document.querySelector("p");

let words = ["Você vai conquistar sua vaga logo logo", "Sua persistencia será notada!", "Tenha fé em Deus, pois ele esta fazendo tudo por você", "Você deu um grande passo e agora falta pouco para conseguir", "Muito bem, com tanta determinação assim você vai longe!","A vida é feita de escolhas e voce fez muito bem ela!","Não de ouvidos a quem nao faz parte da sua caminhada","Só voce sabe o que é melhor pra você","Você encontrara o que mais deseja logo logo","Foco no desenvolvimento, voce será um grande programador"];

let randomNumber = Math.round(Math.random() * 10);



cookie.addEventListener("click", handleResetClick);
button.addEventListener("click", handleResetClick);

function handleResetClick(e){
    e.preventDefault();
    change() 
}

function change(){
    cookie.classList.toggle("hide");
    cookieOpen.classList.toggle("hide");
    button.classList.toggle("hide");
    text.classList.toggle("word");
    
    changeTexts();
    randomNumber = Math.round(Math.random() * 10);
}

function changeTexts(){
    if(cookie.classList.contains("hide")){
        title.innerText = "Aqui está a sua sorte de hoje: ";
        text.innerText = words[randomNumber];
    }else{
        title.innerText = "Qual a sua sorte de hoje?";
        text.innerText = "Abra o biscoito e descubra!";
    }
}