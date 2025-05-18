var lidos = []

function mostrarLido() {
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

          for (i = 0; i < lidos.length; i++) {
            div_lidos.innerHTML += `<div class="container_livro">
    <button class="btn_fechar" onclick="excluirLivro(${lidos[i].fklivro})">×</button>
    <div class="conteudo_livro">
      <img src="${lidos[i].urlCapa}" alt="" width="100px" height="150px">
      <div class="livro_nome"><span class="escrita_titulo">${lidos[i].nome}</span></div>
      <div class="livro_autor"><span class="escrita_autor"><u>${lidos[i].autor}</u></span></div>
      <div class="livro_genero"><span class="escrita_genero">${lidos[i].genero}</span></div>
    </div>
  </div>`
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

function excluirLivro(idlivroVar) {
  var idUsuarioVar = sessionStorage.ID_USUARIO

  fetch("/livros/excluirLido", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idLivroServer: idlivroVar,
      idUsuarioServer: idUsuarioVar
    }),
  })
    .then((resposta) => {
      if (resposta.ok) {
        
          mostrarLido()

      } else {
        console.error("Erro ao excluir livro.")
      }
    })
    .catch((erro) => {
      console.error("Erro na requisição:", erro)
    });
}

