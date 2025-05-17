var lidos = []

function mostrarLido(){
    var idUsuarioVar = sessionStorage.ID_USUARIO
    div_lidos.innerHTML = ``

    fetch("/livros/mostrarLido", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUsuarioServer: idUsuarioVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            resposta.json().then(function (dados) {
          lidos = dados

          for(i=0; i<lidos.length; i++){
        div_lidos.innerHTML += `<div><img src="${lidos[i].urlCapa}" alt="" width="100px" height="150px"><br>${lidos[i].nome}<br>${lidos[i].genero}<br><button onclick="excluir()">Excluir</button></div>`
      }
           
        });


        } else {
          throw "Houve um erro ao tentar buscar os livros lidos!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

      


    
}