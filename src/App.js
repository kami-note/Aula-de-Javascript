var imagem = document.createElement("img")
imagem.src = "src/gostoso.jpg"
imagem.width = 80
imagem.height = 80

var p = document.createElement("p")
p.innerHTML = "Nada por enquanto tbm..."

document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(imagem)

