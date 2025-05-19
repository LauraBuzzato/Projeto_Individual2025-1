var quantidade = []

function mostrarquantidadelivros() {
    var idUsuarioVar = sessionStorage.ID_USUARIO
    div_qtdlidos.innerHTML = ``

    fetch("/livros/mostrarquantidadelivros", {
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
                resposta.json().then(function (KPI) {
                    quantidade = KPI[0]
                    div_qtdlidos.innerHTML = `<h3>${quantidade.total}</h3>`


                });


            } else {
                throw "Houve um erro ao tentar buscar os dados!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });





}

var generos = []
var quantidades = []

function mostrargeneros() {
    var idUsuarioVar = sessionStorage.ID_USUARIO

    fetch("/livros/mostrargeneros", {
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
                    ggeneros = [];
                quantidades = [];

                dados.forEach(function (item) {
                    generos.push(item.genero);
                    quantidades.push(item.qtd);
                });

                myChart.data.labels = generos;
                myChart.data.datasets[0].data = quantidades;
                myChart.update();

                });


            } else {
                throw "Houve um erro ao tentar buscar os dados!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });


}

var avaliacoes = []

function mostraravaliacoes(){
    var idUsuarioVar = sessionStorage.ID_USUARIO
    div_avaliacao.innerHTML = ``

    fetch("/livros/mostraravaliacoes", {
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
            var estrela = `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#ffffa8" stroke="#f0e68c" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`

            if (resposta.ok) {
                resposta.json().then(function (dados) {
                    avaliacoes = dados
                    
                    for(i=0;i< avaliacoes.length; i++){
                        nota = Number(avaliacoes[i].nota)
                        estrelas =`${estrela}`.repeat(nota)
                        div_avaliacao.innerHTML += `<div class="container_avaliacao"><button class="btn_fechar" onclick="excluirAvaliacao(${avaliacoes[i].fklivro})">×</button><img src="${avaliacoes[i].urlCapa}" alt="" width="100px" height="150px"> <div class="containertextos"><div class="tamanhoestrela">${estrelas}</div><h2>${avaliacoes[i].avaliacao}</h2></div></div>`
                    }


                });


            } else {
                throw "Houve um erro ao tentar buscar os dados!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function excluirAvaliacao(idLivro){
    var idUsuarioVar = sessionStorage.ID_USUARIO

  fetch("/livros/excluirAvaliacao", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      idLivroServer: idLivro,
      idUsuarioServer: idUsuarioVar
    }),
  })
    .then((resposta) => {
      if (resposta.ok) {
        
          mostraravaliacoes()

      } else {
        console.error("Erro ao excluir livro.")
      }
    })
    .catch((erro) => {
      console.error("Erro na requisição:", erro)
    });
}