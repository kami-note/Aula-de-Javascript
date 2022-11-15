var imagem = document.createElement("img");
imagem.src = "src/gostoso.jpg";
imagem.width = 80;
imagem.height = 80;

var p = document.createElement("h1");
p.innerHTML = "Nada por enquanto tbm...";

document.getElementById("conteudo").appendChild(p);
document.getElementById("conteudo").appendChild(imagem);

document.getElementById("btn-red").addEventListener("click", function() {
    document.getElementById("titulo").setAttribute("class", "red")
    document.getElementById("class").innerHTML = "Vermelho"
});
document.getElementById("btn-blue").addEventListener("click", function() {
    document.getElementById("titulo").setAttribute("class", "blue")
    document.getElementById("class").innerHTML = "Azul"
});
document.getElementById("btn-green").addEventListener("click", function() {
    document.getElementById("titulo").setAttribute("class", "green")
    document.getElementById("class").innerHTML = "Verde"
});
document.getElementById("btn-reset").addEventListener("click", function(){
    document.getElementById("titulo").removeAttribute("class")
    document.getElementById("class").innerHTML = "Padrão"
});


let nome = "Stefane"
let cidade = "1928"

switch(cidade){
    default:
        console.log("Não foi encontrado a minha cidade!")
        break
    case 'Salvador':
        console.log(nome+", Sou de Salvador!")
        break
    case 'Recife':
        console.log("Sou de "+ cidade + "!")
        break

}

let hora = Date()

for (let i = 0; i <= 10; i++) {
    console.log(i)
}


