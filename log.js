let botao = document.querySelector(".button")

botao.addEventListener("click", function(){
    let answer = document.querySelector(".answer")
    let list = ["paciência", "paixão", "paz", "perdão", "perfeição", "perseverança", "persistência", "pontualidade"]
    
    answer.innerHTML = list[parseInt(Math.random() * 7)]
})