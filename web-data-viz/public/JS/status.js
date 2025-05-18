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

            if (resposta.ok) {
                resposta.json().then(function (dados) {
                    avaliacoes = dados
                    
                    for(i=0;i< avaliacoes.length; i++){
                        nota = Number(avaliacoes[i].nota)
                        estrelas ='⭐'.repeat(nota)
                        div_avaliacao.innerHTML += `<div class="container_avaliacao"><img src="${avaliacoes[i].urlCapa}" alt="" width="100px" height="150px"> <div class="containertextos"><span class="tamanhoestrela"><h2>${estrelas}</h2></span><h2>${avaliacoes[i].avaliacao}</h2></div></div>`
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